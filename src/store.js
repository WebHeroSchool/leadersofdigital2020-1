import thunkMiddleware from 'redux-thunk';
import { persistState } from 'redux-devtools';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';

import DevTools from './devtools';
import createRootReducer from './reducers';
import loggerMiddleware from './shared/middlewares/logger';
import monitorReducersEnhancer from './shared/enhancers/monitor-reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const middlewares = [
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(history),
  ];

  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(...middlewares)
    );
  } else {
    enhancer = compose(
      applyMiddleware(...middlewares),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    );
  }

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    enhancer,
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => { 
      store.replaceReducer(createRootReducer(history));
    });
  }

  //const store = createStore(reducers, preloadedState, composedEnhancers);

  return store;
}
