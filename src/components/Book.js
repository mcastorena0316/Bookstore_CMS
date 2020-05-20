import React from 'react';
import "./circle.css"

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
        <h5>{author}</h5>
        <h5>
          ID:
          {id}
        </h5>
      </td>
      <td className="progress">
        <div className={`c100 p${calculateProgress(progress, pages)}`}>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
        <div className="percentage">
          <h2>
            {calculateProgress(progress, pages)}
            %
          </h2>
          <span>Completed</span>
        </div>
      </td>
      <td>
        <div className="separator"></div>
      </td>
      <td className="summary-remove">
        <p>{summary}</p>
        <button type="button" onClick={() => handleRemoveBook(book)}>Erase</button>
      </td>
    </>
  );
};


export default Book;
