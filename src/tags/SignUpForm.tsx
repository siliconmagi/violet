import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import styled from 'styled-components';

interface IProps {
  txtUserName;
  txtEmail;
  txtPassword;
  isLoggedIn;
  emailSignUp();
  login();
  logout();
}
interface IState {}

@connect(['txtUserName', 'txtEmail', 'txtPassword', 'emailSignUp', 'login', 'logout', 'isLoggedIn', 'errorMessage'])
export default class Layout extends Component<IProps, IState> {

  public handleLogin = (e) => {
    this.props.login();
    // Prevents page refresh
    e.preventDefault();
  }
  public handleSignUp = (e) => {
    this.props.emailSignUp();
    e.preventDefault();
  }
  public handleLogout = (e) => {
    this.props.logout();
    e.preventDefault();
  }
  public handleUserNameChange = (e) => {
    this.props.txtUserName.Value = e.target.value;
  }
  public handleEmailChange = (e) => {
    this.props.txtEmail.Value = e.target.value;
  }
  public handlePasswordChange = (e) => {
    this.props.txtPassword.Value = e.target.value;
  }
  public render({ txtUserName, txtEmail, txtPassword, errorMessage, isLoggedIn }) {
    return (
      <div>
      <form>
      <input type="text" placeholder="User Name" value={txtUserName.Value} onInput={this.handleUserNameChange} />
      <br/>
      <input type="text" placeholder="Email" value={txtEmail.Value} onInput={this.handleEmailChange} />
      <br/>
      <input type="password" placeholder="Password" value={txtPassword.Value} onInput={this.handlePasswordChange} />
      <br/>
      <input type="submit" onClick={this.handleSignUp} value="Sign Up" disabled={errorMessage.disabled}>Sign up</input>
      </form>
      <div>{errorMessage.Value}</div>
      </div>
    );
  }
};
