import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider, connect } from 'react-redux';
import {store, passActionsToProps, passStateToProps} from "./redux/state_management";

const Container = connect(passStateToProps, passActionsToProps)(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Container />
  </Provider>
);