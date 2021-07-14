import React, { Component } from 'react';
import './ItemCard.css';

class ItemCard extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {clicked: false}
    }
    
    handleClick = () => {this.setState({clicked: !this.state.clicked})};

    render(){
        return(
            <div>
                <div className="itemBox-container" onClick={this.handleClick}>
                    <div className="photo">
                        <img src={this.props.image}></img>
                    </div>
                    <div>
                        <h3 className="itemName">{this.props.name}</h3>
                    </div>
                </div>
                <div className={this.state.clicked?'item-active':'item-inactive'}>
                    <i className={(this.state.clicked ? 'fas fa-times' : 'fas fa-bars')+' ifra'} onClick={this.handleClick}></i>
                    <div className='container-details'>
                        <img src={this.props.image} className='img-box'></img>
                        <div>
                            <h2 className='details-head'>{this.props.name}</h2>
                            <span className='ing-head'>Ingredients</span>
                            <ul className='ing-container-1'>{this.props.ingredients.map((item, index) => {
                                return(
                                    <li>{item}</li>
                                )
                            })}</ul>
                            <span className='ing-head'>Steps</span>
                            <ul className='ing-container-1'>{this.props.steps.map((item, index) => {
                                return(
                                    <li>{item}</li>
                                )
                            })}</ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default ItemCard