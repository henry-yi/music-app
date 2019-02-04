import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumContainerComponent from './components/AlbumContainerComponent/AlbumContainerComponent.js';
import Player from './pages/Player/Player.js';
import ForwardButtonComponent from './components/ForwardButtonComponent/ForwardButtonComponent.js';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.js'
import SearchComponent from './components/SearchComponent/SearchComponent.js';

var Spotify = require('node-spotify-api');


class App extends Component {
  render() {
    return (
      <div className="App app-container">
          {/* <AlbumContainerComponent
            results={this.state.searchResults}
          /> */}
        <div className="row">
          <SidebarComponent/>
          <SearchComponent/>        
        </div>
          <Player />
          <ForwardButtonComponent />
      </div>
    );
  }
}

export default App;
