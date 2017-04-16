import React from 'react'
import Login from './Login'

import { Link } from 'react-router-dom'

const Welcome = () => (
  <div>
    <h2>Welcome to D2F!</h2>
    <ul>
      <li><Link path='login' component={Login }>Login</Link></li>
    </ul>
  </div>
)

export default Welcome
