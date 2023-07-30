import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from "./calc/calc";

import { Provider, connect } from 'react-redux';
import {store, passActionsToProps, passStateToProps} from "./redux/state_management";

const Container = connect(passStateToProps, passActionsToProps)(Calculator);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Container />
  </Provider>
);