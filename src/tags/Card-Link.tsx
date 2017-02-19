import Inferno from 'inferno';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardLink = styled(Link)`
cursor: pointer;
text-decoration: none;
margin: 0 1em 0 1em;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;
border-radius: 3px;
color: white;

> strong, em {
display: block;
}
> em {
font-size: 85%;
padding-left: 1em;
}
`;

export default function (props) {
  return (
    <CardLink to={ props.to } className="card">{ props.children }</CardLink>
  )
};
