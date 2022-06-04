import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const ContactUs = () => {
  return (
    <div>
      <Topbar />
      <h2 style={{ marginLeft: "2rem" }}>CONTACT US</h2>
      <p style={{ margin: "2rem" }}>
        We are a leading essay writing platform with 1000+ professional academic
        experts ready to help you for a guranteed 100% SATISFACTION! We are
        available 24/7 and happy to hear from you.
      </p>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <p>
          <h4>PHONE</h4>
          <small>254725540469</small>
        </p>
        <p>
          <h4>EMAIL</h4>
          <small>support@assignment-Solutions.online</small>
        </p>
        <p>
          <h4>ADDRESS</h4>
          <small>P.O. BOX 23-90100</small>
        </p>
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
        <p
          style={{
            marginLeft: "5rem",
            backgroundColor: "orange",
            padding: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <Link to="ordernow" style={{ textDecoration: "none" }}>
            Place your order now
          </Link>
        </p>
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

export default ContactUs;
