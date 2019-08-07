import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import reducers from './reducers';
import loggerMiddleware from './shared/middlewares/logger';
import monitorReducersEnhancer from './shared/enhancers/monitor-reducers';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers)

  const store = createStore(reducers, preloadedState, composedEnhancers);

  return store;
}
