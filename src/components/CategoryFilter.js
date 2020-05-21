import React from "react"

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({filter="All", handleFilterChange} ) => (
    <header>
        <nav>
            <ul>
                <li className="brand">
                    Bookstore CMS
                </li>
                <li className="book">
                    BOOKS
                </li>
                <li className="category">
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
)

export default CategoryFilter;

