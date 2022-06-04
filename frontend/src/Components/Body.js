import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [noPages, setNoPages] = useState(0);
  const [multiple, setMultiple] = useState(0);
  const [paperType, setPaperType] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [duration, setDuration] = useState("");

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
    if (getWin.getItem("paperType")) {
      setPaperType(JSON.parse(getWin.getItem("paperType")));
    }
    if (getWin.getItem("multiple")) {
      setMultiple(JSON.parse(getWin.getItem("multiple")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("paperType", JSON.stringify(paperType));
    localStorage.setItem("noPages", JSON.stringify(noPages));
    localStorage.setItem("duration", JSON.stringify(duration));
    localStorage.setItem("academicLevel", JSON.stringify(academicLevel));
    localStorage.setItem("multiple", JSON.stringify(multiple));
  }, [paperType, noPages, duration, academicLevel, multiple]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "60%" }}>
          <p style={{ fontSize: "40px", textAlign: "center" }}>
            Boost your grade with our essay writing services
          </p>
          <p style={{ textAlign: "center" }}>
            Our services are reliable, excellent and afford you a chance to rest
            easy with knowledge and assured quality, well thought and articulate
            writing and skilled and well-formatted articles that address the
            subject matter precisely.
          </p>
        </div>
        <div
          style={{
            width: "40%",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            padding: "1rem",
            marginTop: "1rem",
            marginRight: "1rem",
            marginBottom: "1rem",
            marginLeft: "2rem",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <p>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ marginBottom: "2px" }}>Academic Level</li>
              <li>
                <select
                  style={{ width: "60%", padding: "0.3rem" }}
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
                  style={{ width: "60%", padding: "0.3rem" }}
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
              <li style={{ marginBottom: "2px" }}>Number of Pages</li>
              <li
                style={{
                  width: "60%",
                  marginTop: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <span
                  onClick={decPage}
                  style={{
                    paddingLeft: "3.5rem",
                    paddingRight: "3.5rem",
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
                    paddingLeft: "3.5rem",
                    paddingRight: "3.5rem",
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
              <li style={{ marginBottom: "2px" }}>Urgency</li>
              <li>
                <select
                  style={{ width: "60%", padding: "0.3rem" }}
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
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
          <p>Total price (USD) ${multiple}</p>
          <Link to="/ordernow" style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundColor: "orange",
                padding: "1rem",
                width: "30%",
                margin: "auto",
                borderRadius: "8px",
                cursor: "pointer",
                color: "black",
              }}
            >
              ORDER NOW
            </div>
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          backgroundColor: "blue",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <p>
          <h3>18+</h3>
          <small>years in academic writing (offline and online)</small>
        </p>
        <p>
          <h3>9.6/10</h3>
          <small>average customers quality score</small>
        </p>
        <p>
          <h3>99%</h3>
          <small>orders delivered in time before the deadline</small>
        </p>
        <p>
          <h3>502</h3>
          <small>professional active writers</small>
        </p>
      </div>
      <div style={{ padding: "0.5rem" }}>
        StudyCopy.com is a premier genuine writing and research service
        provider. The company specializes in academic research, writing and
        presentation of assignments, projects or proposals, term papers,
        dissertations, homework, assignments, quizzes, editing, posters, book
        covers, formatting,essays, discussions, synopsis, Resume/CV,
        Business/Marketing plan, social media
        strategy(Twitter/Facebook/Instagram/LinkedIn/Tiktok/Youtube among
        others), website/apps or literary analysis among other across all the
        academic disciplines.
      </div>
      <div style={{ fontSize: "24px", marginTop: "1rem", padding: "0.5rem" }}>
        Do you have an urgent project? Are you falling behind time? Do you need
        quick and professional research and writing? Worry not, place an order
        here and our team will pick it up immediately and deliver on time.
      </div>
      <div style={{ padding: "0.5rem" }}>
        <h2 style={{ textAlign: "center" }}>Advantages of working with us</h2>
        <ul>
          <li style={{ marginTop: "0.5rem" }}>
            <span style={{ fontSize: "20px" }}>Disputes -</span> as a company,
            we are on the lookout for your best interests, as such, we are
            committed to resolve all disputes that arise amicably and timely. We
            encourage that you raise a claim with us at any time your order is
            not satisfactorily handled on our chat box or through our emergency
            number provided. As a company we value you as our client and
            development partner and a such, we endeavor to resolve any dispute
            quickly and to your satisfaction and with our money-back guarantee,
            and as a step of last resort, we will refund in full your order
            funds and look for ways and means to ensure we have respected your
            wish as our valued customer.
          </li>
          <li style={{ marginTop: "0.5rem" }}>
            <span style={{ fontSize: "20px" }}> 24/7 support -</span>{" "}
            StudyCopy.com research and writing services are available 24/7
            through holidays and weekends. We always have someone to respond and
            take care of your needs at any particular point of the day or night
            for the entire year. Do you have any challenge, concern, issue or
            even a question, worry not, our team is ready to respond any time.
          </li>
          <li style={{ marginTop: "0.5rem" }}>
            <span style={{ fontSize: "20px" }}>Plagiarism -</span> at
            StudyCopy.com we are aware any form plagiarism can result in failing
            grade for an assignment or lead to professional repercussion that
            can cause loss of a job or else. We DO take this issue with the
            seriousness that it deserves and we are committed to providing
            academic writing that is free of any plagiarism. FOR best practices
            and in building integrity and confidence with the writing order, you
            have placed with us, we have a large pool of quality assurance
            professionals that ensure that we produce educational, academic or
            professional writing and research orders that are FREE of plagiarism
            to ensure and guarantee your success at any level.
          </li>
          <li style={{ marginTop: "0.5rem" }}>
            <span style={{ fontSize: "20px" }}>Money-back guarantee -</span> Our
            company is built on integrity and financial responsibility. Our
            value for you as our customer is absolute and we will hold 100% of
            all funds released to us until an order is complete and whereas
            there is a challenge and an order is not completed, we will refund
            100% of the funds you have sent to our accounts.
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          backgroundColor: "blue",
          padding: "1rem",
        }}
      >
        <p>See what happens after you place this order.</p>
        <Link to="/ordernow" style={{ textDecoration: "none" }}>
          <p
            style={{
              marginLeft: "5rem",
              backgroundColor: "orange",
              padding: "1rem",
              borderRadius: "5px",
              cursor: "pointer",
              color: "black",
            }}
          >
            Place your order now
          </p>
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
          display: "flex",
          textAlign: "center",
        }}
      >
        <p style={{ padding: "0.5rem" }}>
          <h4>Description</h4>
          <small>
            We are the best freelance writing portal. Looking for online
            writing, editing or proofreading jobs? We have plenty of writing
            assignments to handle: Copywriting, content writing, academic
            writing and much more.
          </small>
        </p>
        <p style={{ padding: "0.5rem" }}>
          <h4>Contact Us</h4>
          <small>support@assignment-Solutions.online</small>
        </p>
        <p style={{ padding: "0.5rem" }}>
          <h4>About Us</h4>
          <small>
            We are the best freelance writing portal. Looking for online
            writing, editing or proofreading jobs? We have plenty of writing
            assignments to handle: Copywriting, content writing, academic
            writing and much more.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Body;
