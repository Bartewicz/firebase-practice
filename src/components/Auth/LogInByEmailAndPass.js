import React from 'react'
import { TextField, RaisedButton } from 'material-ui'

const LogInByEmailAndPass = (props) => (
  <div>
    <TextField
      name={'email'}
      hintText={'Type your email address'}
      type="text"
      value={props.emailValue}
      onChange={props.onEmailChange}
      fullWidth={true}
      />
    <TextField
      name={'password'}
      hintText={'Type your password'}
      type={'password'}
      value={props.passwordValue}
      onChange={props.onPasswordChange}
      fullWidth={true}
    />
    <RaisedButton
      onClick={props.onLogInClick}
      primary={true}
      label={<b>Log me in</b>}
    />

  </div>
)

export default LogInByEmailAndPass