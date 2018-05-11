import React from 'react'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'

const LogInByGoogle = (props) => (
  <div>
    <RaisedButton
      secondary={true}
      label={<b>Log in with Google</b>}
      onClick={props.onLogInClick}
    />
  </div>
)

export default LogInByGoogle