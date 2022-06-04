import {
  GET_POSTS_SUCCESS,
  GET_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  ADD_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  POST_FAIL,
  GET_POSTS_SEARCH_RESULTS,
  ADD_REPORT,
} from "../Constants/Posts";

const initialState = {
  posts: [],
  reports: [],
  post: null,
  report: null,
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };

    case GET_POST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case GET_POSTS_SEARCH_RESULTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };

    case ADD_REPORT:
      return {
        ...state,
        report: [action.payload, ...state.reports],
        loading: false,
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
      };

    case POST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
