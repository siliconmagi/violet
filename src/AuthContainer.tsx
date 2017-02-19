import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx';
import { Redirect } from 'react-router-dom'

interface MyProps {
  auth;
  currentURL;
  children;
}
interface MyState {}

@connect(['auth', 'currentURL'])
export default class AuthContainer extends Component <MyProps, MyState> {
  componentDidMount({auth, currentURL}) {
    if (!auth.isAuthenticated) {
      <Redirect to={{
        pathname: '/login',
      }}/>
    }
  }

  render({auth}) {
    if (auth.isLoggedIn) {
      return this.props.children
    } else {
      return null
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
