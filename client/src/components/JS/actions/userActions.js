import axios from "axios";

import {
  GET_PROFILE,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  LOG_OUT,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../actionsTypes/userActionsTypes";

/********* *******************    User register action creator ********************************** */

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const response = await axios.post("/auth/register", newUser);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data.msg });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error.response.data.errors,
    });
  }
};

/********* *******************    User Longin action creator ********************************** */

export const userLogin = (userCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const response = await axios.post("/auth/login", userCred);

    localStorage.setItem("token", response.data.token);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.token });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error.response.data.errors });
  }
};

/********* *******************    Get profile action creator ********************************** */

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const response = await axios.get("/auth/currentUser", config);
    console.log(response.data);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAILED, payload: error.response.data });
  }
};

/*******************************  Log Out ********** */

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  localStorage.removeItem("token");
};
