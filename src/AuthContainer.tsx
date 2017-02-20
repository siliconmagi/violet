import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Redirect } from 'react-router-dom';

interface IProps {
  auth;
  currentURL;
  children;
};
interface IState {};

// <Redirect
// to={{pathname: '/login'}}
// />;
//    console.log('hi') ;


@connect(['auth', 'currentURL'])
export default class AuthContainer extends Component <IProps, IState> {
  public componentDidMount() {
   console.log(this.context.router.location.pathname); 
  }

  public render({auth}) {
    if (auth.isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
// function mapStateToProps(state, ownProps) {
// return {
// isLoggedIn: state.loggedIn,
// currentURL: ownProps.location.pathname
// }
// }

// export default connect(mapStateToProps)(AuthContainer)
