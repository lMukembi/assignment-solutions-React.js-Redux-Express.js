import {
  AUTH_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  EDIT_USER,
  LOGOUT,
  GET_USER_SUCCESS,
} from "../Constants/Users";

import axios from "axios";

// Load User
export const user = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/user/me", {
      id,
    });
    localStorage.getItem("userAccount", JSON.stringify(data));
    dispatch({ type: AUTH_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Signup User
export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:8000/api/auth/signup", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    });
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    localStorage.setItem("userAccount", JSON.stringify(data));
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:8000/api/auth/login", {
      email: formData.email,
      password: formData.password,
    });

    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userAccount", JSON.stringify(data));
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

export const editUser =
  ({ id, username, email, phone }) =>
  async (dispatch) => {
    const data = localStorage.getItem("userAccount");
    const token = JSON.parse(data);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.data}`,
    };

    console.log(token.data);
    const config = {
      headers: headers,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/auth/editUser/${id}`,
        { username, email, phone },
        config
      );

      dispatch({ type: EDIT_USER, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

//Load User
export const getUser = (id) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const { token } = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/auth/${id}`,
      config
    );

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userAccount");

  dispatch({ type: LOGOUT });
};
