import React, { Component } from 'react';
import './SearchComponent.css';
import AlbumContainerComponent from '../AlbumContainerComponent/AlbumContainerComponent.js';

class SearchComponent extends Component {
    state = {
        searchResults: []
    };

    makeRequest = (event) => {
        if (!event.target.value) {
            this.setState({
                searchResults: []
            });
            return;
        }

        const http = new XMLHttpRequest();
        http.open('POST', 'http://127.0.0.1:3001/api/getData', true);
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.send('query='+encodeURIComponent(event.target.value));

        http.onreadystatechange = (e) => {
            if (http.readyState===4 && http.status===200) {
                this.setState({
                    searchResults: this.cleanResults(JSON.parse(http.responseText))
                });           
            }
        };
    }

    cleanResults(albumObj) {
        let albumList = albumObj.tracks.items;
        let results = [];
    
        const nAlbums = 10;
    
        for (var i = 0; i < (nAlbums < albumList.length ? nAlbums : albumList.length); i++) {
          let result = {
            title: albumList[i].album.name,
            artist: albumList[i].album.artists[0].name,
            img: albumList[i].album.images[0].url
          };
          results.push(result);
        }
    
        return results;
    }

    render() {
        return (
            <div className="app-container col-11">
                <input className="searchbox" type="text" placeholder="album title" onChange={this.makeRequest} autoFocus={true}></input>
                <div className="search-results">
                    Search for your album here
                </div>
                <AlbumContainerComponent results={this.state.searchResults}></AlbumContainerComponent>
            </div>
        )
    }
}

export default SearchComponent;