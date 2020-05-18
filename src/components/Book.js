import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

/**
 * Book
 *
 * Book component shows the information regarding
 * a book
 * @param {Object} props Data from parent
 * @return {React.Component} Book
 */
const Book = props => {
  const {
    id, category, title, author, pages, progress, summary, eraseBook,
  } = props;

  const calculateProgress = (numerator, denominator) => {
    if (denominator === 0) return 0;
    return parseInt((numerator / denominator) * 100, 10);
  };
  return (
    <>
      <div className="info">
        <h6>{category}</h6>
        <h1>{title}</h1>
        <p>{author}</p>
        <span>
          ID:
          {id}
        </span>
      </div>
      <div className="progress">
        <div className="ring" />
        <div className="Percentage">
          <h2>
            {calculateProgress(progress, pages)}
            %
          </h2>
          <span>Completed</span>
        </div>
      </div>
      <div className="summary-remove">
        <p>{summary}</p>
        <button type="button" onClick={() => eraseBook(id)}>Erase</button>
      </div>
    </>
  );
};

Book.defaultProps = {
  id: 0,
  category: 'Action',
  title: 'Example Title',
  author: 'Example Author',
  pages: 10,
  progress: 2,
  summary: 'Describe your Book!',
  eraseBook: () => {},
};

Book.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  progress: PropTypes.number,
  summary: PropTypes.string,
  eraseBook: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  eraseBook: id => dispatch(removeBook(id)),
});

export default connect(null, mapDispatchToProps)(Book);
