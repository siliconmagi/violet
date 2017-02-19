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
      <form>
      <input type='text' placeholder='User Name' value={txtUserName.Value} onInput={this.handleUserNameChange} />
      <br/>
      <input type='text' placeholder='Email' value={txtEmail.Value} onInput={this.handleEmailChange} />
      <br/>
      <input type='password' placeholder='Password' value={txtPassword.Value} onInput={this.handlePasswordChange} />
      <br/>
      <input type="submit" onClick={this.handleSignUp} value="Sign Up" disabled={errorMessage.disabled}>Sign up</input>
      </form>
      <div>{errorMessage.Value}</div>
      </div>
    );
  }
};
