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
            <div className="sidebar-container col-1">
                <LogoComponent />             
                <MenuItemComponent handler={this.menuClickHandler} active={this.state.activeMenu} menuName="Search"/>
                <MenuItemComponent handler={this.menuClickHandler} active={this.state.activeMenu} menuName="Home"/>            
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