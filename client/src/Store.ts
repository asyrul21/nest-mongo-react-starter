import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authLoginReducer, authRegisterReducer } from './state/auth/reducers';

import {
  getItemsReducer,
  getSingleItemReducer,
  updateSingleItemReducer,
  createSingleItemReducer,
  deleteSingleItemReducer,
} from './state/items/reducers';

export const middlewares = [thunk];

const combinedReducer = combineReducers({
  //auth
  authLogin: authLoginReducer,
  authRegister: authRegisterReducer,
  // products
  getItems: getItemsReducer,
  getSingleItem: getSingleItemReducer,
  updateItem: updateSingleItemReducer,
  createItem: createSingleItemReducer,
  deleteItem: deleteSingleItemReducer,
});

// usually things are need to be loaded from local storage
const initialState = {};

const store = createStore(
  combinedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
