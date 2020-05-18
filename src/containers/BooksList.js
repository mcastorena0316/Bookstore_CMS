import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

/**
 * BookList
 * A table with book
 */

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBooks: [],
    };
  }

  componentDidMount() {
    const { category, books } = this.props;
    const filtered = category === 'All' ? books : books.filter(book => book.category === category);
    this.setState({
      currentBooks: filtered,
    });
  }

  render() {
    const { currentBooks } = this.state;
    if (currentBooks.length >= 1) {
      return (
        <table>
          <tbody>
            {currentBooks.map(book => (
              <tr key={book.id}>
                <td>
                  <Book
                    id={book.id}
                    category={book.category}
                    title={book.title}
                    pages={book.pages}
                    progress={book.progress}
                    summary={book.summary}
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
  }
}

BooksList.defaultProps = {
  category: 'All',
  books: [],
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
    }),
  ),
};

export default BooksList;
