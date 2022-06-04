import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import Topbar from "./Topbar";
import { ADD_POST_SUCCESS } from "../Redux/Queries/Constants/Posts";
import axios from "axios";

const OrderNow = () => {
  const dispatch = useDispatch();
  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);

  const [orderFile, setOrderFile] = useState("");
  const [paperType, setPaperType] = useState("");
  const [subjectArea, setSubjectArea] = useState("");
  const [topic, setTopic] = useState("");
  const [paperInst, setPaperInst] = useState("");
  const [paperFormat, setPaperFormat] = useState("");
  const [noPages, setNoPages] = useState(0);
  const [spacing, setSpacing] = useState("");
  const [noSources, setNoSources] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [multiple, setMultiple] = useState(0);

  const onChangeFile = (e) => {
    setOrderFile(e.target.files[0]);
  };

  const clearForm = () => {
    setOrderFile({ orderFile: "" });
    setPaperType({ paperType: "" });
    setSubjectArea({ subjectArea: "" });
    setTopic({ topic: "" });
    setPaperFormat({ paperFormat: "" });
    setNoPages({ noPages: "" });
    setNoSources({ noSources: "" });
    setPaperInst({ paperInst: "" });
    setSpacing({ spacing: "" });
    setDuration({ duration: "" });
    setAcademicLevel({ academicLevel: "" });
  };

  const incPage = () => {
    setNoPages(noPages + 1);
    setMultiple(multiple + 10.99);
  };

  const decPage = () => {
    setNoPages(noPages - 1);
    setMultiple(multiple - 10.99);
  };

  const pageChange = (e) => {
    setNoPages(e.target.value);
  };

  const getWin = localStorage;

  useEffect(() => {
    if (getWin.getItem("academicLevel")) {
      setAcademicLevel(JSON.parse(getWin.getItem("academicLevel")));
    }
    if (getWin.getItem("duration")) {
      setDuration(JSON.parse(getWin.getItem("duration")));
    }
    if (getWin.getItem("noPages")) {
      setNoPages(JSON.parse(getWin.getItem("noPages")));
    }
    if (getWin.getItem("noSources")) {
      setNoSources(JSON.parse(getWin.getItem("noSources")));
    }
    if (getWin.getItem("paperFormat")) {
      setPaperFormat(JSON.parse(getWin.getItem("paperFormat")));
    }
    if (getWin.getItem("paperInst")) {
      setPaperInst(JSON.parse(getWin.getItem("paperInst")));
    }
    if (getWin.getItem("paperType")) {
      setPaperType(JSON.parse(getWin.getItem("paperType")));
    }
    if (getWin.getItem("spacing")) {
      setSpacing(JSON.parse(getWin.getItem("spacing")));
    }
    if (getWin.getItem("subjectArea")) {
      setSubjectArea(JSON.parse(getWin.getItem("subjectArea")));
    }
    if (getWin.getItem("topic")) {
      setTopic(JSON.parse(getWin.getItem("topic")));
    }
    if (getWin.getItem("multiple")) {
      setMultiple(JSON.parse(getWin.getItem("multiple")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("paperType", JSON.stringify(paperType));
    localStorage.setItem("subjectArea", JSON.stringify(subjectArea));
    localStorage.setItem("topic", JSON.stringify(topic));
    localStorage.setItem("paperFormat", JSON.stringify(paperFormat));
    localStorage.setItem("noPages", JSON.stringify(noPages));
    localStorage.setItem("noSources", JSON.stringify(noSources));
    localStorage.setItem("paperInst", JSON.stringify(paperInst));
    localStorage.setItem("spacing", JSON.stringify(spacing));
    localStorage.setItem("duration", JSON.stringify(duration));
    localStorage.setItem("academicLevel", JSON.stringify(academicLevel));
    localStorage.setItem("multiple", JSON.stringify(multiple));
  }, [
    paperType,
    subjectArea,
    topic,
    paperFormat,
    noPages,
    noSources,
    paperInst,
    spacing,
    duration,
    academicLevel,
    multiple,
  ]);

  const addPost = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("file", orderFile);

    console.log(orderFile, "qwertyuio");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.data}`,
    };
    const config = {
      headers: headers,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/post/createPost",
        {
          orderFile,
          paperType,
          subjectArea,
          topic,
          paperFormat,
          noPages,
          noSources,
          paperInst,
          spacing,
          duration,
          academicLevel,
          multiple,
        },
        config
      );

      dispatch({ type: ADD_POST_SUCCESS, payload: data });
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Topbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "35%" }}>
          <Sidebar />
        </div>
        <div
          style={{
            marginBottom: "3rem",
            width: "80%",
            margin: "auto",
          }}
        >
          <div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 1) 0px 0px 0px 2px",
                padding: "0.4rem",
                borderRadius: "8px",
                marginBottom: "1rem",
                marginTop: "1rem",
                marginLeft: "2rem",
                width: "60%",
              }}
            >
              Our prices start from $10.99. All papers are written from scratch
              according to your instructions by professional writers. You will
              get a high quality plagiarism free paper delivered to your email
              on time. You will also get a FREE plagiarism report alongside your
              completed paper.
              <p style={{ fontSize: "18px" }}>
                We guarantee HIGH QUALITY OF OUR CUSTOM WRITING and PROFESSIONAL
                SUPPORT AVAILABLE 24/7.
              </p>
            </div>
          </div>
          <h2 style={{ marginLeft: "2rem", marginTop: "3rem" }}>
            PAPER DETAILS
          </h2>
          <form encType="multipart/form-data">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "2px" }}>Academic Level</li>
                  <li>
                    <select
                      style={{
                        width: "60%",
                        padding: "0.3rem",
                        marginTop: "1rem",
                      }}
                      value={academicLevel}
                      onChange={(e) => setAcademicLevel(e.target.value)}
                    >
                      <option>Select level</option>
                      <option>High school</option>
                      <option>Undergraduate</option>
                      <option>Masters</option>
                      <option>Doctoral</option>
                    </select>
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "2px" }}>Type of Paper</li>
                  <li>
                    <select
                      style={{
                        width: "60%",
                        padding: "0.3rem",
                        marginTop: "1rem",
                      }}
                      value={paperType}
                      onChange={(e) => setPaperType(e.target.value)}
                    >
                      <option>Select type</option>
                      <option>Essay</option>
                      <option>Article</option>
                      <option>Assignment</option>
                      <option>Business plan</option>
                      <option>Article review</option>
                      <option>Creative writing</option>
                      <option>Critical writing</option>
                      <option>Book review</option>
                      <option>Argumentative essay</option>
                      <option>Research paper</option>
                      <option>Lab report</option>
                      <option>Math problem</option>
                      <option>Case study</option>
                      <option>Content</option>
                    </select>
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "5px" }}>Subject Area</li>
                  <li style={{ marginTop: "1rem" }}>
                    <select
                      style={{ width: "60%", padding: "0.3rem" }}
                      value={subjectArea}
                      onChange={(e) => setSubjectArea(e.target.value)}
                    >
                      <option>Select subject</option>
                      <option>Arts</option>
                      <option>Mathematics</option>
                      <option>Chemistry</option>
                      <option>Business</option>
                      <option>Biology</option>
                      <option>Engineering</option>
                      <option>Computers</option>
                      <option>Ethics</option>
                      <option>Economics</option>
                      <option>Education</option>
                      <option>Finance</option>
                      <option>Criminology</option>
                      <option>Childcare</option>
                      <option>Astronomy</option>
                      <option>Archaeology</option>
                      <option>Architecture</option>
                    </select>
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "5px" }}>Title</li>
                  <li style={{ marginTop: "1rem" }}>
                    <input
                      placeholder="Enter Topic or Title..."
                      style={{
                        marginBottom: "1rem",
                        padding: "0.3rem",
                        width: "60%",
                        borderRadius: "4px",
                        border: "0.5px solid",
                      }}
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "5px" }}>Paper Instructions</li>
                  <li style={{ marginTop: "1rem" }}>
                    <textarea
                      style={{
                        marginBottom: "1rem",
                        padding: "0.5rem",
                        borderRadius: "4px",
                        width: "60%",
                        border: "0.5px solid",
                        color: "rgba(0, 0, 0, 0.5)",
                        fontSize: "13px",
                      }}
                      cols="10"
                      rows="8"
                      value={paperInst}
                      onChange={(e) => setPaperInst(e.target.value)}
                    />
                  </li>
                </ul>
              </p>

              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "2px" }}>Paper format</li>
                  <li style={{ marginTop: "1rem" }}>
                    <select
                      style={{ width: "60%", padding: "0.3rem" }}
                      value={paperFormat}
                      onChange={(e) => setPaperFormat(e.target.value)}
                    >
                      <option>Select format</option>
                      <option>APA</option>
                      <option>MLA</option>
                      <option>Other</option>
                    </select>
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "5px" }}>Additional materials</li>
                  <li>
                    <input
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        padding: "0.3rem",
                        width: "60%",
                        borderRadius: "4px",
                        border: "0.5px solid",
                        cursor: "pointer",
                      }}
                      filename="orderFile"
                      type="file"
                      value={orderFile}
                      onChange={onChangeFile}
                    />
                  </li>
                </ul>
              </p>

              <h2 style={{ marginLeft: "2rem" }}>PRICING DETAILS</h2>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "2px" }}>Number of Pages</li>
                  <li
                    style={{
                      width: "60%",
                      marginTop: "1rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <span
                      onClick={decPage}
                      style={{
                        paddingLeft: "7.5rem",
                        paddingRight: "7.5rem",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        border: "1px solid black",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </span>
                    <span
                      style={{
                        margin: "1rem",
                        alignItems: "center",
                      }}
                      id="price"
                      value={noPages}
                      onChange={pageChange}
                    >
                      {noPages}
                    </span>
                    <span
                      onClick={incPage}
                      style={{
                        paddingLeft: "7.5rem",
                        paddingRight: "7.5rem",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        border: "1px solid black",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </span>
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "2px", marginTop: "1rem" }}>
                    Spacing
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <select
                      style={{ width: "60%", padding: "0.3rem" }}
                      value={spacing}
                      onChange={(e) => setSpacing(e.target.value)}
                    >
                      <option>Select spacing</option>
                      <option>Double spaced</option>
                      <option>Single spaced</option>
                    </select>
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "2px" }}>Number of Sources</li>
                  <li style={{ marginTop: "1rem" }}>
                    <select
                      style={{ width: "60%", padding: "0.3rem" }}
                      value={noSources}
                      onChange={(e) => setNoSources(e.target.value)}
                    >
                      <option>Select sources</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                    </select>
                  </li>
                </ul>
              </p>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginBottom: "2px" }}>Urgency</li>
                  <li>
                    <select
                      style={{
                        width: "60%",
                        padding: "0.3rem",
                        marginTop: "1rem",
                      }}
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    >
                      <option>Select time</option>
                      <option>1 Hour</option>
                      <option>3 Hours</option>
                      <option>6 Hours</option>
                      <option>9 Hours</option>
                      <option>12 Hours</option>
                      <option>18 Hours</option>
                      <option>24 Hours</option>
                      <option>48 Hours</option>
                      <option>3 Days</option>
                      <option>4 Days</option>
                      <option>5 Days</option>
                      <option>6 Days</option>
                      <option>7 Days</option>
                      <option>9 Days</option>
                      <option>10 Days</option>
                      <option>11 Days</option>
                      <option>12 Days</option>
                      <option>13 Days</option>
                      <option>14 Days</option>
                      <option>15 Days</option>
                    </select>
                  </li>
                </ul>
              </p>
            </div>
            <div
              style={{
                marginLeft: "10rem",
                marginBottom: "2rem",
              }}
            >
              <Link to="/previeworder">
                <button
                  style={{
                    backgroundColor: "orange",
                    padding: "0.5rem",
                    width: "40%",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  value={multiple}
                  onClick={addPost}
                >
                  Proceed to Payment ${multiple}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
