
import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducer = state => combineReducers({
  books: booksReducer(state.books),
  filter: filterReducer(state.filter),
});

export default rootReducer;
