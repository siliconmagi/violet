import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { auth, logout } from '../stores/Api';

const Sp = styled.p`
margin: 0px;
`;

const AuthButton = withRouter(({ push }) => (
  auth.isAuthenticated ? (
    <Sp>
      Welcome! <button onClick={() => {
        logout()
      }}>Sign out</button>
    </Sp>
  ) : (
    <Sp>You are not logged in.</Sp>
  )
));

export default AuthButton
