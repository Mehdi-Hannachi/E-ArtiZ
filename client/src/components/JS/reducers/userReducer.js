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

const initialState = {
  loading: false,
  isAuth: false,
  user: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
    case USER_LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        isAuth: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        isAuth: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: payload,
        isAuth: true,
      };

    case USER_REGISTER_FAILED:
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case GET_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        errors: payload,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default userReducer;
