import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

/**
 * BookList
 * A table with book
 */

const BooksList = ({ category, books, eraseBook }) => {
  const filtered = category === 'All' ? books : books.filter(book => book.category === category);
  if (filtered.length >= 1) {
    return (
      <table>
        <tbody>
          {filtered.map(book => (
            <tr key={book.id}>
              <td className="bordered">
                <Book
                  id={book.id}
                  category={book.category}
                  title={book.title}
                  author={book.author}
                  pages={book.pages}
                  progress={book.progress}
                  summary={book.summary}
                  eraseBook={eraseBook}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  eraseBook: () => {},
};

BooksList.propTypes = {
  category: PropTypes.string,
  books: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      pages: PropTypes.number,
      progress: PropTypes.number,
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
