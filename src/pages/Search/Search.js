import React, { Component } from 'react';
import './Search.css';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent.js';
import SearchComponent from '../../components/SearchComponent/SearchComponent.js';

class Search extends Component {
    render () {
        return (
            <div className="row">
                <SidebarComponent/>
                <SearchComponent/>        
            </div>
        )
    }
}

export default Search;