import firebase from 'firebase';
import React from 'react';
import thunk from 'redux-thunk';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';

import MainTemplate from './templates/main/Main';

import './App.sass';

firebase.initializeApp({
  apiKey: 'AIzaSyDWHV1sy3rXHm7yVX3J4qTvsNPTwlC1lBQ',
  authDomain: 'portfolio-4a29a.firebaseapp.com',
  databaseURL: 'https://portfolio-4a29a.firebaseio.com',
  projectId: 'portfolio-4a29a',
  storageBucket: 'portfolio-4a29a.appspot.com',
  messagingSenderId: '891485410008'
});

const router = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  applyMiddleware(
    thunk,
    router
  )
);

// if path changes in url, it changes in app too
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Router history={history}>
    <Route path="/" component={MainTemplate}>
      <IndexRoute />
    </Route>
  </Router>,
  document.getElementById('app')
);
