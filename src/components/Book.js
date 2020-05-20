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
    id, category, title, author, pages, progress, summary, handleRemoveBook,
  } = book;

  const calculateProgress = (numerator, denominator) => {
    if (denominator === 0) return 0;
    return parseInt((numerator / denominator) * 100, 10);
  };
  return (
    <>
      <td className="info">
        <h6>{category}</h6>
        <h1>{title}</h1>
        <p>{author}</p>
        <span>
          ID:
          {id}
        </span>
      </td>
      <td className="progress">
        <div className="ring" />
        <div className="Percentage">
          <h2>
            {calculateProgress(progress, pages)}
            %
          </h2>
          <span>Completed</span>
        </div>
      </td>
      <td className="summary-remove">
        <p>{summary}</p>
        <button type="button" onClick={() => handleRemoveBook(book)}>Erase</button>
      </td>
    </>
  );
};


export default Book;
