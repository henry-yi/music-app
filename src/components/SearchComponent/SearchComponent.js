import React, { Component } from 'react';
import './SearchComponent.css';
import AlbumContainerComponent from '../AlbumContainerComponent/AlbumContainerComponent.js';

class SearchComponent extends Component {
    render() {
        return (
            <div className="app-container col-11">
                <input className="searchbox" type="text" placeholder="album title" autoFocus={true}></input>
                <div className="search-results">
                    Search for your album here
                </div>
                <AlbumContainerComponent results={[{img:"https://via.placeholder.com/150", title:"test", artist:"test2"}]}></AlbumContainerComponent>
            </div>
        )
    }
}

export default SearchComponent;