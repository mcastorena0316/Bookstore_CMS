import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ filter = 'All', handleFilterChange }) => (
  <header>
    <nav>
      <ul>
        <li className="brand">
          <span>Bookstore CMS</span>
        </li>
        <li className="book">
          <span>BOOKS</span>
        </li>
        <li className="category">
          <span>CATEGORIES: </span>
          <select
            id="category"
            onChange={handleFilterChange}
            value={filter}
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
        </li>
      </ul>
    </nav>
  </header>
);

CategoryFilter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  filter: '',
  handleFilterChange: () => { },
};

export default CategoryFilter;
