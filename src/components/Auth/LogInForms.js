import React from 'react'
import { auth, googleProvider } from '../../firebase'
import LogInByGoogle from './LogInByGoogle'
import PaperRefined from '../UI/PaperRefined';
import LogInByEmailAndPass from './LogInByEmailAndPass';

class LogInForms extends React.Component {
  state = {
    logInEmail: '',
    logInPassword: ''
  }

  LogInByGoogle = () => auth.signInWithPopup(googleProvider)
    .catch(event => alert('Something went wrong'))


  LogInByEmailAndPass = () => auth.signInWithEmailAndPassword(
    this.state.logInEmail,
    this.state.logInPassword
  ).catch(event => alert('Something went wrong'))

  onLogInEmailChange = (event, value) => {
    this.setState({ logInEmail: value })
  }

  onLogInPasswordChange = (event, value) => {
    this.setState({ logInPassword: value })
  }

  render() {
    return (
      <div>
        <PaperRefined centered={true}>
          <LogInByEmailAndPass
            emailValue={this.state.logInEmail}
            onEmailChange={this.onLogInEmailChange}
            passwordValue={this.state.logInPassword}
            onPasswordChange={this.onLogInPasswordChange}
            onLogInClick={this.LogInByEmailAndPass}
          />
        </PaperRefined>
        <PaperRefined centered={true}>
          <LogInByGoogle
            onLogInClick={this.LogInByGoogle}
          />
        </PaperRefined>
      </div>
    )
  }
}

export default LogInForms