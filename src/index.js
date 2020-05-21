import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const testingBooks = {
  filter: 'All',
  books: [
    {
      category: 'Biography',
      title: 'Hillary Clinton',
      author: 'Hillary Clinton',
      pages: '4231',
      progress: '200',
      summary: 'This is a biography about Hillary Clinton',
      id: Math.floor(Math.random() * 10000),
    }, {
      category: 'Horror',
      title: 'The shining',
      author: 'Stephen King',
      pages: '213',
      progress: '52',
      summary: 'Horror story about a haunted hotel',
      id: Math.floor(Math.random() * 10000),
    }],
};

const store = createStore(rootReducer(testingBooks));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App books={testingBooks} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
