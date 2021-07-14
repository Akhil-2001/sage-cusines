import React, { Component } from 'react';
import './ItemDisplay.css'
class Details extends Component{
    render(){
        return(
            <div className="details-container">
                <div className="pic">
                    <img src={this.props.image}></img>
                </div>
                <div className="title">
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.type}</h3>
                </div>
                <div className="ingredients">
                    <p>{(this.props.ingredients)}</p>
                </div>
                <div className="recipe">
                    <p>{this.props.recipe}</p>
                </div>
            </div>

        )
    }
}

export default Details
