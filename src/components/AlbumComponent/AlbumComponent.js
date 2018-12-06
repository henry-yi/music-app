import React, { Component } from 'react';
import './AlbumComponent.css';

class AlbumComponent extends Component {
    render() {
        return (
            <div className="outer-album-card">
                <img className="album-card-image" src={this.props.imgsrc} alt={this.props.title} />
                <div className="album-card-text">
                    <p className="album-card-title">{this.props.title}</p>
                    <p className="album-card-artist">{this.props.artist}</p>
                </div>
            </div>
        );
    }
}

export default AlbumComponent;