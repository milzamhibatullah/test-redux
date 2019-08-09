import Constant from './Constants';
import axios from 'axios';
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

export const getNews = () => {
 return (dispatch) => {
  axios.get(Constant.BASE_NEWS_URL + 'top-headlines?country=id&apiKey=' + Constant.NEWS_API_KEY)
   .then(res => {

    return dispatch({ type: Constant.NEWS_LIST, payload: res.data.articles })
   })
   .catch(err => console.log(err))
 }
}