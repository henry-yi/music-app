import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './component/ChildComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Camacho's  <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ChildComponent />
        </header>
      </div>
    );
  }
}

export default App;
