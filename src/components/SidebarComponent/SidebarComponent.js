import React, { Component } from 'react';
import './SidebarComponent.css';

import LogoComponent from '../LogoComponent/LogoComponent.js'
import MenuItemComponent from '../MenuItemComponent/MenuItemComponent.js'

class SidebarComponent extends Component {
    state = {
        activeMenu: "Home"
    }

    render() {
        return (
            <div className="col-6">
                <div className="sidebar container">
                    <div className="row logo-item">
                        <LogoComponent />
                    </div>                
                    <div className="row menu-item">
                        <MenuItemComponent handler={this.menuClickHandler} active={this.state.activeMenu} menuName="Search"/>
                    </div>
                    <div className="row menu-item">
                        <MenuItemComponent handler={this.menuClickHandler} active={this.state.activeMenu} menuName="Home"/>
                    </div>                
                </div>
            </div>
        );
    }

    menuClickHandler = (event) => {
        this.setState({
            activeMenu: this.props.menuName
        })
    }    
}

export default SidebarComponent;