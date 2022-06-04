import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const AboutUs = () => {
  return (
    <div>
      <Topbar />

      <div>
        <h2 style={{ marginLeft: "2rem" }}>ABOUT US</h2>
        <p style={{ marginLeft: "1rem" }}>
          We are a team of professionals in an essay, article, academic and
          editing and research writing. We offer premier and genuine writing and
          research service, provider. The company specializes in academic
          research, writing and presentation of assignments, projects or
          proposals, term papers, dissertations, homework, assignments, quizzes,
          editing, posters, book covers, formatting, essays, discussions,
          synopsis, Resume or CV, Business and Marketing plan, social media
          strategy for these social media platforms such as Twitter, Facebook,
          Instagram, LinkedIn, Tiktok, Youtube among others, website or apps or
          literary analysis among other across all the academic disciplines. We
          aim to make our customers lives easy and help reach their academic and
          professional goals.
        </p>
        <p>
          <h4
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              outline: "1px orange",
            }}
          >
            <Link
              to="/ordernow"
              style={{
                textDecoration: "none",
                backgroundColor: "whitesmoke",
                padding: "1rem",
                width: "40%",
                borderRadius: "8px",
                cursor: "pointer",
                marginLeft: "1rem",
                color: "black",
              }}
            >
              ORDER YOUR PAPER NOW
            </Link>
          </h4>
          <p style={{ marginLeft: "1rem" }}>
            We are online-based research and essay writing solution, provider.
            We observe deadlines and offers deals and discounts with quality
            writing services that include free revisions, strict and timely
            delivery rules, 24/7 support system coupled with affordable and
            competitive prices. Our services are reliable, excellent and
            affordable you a chance to rest easy with knowledge and assurance of
            quality, well thought and articulate writing and skilled and
            well-formatted articles that address the subject matter precisely.
          </p>
        </p>
        <p>
          <ul
            style={{
              display: "flex",
              textAlign: "center",
              listStyleType: "none",
            }}
          >
            <li>
              <h4>Mission</h4>
              <small>
                Our mission is to create value for the client based on the
                genuine and innovative performance of the task for all-round
                customer satisfaction and stress-free experience.
              </small>
            </li>
            <li style={{ marginLeft: "1rem" }}>
              <h4>Vision</h4>
              <small>
                Our vision is to provide research-driven exceptional original
                and creative content that is plagiarism-free all on time.
              </small>
            </li>
          </ul>
        </p>
        <p style={{}}>
          <ul style={{ display: "flex" }}>
            <li
              style={{
                width: "50%",
                textAlign: "center",
                listStyleType: "none",
              }}
            >
              <h4>Policy</h4>
              Our policy is to provide cost-conscious, purpose and
              passion-driven quality content. We research-driven and we maintain
              a ZERO TOLERANCE stance in all our work and guarantee your
              authentic written content.
            </li>
            <li
              style={{
                width: "50%",
                listStyleType: "none",
              }}
            >
              <h4>Our Values</h4>
              <ol>
                <li>Client value creation</li>
                <li>Integrity</li>
                <li>Performance</li>
                <li>Passion</li>
                <li>Genuine</li>
                <li>Innovative</li>
                <li>Exceptional</li>
                <li>Customer Commitment</li>
                <li>Quality</li>
                <li>Cost-consciousness</li>
              </ol>
            </li>
          </ul>
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
          <Link to="/ordernow" style={{ textDecoration: "none" }}>
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

export default AboutUs;
