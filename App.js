import React, { Component } from 'react';
import Expo from 'expo';

import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import HomeView from './components/Home/HomeView';

const composeEnhancers = compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(
  reducer,
  enhancer
);

export default class App extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  state = {
    loading: true
  };

  render() {
    return (
      <Provider store={store}>
        { this.state.loading
            ? <Expo.AppLoading />
            : <HomeView />
        }
      </Provider>
    );
  }
}