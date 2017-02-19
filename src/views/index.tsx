import Inferno from 'inferno'
import Component from 'inferno-component'
import { Route, Link, Redirect, withRouter } from 'react-router-dom'
import Layout from '../tags/Layout'
import Article from './Article'
import Error404 from './Error404'
import { Routes, AuthRoutes } from '../Routes'
// import AuthRoutes from '../AuthRoutes'
import styled, { injectGlobal } from 'styled-components'
import Sidebar from '../tags/Sidebar'
import auth from '../stores/Api'
import AuthContainer from '../AuthContainer'

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

// Root Div
const Rdiv = styled.div`
`;

// Main Div
const Mdiv = styled.div`
`;

const View = () => (
  <Rdiv>
  <Sidebar />
  <Mdiv>
  {Routes.map((route, index) => (
    <Route
    key={index}
    path={route.path}
    exact={route.exact}
    component={route.main}
    />
  ))}
  {AuthRoutes.map((route, index) => (
    <PrivateRoute
    key={index}
    path={route.path}
    exact={route.exact}
    component={route.main}
    />
  ))}
  </Mdiv>
  </Rdiv>
);

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )}/>
)


export default View
