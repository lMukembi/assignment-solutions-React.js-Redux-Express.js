import {
  GET_USER_SUCCESS,
  EDIT_USER,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../Constants/Users";

const initialState = {
  loading: true,
  userData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case EDIT_USER:
      return { ...state, loading: false, userData: action.payload };

    case LOGOUT:
      return {
        ...state,
        userData: {},
        loading: false,
      };

    default:
      return state;
  }
};
