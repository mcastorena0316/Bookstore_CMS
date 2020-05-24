import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions';
import AddBook from '../components/AddBook';

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
        <AddBook
          category={category}
          author={author}
          title={title}
          pages={pages}
          progress={progress}
          summary={summary}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
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
