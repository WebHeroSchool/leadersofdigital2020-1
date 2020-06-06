import {
  UPDATE_TITLE, AUTHENTICATE,
} from './app.constants';

export const updateTitle = (title = '') => {
  return {
    type: UPDATE_TITLE,
    payload: title,
  };
};

export const auth = () => {
  return {
    type: AUTHENTICATE,
    payload: true,
  }
}