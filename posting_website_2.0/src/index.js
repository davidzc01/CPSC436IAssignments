import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './components/Header/Header';
import PostAPP from './components/PostAPP/PostAPP';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import getAppStore from './store/store';
import { getPosts } from './actions'

const store = getAppStore();

store.dispatch(getPosts())
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Header />
        <PostAPP />
      </Provider>,
      document.getElementById('root'));
  })
  .catch(() => alert('woops something goes wrong'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
