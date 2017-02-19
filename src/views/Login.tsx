import Inferno from 'inferno';
import { Link } from 'react-router-dom';
import Card from '../tags/Card';
import SignUpForm from '../tags/SignUpForm'

export default function(props) {
  return (
    <div className="page page__home">
    <Card>
    <h1>Login</h1>
    <p>Login here</p>
    <SignUpForm></SignUpForm>
    </Card>
    </div>
  );
}
