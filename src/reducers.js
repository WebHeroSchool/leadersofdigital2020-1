import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './app/app.reducer';

const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    app: appReducer,
  });
};

export default rootReducer;
