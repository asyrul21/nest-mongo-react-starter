import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  authLoginReducer,
  authRegisterReducer,
  loginInitialState,
} from './state/auth/reducers';

import {
  getItemsReducer,
  getSingleItemReducer,
  updateSingleItemReducer,
  createSingleItemReducer,
  deleteSingleItemReducer,
} from './state/items/reducers';

export const middlewares = [thunk];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') as any)
  : null;

const combinedReducer = combineReducers({
  //auth
  authLogin: authLoginReducer,
  authRegister: authRegisterReducer,
  // products
  getItems: getItemsReducer,
  getSingleItem: getSingleItemReducer,
  createItem: createSingleItemReducer,
  updateItem: updateSingleItemReducer,
  deleteItem: deleteSingleItemReducer,
});

// usually things are need to be loaded from local storage
const initialState = {
  authLogin: {
    ...loginInitialState,
    isAuthenticated:
      userInfoFromStorage !== null && userInfoFromStorage !== undefined,
    loggedInUser: userInfoFromStorage ? userInfoFromStorage : null,
  },
};

const store = createStore(
  combinedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
