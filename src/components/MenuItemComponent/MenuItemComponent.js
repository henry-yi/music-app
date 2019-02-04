import React, { Component } from 'react';
import './MenuItemComponent.css';

import GetIcon from '../GetIconComponent/GetIconComponent.js';

class MenuItemComponent extends Component {
    render() {
        return (
            <div className={"row menu-item " + this.getClass()} onClick={()=>this.props.handler(this.props.menuName)}>
                <div className="col-1 menu-icon">
                    <GetIcon menuName={this.props.menuName}/>
                </div>
                <span className="col-8 menu-link">{this.props.menuName}</span>
            </div>
        )
    }

    getClass() {
        if (this.props.active === this.props.menuName) {
            return "selected";
        }
        return "";
    }
}

export default MenuItemComponent;