import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './components/Login'
import Welcome from './components/Welcome'

import App from './App'
import { Main, Dicknuts } from './App'

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'

console.log('wtf!!!', Welcome);


ReactDOM.render(
  <Router>
    <Route path='/' component={App} >
      <IndexRoute component={Welcome} />

    </Route>


  </Router>
  , document.getElementById('root')
)
