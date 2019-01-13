import React, { Component } from 'react';
import './LyricsComponent.css';

class LyricsComponent extends Component {
    render () {
        return (
            <p className="lyrics-element">{this.props.text}</p>
        );
    }
}

export default LyricsComponent;