
import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = state => combineReducers({ books: booksReducer(state) });

export default rootReducer;
