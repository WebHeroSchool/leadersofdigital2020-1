import { UPDATE_TITLE, AUTHENTICATE } from './app.constants';

const initState = {
  auth: false,
  title: 'Application',
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return { ...state, title: action.payload }
    }

    case UPDATE_TITLE: {
      return { ...state, title: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
