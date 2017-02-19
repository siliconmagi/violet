import { observable } from 'mobx';
import {
	CognitoUser, CognitoUserAttribute,
	CognitoUserPool
} from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials, Config } from 'aws-sdk';
import poolData from '../config';

// Observable fields:
const txtUserName = observable({
	Name : 'user name',
	Value : ''
});

const txtEmail = observable({
	Name : 'email',
	Value : ''
});

const txtPassword = observable({
	Name : 'password',
	Value : ''
});

const auth = observable({
	isAuthenticated: false,
  isLoggedIn: false
});

// Current Url
const currentURL = observable({
	Value: '',
});


// Create User Pool Object
const userPool = new CognitoUserPool(poolData);

// Handle Error
const handleError = (err) => {
	errorMessage.Value = err.message;
	resetError();
}

// Reset Error
const resetError = () => {
	errorMessage.disabled = true;
	setTimeout(function() {
		errorMessage.Value = '';
		errorMessage.disabled = false;
	}, 5000);
	txtUserName.Value = '';
	txtEmail.Value = '';
	txtPassword.Value = '';
}

// Error Object
const errorMessage = observable({
	Value : '',
	disabled: false
});

// Check logged in
const isLoggedIn = observable({
	Value: false
});

// Email Sign up
const emailSignUp = () => {
	const attributeList = [];
	const attributeEmail = new CognitoUserAttribute(txtEmail);
	attributeList.push(attributeEmail);
	userPool.signUp(txtUserName.Value, txtPassword.Value, attributeList, null, function(err, result){
		if (err) {
			handleError(err);
			return;
		}
		const cognitoUser = result.user;
		errorMessage.Value = `User name is: ${cognitoUser.getUsername()}`
		resetError();
	});
	resetError();
}

// Login
const login = () => {
	console.log('login')
	resetError();
}

// Logout
const logout = () => {
	console.log('logout')
}

export { auth, currentURL, txtUserName, txtEmail, txtPassword, emailSignUp, login, logout, isLoggedIn, errorMessage };
