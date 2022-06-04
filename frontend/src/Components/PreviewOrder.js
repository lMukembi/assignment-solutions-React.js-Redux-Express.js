import React from "react";
import { Sidebar } from "./Sidebar";
import Topbar from "./Topbar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Redirect } from "react-router-dom";

const PreviewOrder = (props) => {
  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);

  const { postOrder } = props.location.state;

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
        <div style={{ marginRight: "2rem", marginBottom: "1rem" }}>
          <div>
            <h2 style={{ marginLeft: "2rem" }}>Personal Information</h2>
            <p>
              <ul style={{ listStyleType: "none" }}>
                <li style={{ marginBottom: "1rem" }}>
                  Name: {userData.result.username}
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  Email: {userData.result.email}
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  Phone: {userData.result.phone}
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h2 style={{ marginLeft: "2rem" }}>Order Details</h2>
            <p>
              <ul style={{ listStyleType: "none" }}>
                <li style={{ marginBottom: "1rem" }}>
                  Order ID: {postOrder._id}
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  Type of service: {postOrder.paperType},{" "}
                  {postOrder.subjectArea}
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  Paper format: {postOrder.paperFormat}
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  Number of Pages: {postOrder.noPages}
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  Deadline: {postOrder.duration}
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  Academic level: {postOrder.academicLevel}
                </li>
              </ul>
            </p>
          </div>

          <div style={{ marginLeft: "2rem" }}>
            <p style={{ marginLeft: "0.5rem", marginTop: "2rem" }}>
              Total price (USD) ${postOrder.multiple}
            </p>
            {!userData.result.isAdmin && (
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AdIqrPKQ4Bc_RhGH74jzldvvIbQ2qEWg7fOAm6MXieqTM5zgK-Szn5wGA45cTbDEkdsKxK6SgGJSAGKR",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: postOrder.multiple,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      alert(`Transaction completed by ${name}`);
                    });
                  }}
                />
              </PayPalScriptProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewOrder;
