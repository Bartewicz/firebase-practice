import React from 'react'

import Chat from './components/Chat'
import Auth from './components/Auth'

class App extends React.Component {
  
  render() {
    return (
      <Auth>
        <Chat />
      </Auth>
    )
  }
}

export default App