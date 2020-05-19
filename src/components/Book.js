import React from 'react';
/**
 * Book
 *
 * Book component shows the information regarding
 * a book
 * @param {Object} book Data from parent
 * @return {React.Component} Book
 */

const Book = book => {
  const {
    id, category, title, author, pages, progress, summary, eraseBook,
  } = book;

  const calculateProgress = (numerator, denominator) => {
    if (denominator === 0) return 0;
    return parseInt((numerator / denominator) * 100, 10);
  };
  return (
    <>
      <div className="info">
        <h6>{category}</h6>
        <h1>{title}</h1>
        <h5>{author}</h5>
        <h5>
          ID:
          {id}
        </h5>
      </div>
      <div className="progress">
        <div className="ring" />
        <div className="percentage">
          <h2>
            {calculateProgress(progress, pages)}
            %
          </h2>
          <span>Completed</span>
        </div>
      </div>
      <span />
      <div className="summary-remove">
        <p>{summary}</p>
        <button type="button" onClick={() => eraseBook(id)}>ERASE</button>
      </div>
    </>
  );
};


export default Book;
