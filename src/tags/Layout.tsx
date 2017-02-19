//style entry
import Inferno from 'inferno'
import Component from 'inferno-component'
// import Header from './Header'
import styled from 'styled-components';
import { injectGlobal } from 'styled-components'
import { Route, Link } from 'react-router-dom';


interface MyProps {}
interface MyState {}

injectGlobal`
body {
  margin: 0px;
  background: #BF0040;
  color: white;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
}

a {
  color: #ff8080;
}
`;

// const Nlink = styled(NavLink)`
// background: #b30047;
// padding: 0 .5em 0 .5em;
// margin: 0 .25em 0 0;
// font-size: 1.3em;
// border-radius: 3px;
// color: white;
// text-decoration: none;

// &:hover {
// background: #cc3399;
// }

// `;

const Nav = styled.nav`
padding: 10px;
background: black;
display: flex;
flex-direction: column;
`;
const Body = styled.div`
display: flex;
flex: 1;
`;

const linkStyle = {
  background: '#cc3399',
  padding: '0 .5em 0 .5em',
  'font-size': '1.3em',
  'border-radius': '3px',
  color: 'white',
  'text-decoration': 'none',
  'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

// Detects active NavLink
const NavLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
    {match ? '> ' : ''}
    <Link style={linkStyle} to={to}>{label}</Link>
    </div>
  )}/>
)

export default function ({children}) {
  return (
    <div>
    <Nav>
    <NavLink activeOnlyWhenExact={true} to="/" label="Home"/>
    <NavLink to="/blog" label="Blog"/>
    <NavLink to="/about" label="About"/>
    </Nav>
    <Body>
    {children}
    </Body>
    </div>
  );
}
