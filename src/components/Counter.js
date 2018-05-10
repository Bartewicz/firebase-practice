import React from 'react'

import { database } from '../firebase'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    database.ref('/counter').on('value',(snapshot) => {
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

  render() {
    return (
      <div>
        <h1>
          {0 || this.state.counter}
        </h1>
        <RaisedButton onClick={() => { this.sendToDB(this.state.counter - 1) }}>-</RaisedButton>
        <RaisedButton onClick={() => { this.sendToDB(this.state.counter + 1) }}>+</RaisedButton>
      </div>
    )
  }

}

export default Counter