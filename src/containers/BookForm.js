import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const defaultState = {
  category: '',
  title: '',
  author: '',
  pages: '',
  progress: '',
  summary: '',
  error: '',
};

/**
 * Bookform
 *
 * Add books
 */

class BookForm extends Component {
  constructor(props) {
    super(props);
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
    const { addBook } = this.props;
    e.preventDefault();
    const formData = {
      category: e.target.category.value,
      title: e.target.title.value,
      author: e.target.author.value,
      pages: e.target.pages.value,
      progress: e.target.progress.value,
      summary: e.target.summary.value,
      id: Math.floor(Math.random() * 1000),
    };
    if (parseInt(formData.progress, 10) > parseInt(formData.pages, 10)) {
      return this.setState(prevState => ({
        ...prevState,
        error: 'Progress is bigger than Total of pages!',
      }));
    }
    addBook(formData);
    return this.setState(defaultState);
  }

  render() {
    const { handleSubmit, handleChange, state } = this;
    const {
      category, title, author, pages, progress, summary, error,
    } = state;
    return (
      <div className="bookform-section">
        <h4>ADD NEW BOOK</h4>
        {
          error && (
          <p>{error}</p>
          )
        }
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
      </div>
    );
  }
}

BookForm.defaultProps = {
  addBook: () => {},
};

BookForm.propTypes = {
  addBook: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addBook: id => dispatch(addBook(id)),
});


export default connect(null, mapDispatchToProps)(BookForm);
