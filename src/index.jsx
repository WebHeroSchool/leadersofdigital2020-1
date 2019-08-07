import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './app/app.container';
import configureStore, { history } from './store';

import './index.scss';

// Если бразуре не имеет redux расширения                                       
const DevTools = window.devToolsExtension                                       
  ? () => null                                                                  
  : require('./devtools').default

const store = configureStore();
const $root = document.getElementById('root');

const renderApp = () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App history={history} />
        <DevTools />
      </ConnectedRouter>
    </Provider>,
    $root
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app/app.container', renderApp)
}

renderApp();
