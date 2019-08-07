import React from 'react';

//redux setup
import allReducers from './src/redux/reducer/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducers);

//screen file
import Login from './src/container/Login';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//appnavigator
const appNavigator = createStackNavigator({
  Login
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
  });

const AppContainer = createAppContainer(appNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
