import { GET_POSTS_SEARCH_RESULTS } from "../Constants/Posts";
const initialState = {
  loading: true,
  results: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
