import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumContainerComponent from './components/AlbumContainerComponent/AlbumContainerComponent.js';
import PlayButtonComponent from './components/PlayButtonComponent/PlayButtonComponent.js';
import SongImageComponent from './components/SongImageComponent/SongImageComponent.js';
import LyricsComponent from './components/LyricsComponent/LyricsComponent.js';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.js'
import SearchComponent from './components/SearchComponent/SearchComponent.js';

var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: "422363845c7a48ff908af44f247ddca7",
  secret: "ee10cf18b2184ef7974e05c13323212d"
 });
class App extends Component {
  state = {
    searchResults: []
  };

  cleanResults = (albumObj) => {
    let albumList = albumObj.albums.items;
    let results = [];

    const nAlbums = 10;

    for (var i = 0; i < (nAlbums < albumList.length ? nAlbums : albumList.length); i++) {
      let result = {
        title: albumList[i].name,
        artist: albumList[i].artists[0].name,
        img: albumList[i].images[0].url
      };
      results.push(result);
    }

    return results;
  }

  componentDidMount() {
    spotify
      .search({ type: 'album', query: 'rolling stones' })
      .then((response) => {
        console.log(response);
        console.log(this);
        this.setState({
          searchResults: this.cleanResults(response)
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

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
