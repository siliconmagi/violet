import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link, Redirect, Route, withRouter } from 'react-router-dom';
// import AuthRoutes from '../AuthRoutes'
import styled, { injectGlobal } from 'styled-components';
import AuthContainer from '../AuthContainer';
import { AuthRoutes, Routes } from '../Routes';
import {auth} from '../stores/Api';
import Layout from '../tags/Layout';
import Sidebar from '../tags/Sidebar';
import Article from './Article';
import Error404 from './Error404';

injectGlobal`
body {
  margin: 0px;
  background: #BF0040;
  color: white;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
}
h1 {
  margin: 0px;
}
ul {
  margin: 0px;
}
a {
  color: #ff8080;
}
`;

const View = () => (
  <div>
  <Sidebar />
  <div>
  {Routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.main}
    />
  ))}
  <AuthContainer>
  {AuthRoutes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.main}
    />
  ))}
  </AuthContainer>
  </div>
  </div>
);

// @connect(['auth'])
// const PrivateRoute = ({ component, ...rest }) => (
  // <Route
    // {...rest}
    // render={(props) => (
    // auth.isLoggedIn ? (
      // console.log(auth.isLoggedIn),
    // ) : (
    // <Redirect to= { {
      // pathname: '/login',
      // { from: props.location };
    // } }/>
    // );
  // )}/>;
// )


export default View;
