import { UPDATE_TITLE} from './app.constants';

const initState = {
  title: 'Bag React Redux application',
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_TITLE: {
      return { ...state, title: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
