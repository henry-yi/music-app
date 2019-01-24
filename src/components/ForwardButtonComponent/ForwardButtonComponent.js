import React, { Component } from 'react';
import './ForwardButtonComponent.css';

class ForwardButtonComponent extends Component {
    forwardClick = () => {
        console.log("forward clicked");
    }

    render() {
        return (
          <div className="forwardButton" onClick={this.forwardClick}>
          </div>
        );
    }
}

export default ForwardButtonComponent;