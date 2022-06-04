import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li
          style={{
            width: "60%",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <Link
            to="/ordernow"
            style={{
              cursor: "pointer",
              padding: "1rem",
              borderRadius: "8px",
              backgroundColor: "orange",
              textAlign: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            Place order
          </Link>
        </li>
        <li
          style={{
            marginTop: "2rem",
            marginBottom: "1.5rem",
            marginLeft: "1rem",
            cursor: "pointer",
            padding: "0.2rem",
          }}
        >
          <Link
            to="/unpaidorders"
            style={{ textDecoration: "none", color: "black" }}
          >
            Pending orders
          </Link>
        </li>
        <li
          style={{
            marginBottom: "1.5rem",
            marginLeft: "1rem",
            cursor: "pointer",
            padding: "0.2rem",
          }}
        >
          <Link
            to="/inprogress"
            style={{ textDecoration: "none", color: "black" }}
          >
            In progress
          </Link>
        </li>
        <li
          style={{
            marginBottom: "1.5rem",
            marginLeft: "1rem",
            cursor: "pointer",
            padding: "0.2rem",
          }}
        >
          <Link
            to="/revisionorders"
            style={{ textDecoration: "none", color: "black" }}
          >
            Revision orders
          </Link>
        </li>
        <li
          style={{
            marginBottom: "1.5rem",
            marginLeft: "1rem",
            cursor: "pointer",
            padding: "0.2rem",
          }}
        >
          <Link
            to="cancelledorders"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cancelled orders
          </Link>
        </li>
      </ul>
    </div>
  );
};
