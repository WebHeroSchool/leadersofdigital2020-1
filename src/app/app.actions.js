import {
  UPDATE_TITLE
} from './app.constants';

export const updateTitle = (title = '') => {
  return {
    type: UPDATE_TITLE,
    payload: title,
  };
};
