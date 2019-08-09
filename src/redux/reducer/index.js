import { combineReducers } from "redux";
import loginReducer from './LoginReducer';
import AuthReducer from './AuthReducer';
import NewsReducer from './NewsReducer';

export default combineReducers({
 auth: AuthReducer,
 news: NewsReducer
});