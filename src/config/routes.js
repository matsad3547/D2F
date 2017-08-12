import Main from '../containers/Main'
import Login from '../containers/Login'
import Accounts from '../containers/Accounts'
import Social from '../containers/Social'

const routes = [
  {
    exact_path: '/',
    component: Main,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/account_settings',
    component: Accounts,
  },
  {
    path: '/social_report',
    component: Social,
  },
]

export default routes
