import Email from '../components/Email'
import Login from '../containers/Login'
import Accounts from '../components/Accounts'
import Social from '../containers/Social'

const routes = [
  {
    exact_path: '/',
    component: Email,
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
