import React, { Component } from 'react';
import './BrowseItem.css'

class BrowseItem extends Component {
    
    state = {clicked: false};

    render() {
        return(
            <div className='photo'>
            <a href={this.props.page}style={{'textDecoration':'none'}}>
            <div className={'item-container '+this.props.imgtype}>
                <h4 className='BrowseHead'>{this.props.children}</h4>
            </div>
            </a>
            </div>
        );
    }

}

export default BrowseItem;
