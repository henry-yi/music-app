import React, { Component } from 'react';
import './MenuItemComponent.css';

class MenuItemComponent extends Component {
    render() {
        return (
            <div className="col-12">
                <div onClick={this.props.handler} className={this.getClass()} >
                    {this.props.menuName}
                </div>
            </div>
        )
    }

    getClass() {
        if (this.props.active === this.props.menuName) {
            return "menu-item-name selected";
        }
        return "menu-item-name";
    }
}

export default MenuItemComponent;