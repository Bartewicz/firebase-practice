import React from 'react'
// Material-ui
import { ListItem } from 'material-ui/List'
import { Avatar } from 'material-ui'
import ChatIcon from 'material-ui/svg-icons/communication/chat'
import { darkBlack } from 'material-ui/styles/colors'
// Utils
import moment from 'moment'
import PaperRefined from '../../views/PaperRefined';

const Message = ({ message }) => (
  <PaperRefined>
    <ListItem
      leftAvatar={
        <Avatar
          src={message.avatar}
          icon={<ChatIcon />}
        />
      }
      primaryText={message.user || message.email}
      secondaryText={
        <p>
          <span style={{ color: darkBlack }}>
            {moment(message.timestamp).format('DD/MM/YY HH:mm')}
          </span> --
              {message.message}
        </p>
      }
    />
  </PaperRefined>
)

export default Message