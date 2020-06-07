import { push } from 'connected-react-router';

import {
  UPDATE_TITLE, AUTHENTICATE,
} from './app.constants';

export const updateTitle = (title = '') => {
  return {
    type: UPDATE_TITLE,
    payload: title,
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(push('/home'))
    dispatch({ type: AUTHENTICATE, payload: true })
  }
}
