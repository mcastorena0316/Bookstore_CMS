import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';


function App({ books = [] }) {
  return (
    <div className="App">
      <BooksList
        books={books}
        category="All"
      />
      <BookForm />
    </div>
  );
}

App.propTypes = {
  books: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      pages: PropTypes.string,
      progress: PropTypes.string,
      summary: PropTypes.string,
    }),
  ),
};

App.defaultProps = {
  books: [],
};


export default App;
