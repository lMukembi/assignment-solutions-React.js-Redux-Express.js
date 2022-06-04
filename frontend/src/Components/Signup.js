import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../Redux/Queries/Actions/Auth";
import Topbar from "./Topbar";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData));

    history.goBack();
  };

  console.log(formData, "qwertyuio");
  return (
    <div>
      <Topbar />
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          padding: "1rem",
          marginTop: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      >
        <h2>Signup</h2>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            placeholder="Enter username"
            style={{
              width: "80%",
              margin: "auto",
              paddingLeft: "0.3rem",
            }}
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </p>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            placeholder="Enter email"
            style={{
              width: "80%",
              margin: "auto",
              paddingLeft: "0.3rem",
            }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </p>
        <p style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="Enter password"
            style={{
              width: "80%",
              margin: "auto",
              paddingLeft: "0.3rem",
            }}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </p>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            width: "82%",
            margin: "auto",
          }}
        >
          <input
            placeholder="Enter phone number"
            style={{
              width: "80%",
              margin: "auto",
              paddingLeft: "0.3rem",
            }}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </p>
        <button
          style={{
            backgroundColor: "orange",
            padding: "0.5rem",
            width: "40%",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
