import { useState } from 'react'
import io from 'socket.io-client';
import './App.css'

const socket = io('http://localhost:4000');

function App() {  

  return (
    <div className="App">
      <h1>Hello world - Chat</h1>
    </div>
  )
}

export default App