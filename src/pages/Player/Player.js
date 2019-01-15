import React, { Component } from 'react';
import './Player.css';
import PlayButtonComponent from '../../components/PlayButtonComponent/PlayButtonComponent.js';
import SongImageComponent from '../../components/SongImageComponent/SongImageComponent.js';
import LyricsComponent from '../../components/LyricsComponent/LyricsComponent.js';

class Player extends Component {
    render () {
        return (
            <div className="outer-player-div">
                <PlayButtonComponent/>
                <SongImageComponent
                    src="/assets/images/1-Shine-On-You-Crazy-Diamond-pts1-5.jpg"
                    alt="1-Shine on You Crazy Diamond"
                />
                <LyricsComponent
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
            </div>
        )
    }
}

export default Player;