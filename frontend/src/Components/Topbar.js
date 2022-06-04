import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        justifyContent: "space-between",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        right: 0,
        left: 0,
      }}
    >
      <p style={{ fontSize: "30px", color: "orange", marginRight: "4rem" }}>
        Assignment Solutions
      </p>
      <p>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
      </p>
      <p>
        <Link to="/aboutus" style={{ textDecoration: "none", color: "black" }}>
          About Us
        </Link>
      </p>
      <p>
        <Link
          to="/contactus"
          style={{ textDecoration: "none", color: "black" }}
        >
          Contact Us
        </Link>
      </p>
      <p>
        {userData ? (
          <Link
            to={`/account/${userData.result._id}`}
            style={{
              textDecoration: "none",
              color: "blue",
              fontSize: 30,
            }}
          >
            {userData.result.username}
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                backgroundColor: "blue",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                borderRadius: "5px",
                width: "100px",
                marginRight: "1rem",
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid blue",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                borderRadius: "5px",
                width: "100px",
              }}
            >
              Signup
            </Link>
          </>
        )}
      </p>

      <p>
        <Link
          to="/ordernow"
          style={{
            textDecoration: "none",
            backgroundColor: "orange",
            padding: "1rem",
            width: "40%",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "1rem",
            color: "black",
          }}
        >
          Order Now
        </Link>
      </p>
    </div>
  );
};

export default Topbar;
