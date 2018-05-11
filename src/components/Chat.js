import React from 'react'
// Firebase
import { database } from '../firebase'
// UI
// Material-ui
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
// import PaperRefined from '../views/paper-refined'
import Paper from '../views/PaperRefined'
// Utils
import { mapObjectToArray } from './utils'
import moment from 'moment'
import ChatAppBar from './ChatAppBar';

class Chat extends React.Component {
  state = {
    name: 'Szymon',
    newMessage: '',
    messages: null
  }

  componentDidMount() {
    database.ref('/chat').on('value', (snapshot) => (
      this.setState({
        messages: mapObjectToArray(snapshot.val()).reverse()
      })
    ))
  }

  textHandler = (event, value) =>
    this.setState({
      newMessage: value
    })


  nameHandler = (event, value) =>
    this.setState({
      name: value
    })


  addMessage = () => {
    database.ref('/chat').push({
      message: this.state.newMessage,
      user: this.state.name,
      timestamp: Date.now()
    })
    this.setState({
      newMessage: ''
    })
  }

  render() {
    return (
      <div>
        <ChatAppBar />
        <Paper>
          <h1>
            Your name is now: {this.state.name}
          </h1>
          <TextField
            name={'user'}
            onChange={this.nameHandler}
            fullWidth={true}
            value={this.state.name}
          />
          <TextField
            name={'new-message'}
            onChange={this.textHandler}
            fullWidth={true}
            value={this.state.newMessage}
          />
          <RaisedButton
            onClick={this.addMessage}
            fullWidth={true}
            label={'Send!'}
            primary={true}
          />
        </Paper>
        <Paper>
          {!this.state.messages ?
            'No messages yet.'
            :
            this.state.messages.map((el) => (
              <MenuItem
                key={el.timestamp}
                secondaryText={
                  <em>{moment(el.timestamp).format('h:mm:ss a, MMMM Do YYYY')}</em>
                }>
                <strong>{el.user}:</strong>&nbsp;{el.message}
              </MenuItem>
            ))
          }
        </Paper>
      </div>
    )
  }

}

export default Chat