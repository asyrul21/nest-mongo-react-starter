import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REMOVE_LOGIN_ERROR,
  LOGOUT_USER,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REMOVE_REGISTER_ERROR,
  REGISTER_USER_RESET,
} from './constants';

import axios from 'axios';
import { buildJsonHeaderConfig, extractErrorMessage } from '../utils';

export const loginUser =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch({
        type: LOGIN_USER_REQUEST,
      });

      const config = buildJsonHeaderConfig();
      const { data } = await axios.post(
        '/api/auth/signin',
        {
          email,
          password,
        },
        config,
      );

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data,
      });
      // set user to local storage
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: {
          error: extractErrorMessage(error),
          formDetails: {
            email,
          },
        },
      });
    }
  };

export const removeLoginErrors = () => async (dispatch: any) => {
  dispatch({
    type: REMOVE_LOGIN_ERROR,
  });
};

export const logoutUser = () => async (dispatch: any) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  dispatch({
    type: LOGOUT_USER,
  });
};

interface ICreateUser {
  name?: string;
  email?: string;
  password?: string;
}

export const registerUser =
  ({ name, email, password }: ICreateUser) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: REGISTER_USER_REQUEST,
      });
      const config = buildJsonHeaderConfig();
      const { data } = await axios.post(
        'api/auth/signup',
        {
          name,
          email,
          password,
        },
        config,
      );
      dispatch({
        type: REGISTER_USER_SUCCESS,
      });
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data,
      });
      // set user to local storage
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: {
          error: extractErrorMessage(error),
        },
      });
    }
  };

export const removeRegisterErrors = () => async (dispatch: any) => {
  dispatch({
    type: REMOVE_REGISTER_ERROR,
  });
};
export const resetRegisterUserReducer = () => async (dispatch: any) => {
  dispatch({
    type: REGISTER_USER_RESET,
  });
};
