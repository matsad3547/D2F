import App from '../App'
import Login from '../containers/Login'
import Accounts from '../containers/Accounts'

const routes = [
  {
    exact_path: '/',
    component: App,
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
