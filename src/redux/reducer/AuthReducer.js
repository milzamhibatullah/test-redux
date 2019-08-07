import Constant from '../action/Constants'
const INITIAL_STATE = {
 email: '',
 password: ''
}

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case Constant.EMAIL_CHANGED:
   return { ...state, email: action.payload }; break;
  case Constant.PASSWORD_CHANGED:
   return { ...state, password: action.payload }
  default:
   return state;
 }
}