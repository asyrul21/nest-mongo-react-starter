import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  REMOVE_LOGIN_ERROR,
  // LOGIN_USER_RESET,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REMOVE_REGISTER_ERROR,
  REGISTER_USER_RESET,
} from './constants';

export const loginInitialState = {
  isAuthenticated: false,
  loggedInUser: null,
  loading: false,
  error: null,
};
export const authLoginReducer = (state = loginInitialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        loggedInUser: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        loggedInUser: null,
        error: action.payload.error,
      };
    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        loggedInUser: null,
        loading: false,
        error: null,
      };
    case REMOVE_LOGIN_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const registerInitialState = {
  loading: false,
  error: null,
  success: null,
};
export const authRegisterReducer = (
  state = registerInitialState,
  action: any,
) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        error: null,
        formDetails: null,
        loading: false,
        success: true,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.error,
      };
    case REMOVE_REGISTER_ERROR:
      return {
        ...state,
        error: null,
      };
    case REGISTER_USER_RESET:
      return {
        loading: false,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};
