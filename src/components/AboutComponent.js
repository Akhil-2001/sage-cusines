// JavaScript source code
import React, { Component } from 'react';
import './AboutComponent.css';


class About extends Component{
    render(){
        return(
            
            <div className = "textbox-about">
                <h2>{this.props.title}</h2>
                <p>{this.props.children}</p>
            </div>
            
        )
    };
}

export default About