import React from 'react'
import { TextField, RaisedButton } from 'material-ui'

const CreateUserByEmailAndPass = (props) => (
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
    <TextField
      name={'retypePassword'}
      hintText={'Retype your password'}
      type={'password'}
      value={props.retypePasswordValue}
      onChange={props.onRetypePasswordChange}
      fullWidth={true}
    />
    <RaisedButton
      onClick={props.onLogInClick}
      primary={true}
      label={<b>Log me in</b>}
    />

  </div>
)

export default CreateUserByEmailAndPass