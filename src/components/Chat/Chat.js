import React from 'react'
// Firebase
import { auth, database } from '../../firebase'
// UI
// Material-ui
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
// import PaperRefined from '../views/paper-refined'
import Paper from '../../views/PaperRefined'
// Utils
import { mapObjectToArray } from './../utils'
import ChatAppBar from './ChatAppBar'
import Message from './Message'
import PaperRefined from '../../views/PaperRefined';

class Chat extends React.Component {
  state = {
    name: '',
    newMessage: '',
    messages: null
  }

  componentDidMount() {
    console.log(auth.currentUser)

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
    const newRefForMessage = database.ref('/chat').push({
      message: this.state.newMessage,
      user: auth.currentUser.displayName,
      email: auth.currentUser.email,
      avatar: auth.currentUser.photoURL,
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
        <PaperRefined centered={true}>
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
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                this.addMessage()
              }
            }}
            value={this.state.newMessage}
          />
          <RaisedButton
            onClick={this.addMessage}
            fullWidth={true}
            label={'Send!'}
            primary={true}
          />
        </PaperRefined>
        <div>
          {!this.state.messages ?
            <PaperRefined centered={true}>
              'No messages yet.'
            </PaperRefined>
            :
            this.state.messages.map((message) => (
              <Message
                key={message.timestamp}
                message={message}
              />
            ))
          }
        </div>
      </div>
    )
  }

}

export default Chat