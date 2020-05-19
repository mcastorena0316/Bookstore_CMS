import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const defaultState = {
  category: '',
  title: '',
  author: '',
  pages: '',
  progress: '',
  summary: '',
};

/**
 * Bookform
 *
 * Add books
 */
class BookForm extends Component {
  constructor() { // (props) {
    super(); // (props);
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const formData = {
      category: e.target.category.value,
      title: e.target.title.value,
      author: e.target.author.value,
      pages: e.target.pages.value,
      progress: e.target.progress.value,
      summary: e.target.summary.value,
    };

    this.setState(defaultState);
  }

  render() {
    const { handleSubmit, handleChange, state } = this;
    const {
      category, title, author, pages, progress, summary,
    } = state;
    return (
      <div className="bookform-section">
        <h4>ADD NEW BOOK</h4>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <div className="info">
              <input
                id="title"
                className="title"
                value={title}
                placeholder="Book Title"
                onChange={e => handleChange('title', e.target.value)}
              />
              <input
                id="author"
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
                id="pages"
                className="pages"
                value={pages}
                placeholder="Total Pages"
                onChange={e => handleChange('pages', e.target.value)}
              />
              <input
                id="progress"
                className="progress"
                value={progress}
                placeholder="Current Page"
                onChange={e => handleChange('progress', e.target.value)}
              />

            </div>
          </div>
          <div className="add-book">
            <button type="submit">Add Book</button>
          </div>
        </form>
      </div>
    );
  }
}
export default BookForm;
