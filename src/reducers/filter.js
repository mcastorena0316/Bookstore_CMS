import {
  CHANGE_FILTER,
} from '../actions/index';

const filter = initialState => (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filter;
