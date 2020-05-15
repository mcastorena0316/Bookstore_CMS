import React from 'react';

const Book = () => (
  <div>
    <div className="info">
      <h6>Category</h6>
      <h1>Title</h1>
      <span>Author</span>
    </div>
    <div className="progress">
      <div className="ring" />
      <div className="Percentage">
        <span>%</span>
        <h4>Completed</h4>
      </div>
    </div>
    <div className="summary-remove">
      <p>
        summary
      </p>
      <button
        type="button"
      >
        Erase
      </button>
    </div>
  </div>
);

export default Book;
