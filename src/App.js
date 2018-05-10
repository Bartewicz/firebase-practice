import React, { Component } from 'react'


class App extends Component {
  state = { 
    counter: 0
  }

  componentDidMount() {
    this.readFromDB()
  }

  readFromDB = () => {
    fetch(
      'https://jfddl4-sandbox.firebaseio.com/bartosz/counter.json'
    ).then(r => r.json())
      .then(counter => this.setState({counter}))
  }

  sendToDB = () => {
    fetch(
      'https://jfddl4-sandbox.firebaseio.com/bartosz/.json', {
      method: "PUT",
      body: JSON.stringify(this.state)
    })
  }

  counterHandler = (value) => {
    this.setState({
      counter: value
    }, this.sendToDB())
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.counter}
        </h1>
        <RaisedButton onClick={() => {this.counterHandler(this.state.counter - 1)}}>-</button>
        <button onClick={() => {this.counterHandler(this.state.counter + 1)}}>+</button>
      </div>
    );
  }
}

export default App;
