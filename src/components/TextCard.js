import React, { Children, Component } from 'react';
import { withRouter } from 'react-router-dom';
import './TextCard.css'

class TextCard extends Component {

    render() {
        return(
            <div className='sage text-container'>
                <h1 className='header-1'>{this.props.heading}</h1>
                <p className='textbox'>{this.props.children}</p>
            </div>
        );
    }

}



export default TextCard;