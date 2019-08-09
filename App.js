import React from 'react';

//redux setup
import allReducers from './src/redux/reducer/index';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
const store = createStore(allReducers, {}, applyMiddleware(ReduxThunk));

//screen file
import Login from './src/container/Login';
import Dashboard from './src/container/Dashboard';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//appnavigator
const appNavigator = createStackNavigator({
  Login,
  Dashboard
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
  });

const AppContainer = createAppContainer(appNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </ Provider>
    )
  }
}
