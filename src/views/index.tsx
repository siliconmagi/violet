import Inferno from 'inferno'
import { Route, Link, withRouter } from 'react-router-dom'
import Layout from '../tags/Layout';
import Article from './Article';
import Error404 from './Error404';
import Routes from '../Routes';
import styled, { injectGlobal } from 'styled-components'
import Sidebar from '../tags/Sidebar';

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
  </Mdiv>
  </Rdiv>
);

export default View
