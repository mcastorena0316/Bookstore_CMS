import React from 'react';
import PropTypes from 'prop-types';
import './AddBook.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const AddBook = ({
  title, author, category, summary, pages, progress, handleChange, handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="input">
      <div className="info">
        <input
          required
          id="title"
          className="title"
          value={title}
          minLength="2"
          placeholder="Book Title"
          onChange={e => handleChange('title', e.target.value)}
        />
        <input
          required
          id="author"
          type="text"
          autoComplete="name"
          className="author"
          value={author}
          placeholder="Author"
          onChange={e => handleChange('author', e.target.value)}
        />
        <select
          id="category"
          className="category"
          onChange={e => handleChange('category', e.target.value)}
          value={category}
        >
          {categories.map(thisCategory => (
            <option
              key={Math.random()}
              value={thisCategory}
            >
              {thisCategory}
            </option>
          ))}
        </select>
      </div>
      <div className="summary">
        <textarea
          id="summary"
          value={summary}
          placeholder="Summary"
          onChange={e => handleChange('summary', e.target.value)}
        />
        <input
          required
          id="pages"
          className="pages"
          value={pages}
          min="1"
          max="2000"
          type="number"
          placeholder="Total Pages"
          onChange={e => handleChange('pages', e.target.value)}
        />
        <input
          required
          id="progress"
          className="progress"
          min="0"
          max="2000"
          type="number"
          value={progress}
          placeholder="Current Page"
          onChange={e => handleChange('progress', e.target.value)}
        />
      </div>
    </div>
    <div className="add-book">
      <button type="submit">ADD BOOK</button>
    </div>
  </form>
);

AddBook.defaultProps = {
  category: 'All',
  author: '',
  title: '',
  pages: '',
  progress: '',
  summary: '',
  handleChange: () => { },
  handleSubmit: () => { },
};

AddBook.propTypes = {
  category: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  pages: PropTypes.string,
  progress: PropTypes.string,
  summary: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default AddBook;
