import React from 'react';
import { Provider } from 'react-redux';
import store from './src/stores'
import AppContainer from './src/navigations';

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)