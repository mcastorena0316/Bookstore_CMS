import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from "../components/CategoryFilter.js";
/**
 * BookList
 * A table with book
 */

const BooksList = ({ category, books, eraseBook }) => {
  const handleRemoveBook = book => {
    eraseBook(book.id);
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    if (filter === "All") return;
    console.log(filter)
    // set filter in redux
    return;
  }

  const filtered = category === 'All' ? books : books.filter(book => book.category === category);
  if (filtered.length >= 1) {
    return (
      <>
        <CategoryFilter 
          category={category}
          handleFilterChange={handleFilterChange}
        />
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
      </>
    );
  }
  return (
    <div>
      Please add a Book!
    </div>
  );
};

BooksList.defaultProps = {
  category: 'All',
  books: [],
  eraseBook: () => { },
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
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  eraseBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
