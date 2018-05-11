import React from 'react'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'

const LogInByGoogle = (props) => (
  <div>
    <RaisedButton
      secondary={true}
      label={'Log in with Google'}
      onClick={props.onLogInClick}
    />
  </div>
)

export default LogInByGoogle