import Login from './pages/Login';
import SignUp from './pages/Login';
import Home from './pages/Home';
import ReduxHome from './pages/redux';
import ReduxSimpleCounter from './pages/redux/simple-counter';
import ReduxSimpleTodo from './pages/redux/simple-todo';

const routes = [
  { name: 'Login', path: '/login', exact: false, component: Login },
  { name: 'Sign Up', path: '/sign-up', exact: false, component: SignUp },
  { name: 'Home', path: '/', exact: true, component: Home },
  { name: 'Redux Home', path: '/redux', exact: true, component: ReduxHome },
  { name: 'Redux Simple Counter', path: '/redux/simple-counter', exact: false, component: ReduxSimpleCounter },
  { name: 'Redux Simple Todo', path: '/redux/simple-fetch', exact: false, component: ReduxSimpleTodo },
]

export default routes;