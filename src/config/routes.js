import Main from '../containers/Main'
import Login from '../containers/Login'
import Accounts from '../containers/Accounts'

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
    path: '/accounts',
    component: Accounts,
  },
]

export default routes
