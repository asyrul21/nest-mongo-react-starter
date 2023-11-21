import axios from 'axios';
import {
  buildJsonHeaderConfig,
  convertObjectToURLParams,
  extractErrorMessage,
} from '../utils';
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  GET_ITEMS_RESET,
  GET_SINGLE_ITEM_REQUEST,
  GET_SINGLE_ITEM_SUCCESS,
  GET_SINGLE_ITEM_FAIL,
  GET_SINGLE_ITEM_RESET,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM_RESET,
  CREATE_ITEM_REQUEST,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
  CREATE_ITEM_RESET,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  DELETE_ITEM_RESET,
} from './constants';

export const getItems =
  (
    /**
     * Filter params
     */
    params = {
      keyword: null,
    },
  ) =>
  async (dispatch: any) => {
    const { keyword } = params;

    const paramsString = convertObjectToURLParams({
      keyword,
    });

    try {
      dispatch({
        type: GET_ITEMS_REQUEST,
      });
      const { data } = await axios.get(`/api/items?${paramsString}`);
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: {
          items: data,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ITEMS_FAIL,
        payload: extractErrorMessage(error),
      });
    }
  };
export const resetGetItemsReducer = () => async (dispatch: any) => {
  dispatch({
    type: GET_ITEMS_RESET,
  });
};

export const getSingleItem = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_SINGLE_ITEM_REQUEST,
    });

    const { data } = await axios.get(`/api/items/${id}?`);

    dispatch({
      type: GET_SINGLE_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_ITEM_FAIL,
      payload: extractErrorMessage(error),
    });
  }
};
export const resetGetSingleItemReducer = () => async (dispatch: any) => {
  dispatch({
    type: GET_SINGLE_ITEM_RESET,
  });
};

export const updateSingleItem =
  (id: string, updatedItem: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({
        type: UPDATE_ITEM_REQUEST,
      });

      const {
        authLogin: { loggedInUser },
      } = getState();

      const config = buildJsonHeaderConfig(loggedInUser.token);
      const { data } = await axios.put(`/api/items/${id}`, updatedItem, config);

      dispatch({
        type: UPDATE_ITEM_SUCCESS,
      });
      dispatch({
        type: GET_SINGLE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ITEM_FAIL,
        payload: extractErrorMessage(error),
      });
    }
  };
export const resetUpdateItemReducer = () => async (dispatch: any) => {
  dispatch({
    type: UPDATE_ITEM_RESET,
  });
};

export const createSingleItem =
  (createdItem: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({
        type: CREATE_ITEM_REQUEST,
      });

      const {
        authLogin: { loggedInUser },
      } = getState();
      const config = buildJsonHeaderConfig(loggedInUser.token);
      await axios.post(`/api/items/`, createdItem, config);

      dispatch({
        type: CREATE_ITEM_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ITEM_FAIL,
        payload: extractErrorMessage(error),
      });
    }
  };
export const resetCreateItemReducer = () => async (dispatch: any) => {
  dispatch({
    type: CREATE_ITEM_RESET,
  });
};

export const deleteItem =
  (id: string) => async (dispatch: any, getState: any) => {
    try {
      dispatch({
        type: DELETE_ITEM_REQUEST,
      });

      const {
        authLogin: { loggedInUser },
      } = getState();
      const config = buildJsonHeaderConfig(loggedInUser.token);
      await axios.delete(`/api/items/${id}`, config);

      dispatch({
        type: DELETE_ITEM_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ITEM_FAIL,
        payload: extractErrorMessage(error),
      });
    }
  };
export const resetDeleteItemReducer = () => async (dispatch: any) => {
  dispatch({
    type: DELETE_ITEM_RESET,
  });
};
