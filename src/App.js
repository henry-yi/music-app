import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumContainerComponent from './components/AlbumContainerComponent/AlbumContainerComponent.js';
import Player from './pages/Player/Player.js';
import ForwardButtonComponent from './components/ForwardButtonComponent/ForwardButtonComponent.js';

var Spotify = require('node-spotify-api');


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
      <div className="App">
          {/* <AlbumContainerComponent
            results={this.state.searchResults}
          /> */}
          <Player />
          <ForwardButtonComponent />
      </div>
    );
  }
}

export default App;
