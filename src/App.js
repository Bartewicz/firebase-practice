import React from 'react'
import Chat from './components/Chat'


const styles = {
  center: {
    textAlign: 'center'
  }
}

class App extends React.Component {
  
  render() {
    return (
      <div style={styles.center}>
        <Chat />
      </div>
    );
  }
}

export default App;
