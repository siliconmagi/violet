// This is the entry point for the Application
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { observable } from 'mobx';
import { HashRouter as Router } from 'react-router-dom';
import {
  auth,
  currentURL,
  emailSignUp,
  errorMessage,
  isLoggedIn,
  login,
  logout,
  txtEmail,
  txtPassword,
  txtUserName,
} from './stores/Api';
import Views from './views';

// We render our react app into this element
const app = document.getElementById('app');
const stores = {
  auth,
  currentURL,
  txtUserName,
  txtEmail,
  txtPassword,
  emailSignUp,
  login,
  logout,
  isLoggedIn,
  errorMessage,
};

const App = () => (
  <Provider {...stores}>
  <Router>
  <Views/>
  </Router>
  </Provider>
);

// Detect build environment for HMR
if ('development' === process.env.ENV) {
  const hmr: any = module;
  if (hmr.hot) {
    hmr.hot.accept();
    require('inferno-devtools');
  }
}

// Mount root application
Inferno.render(<App/>, app);
