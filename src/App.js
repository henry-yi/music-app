import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumContainerComponent from './components/AlbumContainerComponent/AlbumContainerComponent.js';
import PlayButtonComponent from './components/PlayButtonComponent/PlayButtonComponent.js';
import SongImageComponent from './components/SongImageComponent/SongImageComponent.js';
import LyricsComponent from './components/LyricsComponent/LyricsComponent.js';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.js'
import SearchComponent from './components/SearchComponent/SearchComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App app-container">
        <div className="row">
          <SidebarComponent/>
          <SearchComponent/>        
        </div>
      </div>
    );
  }
}

export default App;
