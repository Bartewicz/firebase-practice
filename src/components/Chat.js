import React from 'react'
// Firebase
import { database } from '../firebase'
// Material-ui
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
// Views
import Paper from '../views/PaperRefined'
// import PaperRefined from '../views/paper-refined'
class Chat extends React.Component {
  state = {
    name: 'Szymon',
    newMessage: '',
    posts: null
  }

  componentDidMount() {
    database.ref('/counter').on('value', (snapshot) => {
      this.setState({
        counter: snapshot.val()
      })
    }
    )
  }

  sendToDB = (data) => {
    database.ref('/counter')
      .set(data)
  }

  textHandler = (event, value) => {
    this.setState({
      newMessage: value
    })
  }

  nameHandler = (event, value) => {
    this.setState({
      name: value
    })
  }

  addMessage = () => database.ref('/chat').push({
    message: this.state.newMessage,
    user: this.state.name,
    timestamp: Date.now()
  })

  render() {
    return (
      <Paper>
        <h1>
          Your name is now: {this.state.name}
        </h1>
        <TextField
          onChange={this.nameHandler}
          fullWidth={true}
          value={this.state.name}
        />
        <TextField
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
    )
  }

}

export default Chat