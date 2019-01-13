import React, { Component } from 'react';
import './SongImageComponent.css';

class SongImageComponent extends Component {
    render() {
        return (
            <img className="song-image" src={this.props.src} alt={this.props.alt} />
        );
    }
}

export default SongImageComponent;