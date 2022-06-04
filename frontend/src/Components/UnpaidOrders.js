import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/Queries/Actions/Posts";
import OrderCard from "./OrderCard";
import { Sidebar } from "./Sidebar";
import Topbar from "./Topbar";

const UnpaidOrders = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.Posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div style={{ marginLeft: "auto" }}>
      <Topbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "35%" }}>
          <Sidebar />
        </div>
        <div style={{ marginRight: "10rem" }}>
          <div style={{ marginRight: "3rem", marginBottom: "1rem" }}>
            <div style={{ alignItems: "center" }}>
              {posts.map((postOrder) => (
                <p style={{ listStyleType: "none", padding: "0.1rem" }}>
                  <OrderCard key={postOrder._id} postOrder={postOrder} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnpaidOrders;
