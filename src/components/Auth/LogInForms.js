import React from 'react'
import { auth, googleProvider } from '../../firebase'
import LogInByGoogle from './LogInByGoogle'

class LogInForms extends React.Component {

  LogInByGoogle = () => auth.signInWithPopup(googleProvider)

  render() {
    return (
      <div>
        <LogInByGoogle
          onLogInClick={this.LogInByGoogle}
        />
      </div>
    )
  }
}

export default LogInForms