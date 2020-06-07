import { UPDATE_TITLE, AUTHENTICATE } from './app.constants';

const initState = {
  auth: true,
  title: 'Application',
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      console.log('AUTHENTICATE', action);

      return { ...state, auth: action.payload }
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
