import { GET_POSTS_SEARCH_RESULTS } from "../Constants/Posts";

import axios from "axios";

export const getPostsSearchResults = (q) => async (dispatch) => {
  try {
    const { data: posts } = await axios.get(
      `http://localhost:4000/api/search/searchPost?q=${q || "none"}`
    );
    console.log("poiuy", posts.result);
    dispatch({ type: GET_POSTS_SEARCH_RESULTS, payload: posts.result });
  } catch (error) {
    console.log(error);
  }
};
