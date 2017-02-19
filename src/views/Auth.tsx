import Inferno from 'inferno';
import { Link } from 'react-router-dom';
import Card from '../tags/Card';
import SignUpForm from '../tags/SignUpForm';
import { login } from '../stores/Api';

export default function(props) {
	return (
		<div className="page page__home">
		<Card>
		<h1>Protected Page</h1>
		<p>You must Login to view this page</p>
		<button onClick={() => login()}>Login</button>
		</Card>
		</div>
	);
}
