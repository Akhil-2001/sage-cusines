import React, { Component, useState, useEffect } from 'react';
import './search.css'

class SearchItem extends Component {
    
    state = {clicked: false};

    render() {
        return(
            <div className='search-container'>
            <input type="text" className="search-item" placeholder="Search..." />
            <button onClick={this.props.search} className="search-button">Search</button>
            </div>
        );
    }

}

export default SearchItem;
    