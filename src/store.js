import thunkMiddleware from 'redux-thunk';
import { persistState } from 'redux-devtools';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory  } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';

import DevTools from './devtools';
import createRootReducer from './reducers';
import loggerMiddleware from './shared/middlewares/logger';
import monitorReducersEnhancer from './shared/enhancers/monitor-reducers';

export const history = createHashHistory ();

export default function configureStore(preloadedState) {
  const middlewares = __DEVELOP__
    ? [ thunkMiddleware, loggerMiddleware, routerMiddleware(history) ]
    : [ thunkMiddleware, routerMiddleware(history) ];

  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(...middlewares)
    );
  } else {
    const composes = __DEVELOP__
      ? [
        applyMiddleware(...middlewares),
        DevTools.instrument(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
      ]
      : [
        applyMiddleware(...middlewares),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
      ];

    enhancer = compose(...composes);
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
