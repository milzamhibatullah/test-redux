import { combineReducers } from "redux";
import loginReducer from './LoginReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
 auth: AuthReducer
});