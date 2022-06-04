import { GET_POST_SUCCESS, GET_POSTS_SUCCESS } from "../Constants/Posts";

import axios from "axios";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/post/getPosts");

    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/post/getPost/${postId}`
    );
    dispatch({ type: GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
