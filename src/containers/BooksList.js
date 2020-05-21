import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, filterCategory } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

/**
 * BookList
 * A table with book
 */

const BooksList = ({
  category, books, eraseBook, filterCategory,
}) => {
  const handleRemoveBook = book => {
    eraseBook(book.id);
  };

  const handleFilterChange = e => {
    const filter = e.target.value;
    filterCategory(filter);
  };

  const filtered = category === 'All' ? books : books.filter(book => book.category === category);
  return (
    <>
      <CategoryFilter
        filter={category}
        handleFilterChange={handleFilterChange}
      />
      {filtered.length >= 1 ? (
        <table>
          <tbody>
            {filtered.map(book => (
              <tr key={book.id}>
                <Book
                  id={book.id}
                  category={book.category}
                  title={book.title}
                  author={book.author}
                  pages={book.pages}
                  progress={book.progress}
                  summary={book.summary}
                  handleRemoveBook={handleRemoveBook}
                />
              </tr>
            ))}
          </tbody>
        </table>
      ) : <p>Please add a New Book!</p>}

    </>
  );
};

BooksList.defaultProps = {
  category: 'All',
  books: [],
  eraseBook: () => { },
  filterCategory: () => { },
};

BooksList.propTypes = {
  category: PropTypes.string,
  books: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      pages: PropTypes.string,
      progress: PropTypes.string,
      summary: PropTypes.string,
    }).isRequired,
  ),
  eraseBook: PropTypes.func,
  filterCategory: PropTypes.func,
};

const mapStateToProps = state => ({
  books: state.books,
  category: state.filter,
});

const mapDispatchToProps = dispatch => ({
  eraseBook: id => dispatch(removeBook(id)),
  filterCategory: category => dispatch(filterCategory(category)),
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
