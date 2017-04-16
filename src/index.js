import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './components/Login'
import Welcome from './components/Welcome'

import App from './App'
import { Main } from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route path='/' component={App} />
  </Router>
  , document.getElementById('root')
)
