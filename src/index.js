import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

import App from './components/App';

const initialState = {
    thread: {
        id: 1,
        title: 'これはCommentのタイトル1です',
        body: 'これはCommentの本文1です',
    },
    comments: [
        {
            id: 1,
            title: 'これはCommentのタイトル1です',
            body: 'これはCommentの本文1です',
        },
        {
            id: 2,
            title: 'これはCommentのタイトル2です',
            body: 'これはCommentの本文2です',
        }
    ],
    likes: [
        {
            id: 1,
            user_name: '太郎',
        },
        {
            id: 2,
            user_name: '花子',
        }
    ],
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
