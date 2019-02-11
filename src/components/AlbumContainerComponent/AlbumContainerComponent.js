import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './AlbumContainerComponent.css';
import AlbumComponent from '../AlbumComponent/AlbumComponent.js';
import Player from '../../pages/Player/Player.js';

class AlbumContainerComponent extends Component {
    render() {
        return (
            <Router>
                <div className="album-container-div">
                    <Link to="/album">
                       {this.props.results.map((result, index) => (
                            <AlbumComponent
                                key={index}
                                imgsrc={result.img}
                                title={result.title}
                                artist={result.artist}
                            />
                        ))}
                    </Link>
                    <Route path="/album" component={Player} />
                </div>
            </Router>
        );
    }
}

export default AlbumContainerComponent;