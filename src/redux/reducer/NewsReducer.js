import Constant from '../action/Constants'
const INITIAL_STATE = {
 data: [],
}

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case Constant.NEWS_LIST:
   return { ...state, data: action.payload };
   break;
  default:
   return state;
 }
}