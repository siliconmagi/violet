import { Route, Link, withRouter } from 'react-router-dom';
import Routes from '../Routes';
import styled from 'styled-components';
import AuthButton from './AuthButton';

// Navbar Links
const NLink = styled(Link)`
background: #b30047;
padding: 0 .5em 0 .5em;
margin: 0 .25em 0 0;
font-size: 1.8em;
border-radius: 3px;
color: white;
text-decoration: none;
&:hover {
  background: #cc3399;
}
`;

const Sul = styled.ul`
listStyleType: none;
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;
margin: 0px;
padding: 0px;
`;

const Simg = styled.img`
height: 1.8em;
background: black;
margin: 0 .5em 0 .5em;
padding: 0 .25em 0 .25em;
border-radius: 3px;
`;

const Sidebar = () => (
  <Sul>
  <Simg src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" />
  <AuthButton />
  <li><NLink to="/login">Login</NLink></li>
  <li><NLink to="/">Home</NLink></li>
  <li><NLink to="/blog">Blog</NLink></li>
  <li><NLink to="/about">About</NLink></li>
  </Sul>
);

export default Sidebar
