import React from 'react';
import BooksList from './containers/BooksList';
import BookForm from './containers/BookForm';


const testingBooks = [{
  category: 'Biography',
  title: 'Hillary Clinton',
  author: 'Hillary Clinton',
  pages: 4231,
  progress: 200,
  summary: 'This is a biography about Hillary Clinton',
  id: Math.floor(Math.random() * 10000),
}, {
  category: 'Horror',
  title: 'The shining',
  author: 'Stephen King',
  pages: 213,
  progress: 52,
  summary: 'Horror story about a haunted hotel',
  id: Math.floor(Math.random() * 10000),
}];

function App() {
  return (
    <div className="App">
      <BooksList
        books={testingBooks}
        category="All"
      />
      <BookForm />
    </div>
  );
}

export default App;
