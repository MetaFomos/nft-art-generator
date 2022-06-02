import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  OTP_FAIL,
  OTP_SUCCESS,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem ('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

function authReducer (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case ACCOUNT_DELETED:
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case OTP_FAIL:
    case OTP_SUCCESS:
    default:
      return state;
  }
}

export default authReducer;
