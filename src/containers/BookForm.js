import React, { Component } from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      author: '',
      pages: 0,
      progress: 0,
      summary: '',

    };
  }

  render() {
    return (
      <div>
        <h4>ADD NEW BOOK</h4>
        <form>
          <input placeholder="Book Title" />
          <select>
            {categories.map(category => (
              <option
                key={Math.random()}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>

          <input placeholder="# Pages" />
          <input placeholder="Current Page" />
          <input placeholder="Author" />
          <input type="textarea" placeholder="Summary" />
          <button type="submit">Add Book</button>


        </form>
      </div>
    );
  }
}
export default BookForm;
