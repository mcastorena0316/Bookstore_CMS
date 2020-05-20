import {
  CREATE_BOOK, REMOVE_BOOK,
} from '../actions/index';

const books = initialState => (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => action.payload !== book.id);
    default:
      return state;
  }
};

export default books;
