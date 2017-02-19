import Home from './views/Home';
import Blog from './views/Blog';
import About from './views/About';

const Routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
      main: () => < Home />
  },
  { path: '/blog',
    exact: false,
    sidebar: () => <div>blog!</div>,
      main: () => < Blog />
  },
  { path: '/about',
    exact: false,
    sidebar: () => <div>about!</div>,
      main: () => < About />
  }
]

export default Routes
