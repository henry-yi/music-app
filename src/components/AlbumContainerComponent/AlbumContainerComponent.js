import React, { Component } from 'react';
import './AlbumContainerComponent.css';
import AlbumComponent from '../AlbumComponent/AlbumComponent.js';

class AlbumContainerComponent extends Component {
    render() {
        return (
            <div className="album-container-div">
                {this.props.results.map(result => (
                    <AlbumComponent
                        imgsrc={result.img}
                        title={result.title}
                        artist={result.artist}
                    />
                ))}
            </div>
        );
    }
}

export default AlbumContainerComponent;