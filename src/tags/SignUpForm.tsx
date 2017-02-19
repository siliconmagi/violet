import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components';
import { connect } from 'inferno-mobx';

interface MyProps {
  store;
  txtUserName;
  txtEmail;
  txtPassword;
  isLoggedIn;
  emailSignUp();
  login();
  logout();
}
interface MyState {}

//todo
// 1) input email
// 2) input username
// 3) handle submit

@connect(['txtUserName', 'txtEmail', 'txtPassword', 'emailSignUp', 'login', 'logout', 'isLoggedIn', 'errorMessage'])
export default class Layout extends Component<MyProps, MyState> {

  handleLogin = (e) => {
    this.props.login();
    //Prevents page refresh
    e.preventDefault();
  }
  handleSignUp = (e) => {
    this.props.emailSignUp();
    e.preventDefault();
  }
  handleLogout = (e) => {
    this.props.logout();
    e.preventDefault();
  }
  handleUserNameChange = (e) => {
    this.props.txtUserName.Value = e.target.value
  }
  handleEmailChange = (e) => {
    this.props.txtEmail.Value = e.target.value
  }
  handlePasswordChange = (e) => {
    this.props.txtPassword.Value = e.target.value
  }
  render({ txtUserName, txtEmail, txtPassword, errorMessage, isLoggedIn }) {
    return (
      <div>
      { isLoggedIn.Value ? null : <input type='text' placeholder= 'User Name' value={txtUserName.Value} onInput={this.handleUserNameChange} /> }
      { isLoggedIn.Value ? null : <input type='text' placeholder= 'Email' value={txtEmail.Value} onInput={this.handleEmailChange} /> }
      { isLoggedIn.Value ? null : <input type='password' placeholder='Password' value={txtPassword.Value} onInput={this.handlePasswordChange} /> }
      <br/>
      { isLoggedIn.Value ? null : <button onClick={this.handleLogin} disabled={errorMessage.disabled}>Login</button> }
      { isLoggedIn.Value ? null : <button onClick={this.handleSignUp} disabled={errorMessage.disabled}>Sign up</button> }
      { isLoggedIn.Value ? <button onClick={this.handleLogout} disabled={errorMessage.disabled}>Logout</button> : null }
      <div>{errorMessage.Value}</div>
      </div>
    );
  }
};
