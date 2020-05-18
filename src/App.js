import React from 'react';
import BookList from './containers/BooksList';


const testingBooks = [{
  category: 'Biography',
  title: 'Hillary Clinton',
  author: 'Hillary Clinton',
  pages: 4231,
  progress: 2,
  summary: 'This is a biography about Hillary Clinton',
  id: Math.random(),
}, {
  category: 'Horror',
  title: 'The shining',
  author: 'Stephen King',
  pages: 213,
  progress: 52,
  summary: 'Horror story about a haunted hotel',
  id: Math.random(),
}];

function App() {
  return (
    <div className="App">
      <BookList
        books={testingBooks}
        category="All"
      />
    </div>
  );
}

export default App;
