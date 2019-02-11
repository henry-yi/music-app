import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AlbumContainerComponent from './components/AlbumContainerComponent/AlbumContainerComponent.js';
import Player from './pages/Player/Player.js';
import ForwardButtonComponent from './components/ForwardButtonComponent/ForwardButtonComponent.js';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.js'
import SearchComponent from './components/SearchComponent/SearchComponent.js';
import Search from './pages/Search/Search.js';

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "422363845c7a48ff908af44f247ddca7",
  secret: "ee10cf18b2184ef7974e05c13323212d"
 });

class App extends Component {
  render() {
    return (
      <div className="App app-container">
          {/* <AlbumContainerComponent
            results={this.state.searchResults}
          /> */}
          <Search />
          {/*<Player />
          <ForwardButtonComponent /> */}
      </div>
    );
  }
}

export default App;
