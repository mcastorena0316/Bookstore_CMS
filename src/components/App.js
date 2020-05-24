import React from 'react';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BookForm />
    </div>
  );
}


export default App;
