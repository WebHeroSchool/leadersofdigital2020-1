import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app.container';
import configureStore from './store';

import './index.scss';

const store = configureStore();
const $application = document.getElementById('application');

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    $application
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app/app.container', renderApp)
}

renderApp();
