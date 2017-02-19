import Inferno from 'inferno';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
list-style: none;
display: -webkit-flex;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
flex-flow: row wrap;
align-content: flex-end;
padding: 0;
margin: 0;
background: #660033;
`;

const Nav = styled.nav`
float: right;
border-radius: 10px;
`;

const Nlink = styled(Link)`
background: #b30047;
padding: 0 .5em 0 .5em;
margin: 0 .25em 0 0;
font-size: 1.3em;
border-radius: 3px;
color: white;
text-decoration: none;

&:hover {
  background: #cc3399;
}

`;

// Active Link component
// const activeLink = ({ label, to, activeOnlyWhenExact }) => (
  // <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    // <div className={match ? 'active' : ''}>
      // {match ? '> ' : ''}<Link to={to}>{label}</Link>
    // </div>
  // )}/>
// ) 

export default function () {
  return (
    <Header>
    <Nav>
    <Nlink activeOnlyWhenExact={true} to="/">Home</Nlink>
    <Nlink to="/blog">Blog</Nlink>
    <Nlink to="/about">About</Nlink>
    </Nav>
    </Header>
  )
}
