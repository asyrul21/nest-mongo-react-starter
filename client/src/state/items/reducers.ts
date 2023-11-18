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

const getItemsInitialState = {
  loading: false,
  error: null,
  items: null,
  pages: null,
  page: 1,
};
const getItemsReducer = (state = getItemsInitialState, action: any) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        error: null,
        loading: false,
        items: action.payload.items,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case GET_ITEMS_FAIL:
      return {
        error: action.payload,
        loading: false,
        items: null,
        pages: null,
        page: 1,
      };
    case GET_ITEMS_RESET:
      return {
        loading: false,
        error: null,
        items: null,
        pages: null,
        page: 1,
      };
    default:
      return state;
  }
};

const getSingleItemInitialState = {
  loading: false,
  error: null,
  item: null,
};
const getSingleItemReducer = (
  state = getSingleItemInitialState,
  action: any,
) => {
  switch (action.type) {
    case GET_SINGLE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.item,
      };
    case GET_SINGLE_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
        item: null,
      };
    case GET_SINGLE_ITEM_RESET:
      return {
        loading: false,
        error: null,
        item: null,
      };
    default:
      return state;
  }
};

const updateSingleItemInitialState = {
  loading: false,
  error: null,
  success: null,
};
const updateSingleItemReducer = (
  state = updateSingleItemInitialState,
  action: any,
) => {
  switch (action.type) {
    case UPDATE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case UPDATE_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case UPDATE_ITEM_RESET:
      return {
        loading: false,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

const createSingleItemInitialState = {
  loading: false,
  error: null,
  success: null,
};
const createSingleItemReducer = (
  state = createSingleItemInitialState,
  action: any,
) => {
  switch (action.type) {
    case CREATE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case CREATE_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CREATE_ITEM_RESET:
      return {
        loading: false,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

const deleteSingleItemInitialState = {
  loading: false,
  error: null,
  success: null,
};
const deleteSingleItemReducer = (
  state = deleteSingleItemInitialState,
  action: any,
) => {
  switch (action.type) {
    case DELETE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case DELETE_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case DELETE_ITEM_RESET:
      return {
        loading: false,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

export {
  getItemsReducer,
  getSingleItemReducer,
  updateSingleItemReducer,
  createSingleItemReducer,
  deleteSingleItemReducer,
};
