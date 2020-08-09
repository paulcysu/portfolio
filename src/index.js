import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import history from 'history/browser';
import store from './store';
import App from './components/App';
import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
    <GlobalStyle />
  </Provider>,
  document.getElementById('root')
);