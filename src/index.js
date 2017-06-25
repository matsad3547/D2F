import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Login from './components/Login'
// import Welcome from './components/Welcome'

import App from './App'
import Data from './components/Data'
import Login from './containers/Login'
import Accounts from './containers/Accounts'
// import { Main } from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/data' component={Data} />
      <Route path='/login' component={Login} />
      <Route path='/accounts' component={Accounts} />
    </div>
  </Router>
  , document.getElementById('root')
)
