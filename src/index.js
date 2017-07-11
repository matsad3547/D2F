import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Login from './components/Login'
// import Welcome from './components/Welcome'

import App from './App'
// import Data from './components/Data'
// import { Main } from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
    </div>
  </Router>
  , document.getElementById('root')
)

// <Route path='/data' component={Data} />
