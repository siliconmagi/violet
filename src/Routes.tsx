import Home from './views/Home';
import Auth from './views/Auth';
import Login from './views/Login';
import Blog from './views/Blog';
import About from './views/About';

const Routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
      main: () => <Home />
  },
  { path: '/login',
    exact: true,
    sidebar: () => <div>home!</div>,
      main: () => <Login />
  },
  { path: '/blog',
    exact: false,
    sidebar: () => <div>blog!</div>,
      main: () => <Blog />
  },
  { path: '/about',
    exact: false,
    sidebar: () => <div>about!</div>,
      main: () => <About />
  }
];

const AuthRoutes = [
  { path: '/auth',
    exact: true,
    sidebar: () => <div>auth!</div>,
      main: () => <Auth />
  }
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
