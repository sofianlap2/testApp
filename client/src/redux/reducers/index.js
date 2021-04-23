import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from "./alertReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer"


export default combineReducers({
  authReducer,
  alertReducer,
  adminReducer,
  userReducer,
  postReducer
});