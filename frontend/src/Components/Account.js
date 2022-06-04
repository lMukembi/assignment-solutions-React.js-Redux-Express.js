import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getUser } from "../Redux/Queries/Actions/Auth";
import { Sidebar } from "./Sidebar";
import Topbar from "./Topbar";
import { EDIT_USER } from "../Redux/Queries/Constants/Users";
import axios from "axios";
import OrderCard from "./OrderCard";
import { getPosts } from "../Redux/Queries/Actions/Posts";

const Account = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);
  const { posts } = useSelector((state) => state.Posts);

  const [tab, setTab] = useState({
    order: true,
    editForm: false,
    profile: false,
  });

  useEffect(() => {
    if (!userData.result.isAdmin && !tab.profile) {
      setTab({ profile: true });
    }
    if (!userData.result.isAdmin && tab.editForm) {
      setTab({ editForm: true });
    }
  }, []);

  function logout() {
    localStorage.clear();
    history.push("/login");
  }

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts, "qwerty");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);
  const updateUser = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.data}`,
    };

    const config = {
      headers: headers,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/auth/editUser/${id}`,
        { username, email, phone },
        config
      );
      console.log(username, "qwertyuijn;");

      dispatch({ type: EDIT_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUsername(token.result.username);
    setEmail(token.result.email);
    setPhone(token.result.phone);
  }, []);

  if (!userData) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Topbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "35%" }}>
          <Sidebar />
        </div>
        <div>
          <h2 style={{ marginLeft: "2rem" }}>My Details</h2>
          <p>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                flexDirection: "row",
              }}
            >
              {userData.result.isAdmin && (
                <li
                  style={{
                    cursor: "pointer",
                    marginRight: "2rem",
                    padding: "0.5rem",
                    border: "1px solid",
                    borderRadius: "5px",
                  }}
                  onClick={() =>
                    setTab({ editForm: false, profile: false, order: true })
                  }
                >
                  Orders
                </li>
              )}

              <li
                style={{
                  cursor: "pointer",
                  marginRight: "2rem",
                  padding: "0.5rem",
                  border: "1px solid",
                  borderRadius: "5px",
                }}
                onClick={() =>
                  setTab({ order: false, editForm: false, profile: true })
                }
              >
                My Profile
              </li>

              <li
                style={{
                  cursor: "pointer",
                  marginRight: "2rem",
                  padding: "0.5rem",
                  border: "1px solid",
                  borderRadius: "5px",
                }}
                onClick={() =>
                  setTab({ order: false, profile: false, editForm: true })
                }
              >
                Edit Profile
              </li>

              <li
                style={{
                  cursor: "pointer",
                  marginRight: "2rem",
                  padding: "0.5rem",
                  border: "1px solid",
                  borderRadius: "5px",
                }}
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          </p>
          {tab.editForm && (
            <p>
              <form
                style={{
                  width: "350px",
                  padding: "1rem",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  textAlign: "center",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  style={{
                    width: "90%",
                    margin: "auto",
                    paddingLeft: "0.3rem",
                    marginTop: "1rem",
                    borderRadius: "5px",
                    border: "0.5px solid",
                    paddingTop: "0.2rem",
                    paddingBottom: "0.2rem",
                  }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  style={{
                    width: "90%",
                    margin: "auto",
                    paddingLeft: "0.3rem",
                    marginTop: "1rem",
                    borderRadius: "5px",
                    border: "0.5px solid",
                    paddingTop: "0.2rem",
                    paddingBottom: "0.2rem",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  style={{
                    width: "90%",
                    margin: "auto",
                    paddingLeft: "0.3rem",
                    marginTop: "1rem",
                    borderRadius: "5px",
                    border: "0.5px solid",
                    paddingTop: "0.2rem",
                    paddingBottom: "0.2rem",
                  }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button
                  style={{
                    width: "93%",
                    margin: "auto",
                    paddingLeft: "0.3rem",
                    backgroundColor: "orange",
                    marginTop: "1rem",
                    borderRadius: "5px",
                    border: "0.5px solid",
                    paddingTop: "0.2rem",
                    paddingBottom: "0.2rem",
                    cursor: "pointer",
                  }}
                  onClick={(e) => updateUser(e)}
                >
                  Edit
                </button>
              </form>
            </p>
          )}
          {tab.profile && (
            <p>
              <ul
                style={{
                  display: "flex",
                  listStyleType: "none",
                  flexDirection: "column",
                }}
              >
                <li style={{ marginTop: "1rem" }}>
                  Account ID: {userData.result._id}
                </li>
                <li style={{ marginTop: "1rem" }}>
                  Full Name: {userData.result.username}
                </li>
                <li style={{ marginTop: "1rem" }}>
                  Email: {userData.result.email}
                </li>
                <li style={{ marginTop: "1rem" }}>
                  Phone: {userData.result.phone}
                </li>
              </ul>
            </p>
          )}
          {tab.order && (
            <>
              <h2 style={{ marginLeft: "2.5rem" }}>Recent Orders</h2>

              <p>
                {posts.map((postOrder) => (
                  <p style={{ listStyleType: "none", padding: "0.1rem" }}>
                    <OrderCard key={postOrder._id} postOrder={postOrder} />
                  </p>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
