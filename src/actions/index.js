const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const addBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

export {
  CREATE_BOOK, REMOVE_BOOK, addBook, removeBook,
};
