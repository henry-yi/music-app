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
                    <LogoComponent />             
                    <MenuItemComponent handler={this.menuClickHandler} active={this.state.activeMenu} menuName="Search"/>
                    <MenuItemComponent handler={this.menuClickHandler} active={this.state.activeMenu} menuName="Home"/>            
                </div>
            </div>
        );
    }

    menuClickHandler = (menuName) => {
        this.setState({
            activeMenu: menuName
        })
    }    
}

export default SidebarComponent;