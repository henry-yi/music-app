import React, { Component } from 'react';
import './PlayButtonComponent.css';

class PlayButtonComponent extends Component {
    state = {
        status: "play-button playpause",
        disabled: "pause-button playpause"
    };

    changeState = () => {
        let tempStatus = this.state.status;
        this.setState({
            status: this.state.disabled,
            disabled: tempStatus
        })
    }

    render() {
        return (
          <div className={this.state.status} onClick={this.changeState}>
          </div>
        );
    }
}

export default PlayButtonComponent;