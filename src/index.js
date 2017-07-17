import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Login from './components/Login'
// import Welcome from './components/Welcome'

import App from './App'
<<<<<<< HEAD
import Data from './components/Data'
import Login from './containers/Login'
import Accounts from './containers/Accounts'
=======
// import Data from './components/Data'
>>>>>>> 8f32e68a82642e7d6f13310b66970a7fa53b3d1b
// import { Main } from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
<<<<<<< HEAD
      <Route path='/data' component={Data} />
      <Route path='/login' component={Login} />
      <Route path='/accounts' component={Accounts} />
=======
>>>>>>> 8f32e68a82642e7d6f13310b66970a7fa53b3d1b
    </div>
  </Router>
  , document.getElementById('root')
)

// <Route path='/data' component={Data} />
