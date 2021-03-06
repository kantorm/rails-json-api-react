import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';

import Routes from './components/Routes';
import configureStore from './store/configureStore';

import './index.css';

const store = configureStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root'),
);
