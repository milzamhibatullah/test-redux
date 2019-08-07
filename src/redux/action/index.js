import Constant from './Constants';
export const EmailChanged = (text) => {
 return {
  type: Constant.EMAIL_CHANGED,
  payload: text
 }
}

export const PasswordChanged = (val) => {
 return {
  type: Constant.PASSWORD_CHANGED,
  payload: val
 }
}