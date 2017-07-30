import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import routes from './config/routes'

// import App from './App'
// import Login from './containers/Login'
// import Accounts from './containers/Accounts'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      {routes.map( (route, i) => {
        if (route.exact_path) {
          return (
            <Route
              key={`route-${i}`}
              exact path={route.exact_path}
              component={route.component} />
          )
        }
        else {
          return (
            <Route
              key={`route-${i}`}
              path={route.path}
              component={route.component} />
          )
        }
      }

      )}
    </div>
  </Router>
  , document.getElementById('root')
)

// <Route path='/data' component={Data} />
// <Route exact path='/' component={App} />
// <Route path='/login' component={Login} />
// <Route path='/accounts' component={Accounts} />
