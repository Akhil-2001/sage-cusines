import React, { Component } from 'react';
import BrowseItem from '../components/BrowseItem'
import SearchItem from '../components/search'
import "./browse.css"
function Browse() {
    return(
            <div className="bro">
            <div className="searchBar">
            <SearchItem>search</SearchItem>
            </div>
            
            <div className="browseBox">
                <BrowseItem imgtype='starters' page="/appetizers">Appetizers</BrowseItem>
                <BrowseItem imgtype='mainCourse' page="/maincourse">Main Course</BrowseItem>
                <BrowseItem imgtype='desserts' page="/desserts">Desserts</BrowseItem>
            </div>
            </div>
     );
}

export default Browse;