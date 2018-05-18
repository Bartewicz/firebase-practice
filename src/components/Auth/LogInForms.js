import React from 'react'
import { auth, googleProvider } from '../../firebase'
import LogInByGoogle from './LogInByGoogle'
import PaperRefined from '../UI/PaperRefined'
import LogInByEmailAndPass from './LogInByEmailAndPass'
import CreateUserByEmailAndPass from './createUserByEmailAndPass'

class LogInForms extends React.Component {
  state = {
    logInEmail: '',
    logInPassword: '',
    createUserEmail: '',
    createUserPassword: '',
    createUserRetypePassword: ''
  }

  LogInByGoogle = () => auth.signInWithPopup(googleProvider)
    .catch(event => alert('Something went wrong'))


  LogInByEmailAndPass = () => auth.signInWithEmailAndPassword(
    this.state.logInEmail,
    this.state.logInPassword
  ).catch(event => alert('Something went wrong'))

  createUserByEmailAndPass = () => {
    if (this.state.createUserPassword === this.state.createUserRetypePassword) {
      auth.createUserWithEmailAndPassword(
        this.state.createUserEmail,
        this.state.createUserPassword
      ).catch(event => alert('Something went wrong'))
    } else {
      alert('Incorrect password! Try again.')
      return
    }
  }

  onLogInEmailChange = (event, value) => {
    this.setState({ logInEmail: value })
  }

  onLogInPasswordChange = (event, value) => {
    this.setState({ logInPassword: value })
  }

  onCreateUserEmailChange = (event, value) => {
    this.setState({ createUserEmail: value })
  }

  onCreateUserPasswordChange = (event, value) => {
    this.setState({ createUserPassword: value })
  }

  onCreateUserRetypePasswordChange = (event, value) => {
    this.setState({ createUserRetypePassword: value })
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
        <PaperRefined centered={true}>
          <CreateUserByEmailAndPass
            emailValue={this.state.createUserEmail}
            onEmailChange={this.onCreateUserEmailChange}
            passwordValue={this.state.createUserPassword}
            onPasswordChange={this.onCreateUserPasswordChange}
            retypePasswordValue={this.state.createUserRetypePassword}
            onRetypePasswordChange={this.onCreateUserRetypePasswordChange}
            onLogInClick={this.createUserByEmailAndPass}
          />
        </PaperRefined>
      </div>
    )
  }
}

export default LogInForms