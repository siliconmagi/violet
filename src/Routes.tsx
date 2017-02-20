import AuthContainer from './AuthContainer';
import About from './views/About';
import Auth from './views/Auth';
import Blog from './views/Blog';
import Home from './views/Home';
import Login from './views/Login';

const Routes = [
  {
    exact: true,
    main: () => <Home/>,
    path: '/',
    sidebar: () => <div>home!</div>,
  },
  {
    exact: true,
    main: () => <Login />,
    path: '/login',
    sidebar: () => <div>home!</div>,
  },
  {
    exact: false,
    main: () => <Blog />,
    path: '/blog',
    sidebar: () => <div>blog!</div>,
  },
  {
    exact: false,
    main: () => <About />,
    path: '/about',
    sidebar: () => <div>about!</div>,
  },
];

const AuthRoutes = [
  {
    exact: true,
    main: () => <AuthContainer><Auth /></AuthContainer>,
    path: '/auth',
    sidebar: () => <div>auth!</div>,
  },
];

// const PrivateRoute = ({ component, ...rest }) => (
// <Route {...rest} render={props => (
// fakeAuth.isAuthenticated ? (
// React.createElement(component, props)
// ) : (
// <Redirect to={{
// pathname: '/login',
// state: { from: props.location }
// }}/>
// )
// )}/>
// )

export { Routes, AuthRoutes };
