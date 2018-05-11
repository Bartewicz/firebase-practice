import React from 'react'
// Firebase
import { auth } from '../../firebase'
// Material-ui
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

const ChatAppBar = (props) => (
  <AppBar
    showMenuIconButton={false}
    iconElementRight={
      <IconButton onClick={() => auth.signOut()}>
        <NavigationClose />
      </IconButton>
    }
  />
)

export default ChatAppBar