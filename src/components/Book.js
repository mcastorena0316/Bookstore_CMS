import React from 'react';
import PropTypes from 'prop-types';

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
    category, title, author, pages, progress, summary,
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
        <span>{author}</span>
      </div>
      <div className="progress">
        <div className="ring" />
        <div className="Percentage">
          <span>
            {calculateProgress(progress, pages)}
            %
          </span>
          <h4>Completed</h4>
        </div>
      </div>
      <div className="summary-remove">
        <p>{summary}</p>
        <button type="button">Erase</button>
      </div>
    </>
  );
};

Book.defaultProps = {
  category: 'Action',
  title: 'Example Title',
  author: 'Example Author',
  pages: 10,
  progress: 2,
  summary: 'Describe your Book!',
};

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  progress: PropTypes.number,
  summary: PropTypes.string,
};

export default Book;
