import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alertReducer from "./alertReducer";
import adminReducer from "./adminReducer"


export default combineReducers({
  userReducer,
  alertReducer,
  adminReducer
});