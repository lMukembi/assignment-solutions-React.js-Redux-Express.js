import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { UPDATE_POST_SUCCESS } from "../Redux/Queries/Constants/Posts";

function OrderCard({ postOrder }) {
  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);
  const [approved, setApproved] = useState("Approve");
  const [cancelled, setCancelled] = useState("Cancel");
  const { id } = useParams();
  const dispatch = useDispatch();

  const updatePost = async (e) => {
    const data = localStorage.getItem("userAccount");
    const token = JSON.parse(data);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.data}`,
    };
    const config = {
      headers: headers,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/post/updatePost/${id}`,
        { approved, cancelled },
        config
      );

      dispatch({ type: UPDATE_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <p>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.3rem",
          }}
        >
          <li
            style={{
              marginRight: "1rem",
              listStyleType: "none",
              padding: "0.5rem",
            }}
          >
            {postOrder.length > 5
              ? postOrder.topic.substring(0, 5) + "..."
              : postOrder.topic}
          </li>
          <li
            style={{
              marginRight: "1rem",
              listStyleType: "none",
              padding: "0.5rem",
            }}
          >
            {postOrder.academicLevel}, {postOrder.duration}
          </li>
          <li
            style={{
              marginRight: "1rem",
              listStyleType: "none",
              padding: "0.5rem",
            }}
          >
            {postOrder.noPages} (Each 275 words)
          </li>
          <li
            style={{
              marginRight: "1rem",
              listStyleType: "none",
              padding: "0.5rem",
            }}
          >
            ${postOrder.multiple}
          </li>
          <li
            style={{
              marginRight: "1rem",
              listStyleType: "none",
              padding: "0.5rem",
            }}
          >
            <Link
              to={{
                pathname: `/previeworder/${postOrder._id}`,
                state: {
                  postOrder: postOrder,
                },
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <button
                style={{
                  backgroundColor: "orange",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  paddingLeft: "0.8rem",
                  paddingRight: "0.8rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {userData.result.isAdmin ? "View Order" : "Pay Now"}
              </button>
            </Link>
          </li>
          <li
            style={{
              marginRight: "1rem",
              listStyleType: "none",
              padding: "0.5rem",
              color: "green",
            }}
          >
            {userData.result.isAdmin ? (
              <li
                style={{
                  display: "flex",
                  flexDirection: "row",
                  listStyleType: "none",
                }}
              >
                <input
                  value={approved}
                  placeholder="approved"
                  style={{
                    width: "4rem",
                    marginRight: "1rem",
                    zIndex: 2,
                    borderRadius: "0.3rem",
                    cursor: "pointer",
                    color: "green",
                    border: "none",
                  }}
                  onChange={(e) => setApproved(e.target.value)}
                  onClick={updatePost}
                  type="button"
                />
                <input
                  value={cancelled}
                  placeholder="cancelled"
                  style={{
                    width: "4rem",
                    zIndex: 2,
                    borderRadius: "0.3rem",
                    cursor: "pointer",
                    color: "green",
                    border: "none",
                  }}
                  onChange={(e) => setCancelled(e.target.value)}
                  onClick={updatePost}
                  type="button"
                />
              </li>
            ) : (
              <>
                <span style={{ color: "green" }}>processing</span>
              </>
            )}
          </li>
        </ul>
      </p>
    </div>
  );
}

export default OrderCard;
