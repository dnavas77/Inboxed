import React, { Component } from 'react';
import './App.css';

// Components
import Messages from './components/Messages/Messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Inboxed&#8482;</h1>
        </header>
        <Messages/>
      </div>
    );
  }
}

export default App;
