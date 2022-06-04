import React, { useState } from "react";
import Topbar from "./Topbar";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Queries/Actions/Auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));

    history.push("/");
  };

  console.log(formData, "ewrtyuio");

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
        }}
      >
        <h2>Login</h2>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            placeholder="Enter email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={{ width: "80%", margin: "auto", paddingLeft: "0.3rem" }}
          />
        </p>
        <p style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="Enter password"
            style={{ width: "80%", margin: "auto", paddingLeft: "0.3rem" }}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
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
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
