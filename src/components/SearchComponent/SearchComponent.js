import React, { Component } from 'react';
import './SearchComponent.css';
import AlbumContainerComponent from '../AlbumContainerComponent/AlbumContainerComponent.js';

var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: "422363845c7a48ff908af44f247ddca7",
  secret: "ee10cf18b2184ef7974e05c13323212d"
});

class SearchComponent extends Component {
    state = {
        searchResults: []
    };

    search = (event) => {
        if (!event.target.value) {
            this.setState({
                searchResults: []
            });
            return;
        }

        spotify
        .search({ type: 'album', query: event.target.value })
        .then((response) => {
          this.setState({
            searchResults: this.cleanResults(response)
          });
        })
        .catch(function (err) {
          console.log(err);
        });        
    }

    cleanResults(albumObj) {
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

    render() {
        return (
            <div className="app-container col-11">
                <input className="searchbox" type="text" placeholder="album title" onChange={this.search} autoFocus={true}></input>
                <div className="search-results">
                    Search for your album here
                </div>
                <AlbumContainerComponent results={this.state.searchResults}></AlbumContainerComponent>
            </div>
        )
    }
}

export default SearchComponent;