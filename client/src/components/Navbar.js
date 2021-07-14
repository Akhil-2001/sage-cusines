import React, { Component } from 'react';
import './Navbar.css';

const MenuList = [
    {
        title: "BROWSE",
        classes: 'menu-item-sage',
        href: './browse'
    },
    {
        title: "LOCATE",
        classes: 'menu-item-sage',
        href: './locate'
    },
    {
        title: "ABOUT",
        classes: 'menu-item-sage',
        href: './help'
    }
]

class Navbar extends Component {
    
    state = {clicked: false}

    handleClick = () => {this.setState({clicked: !this.state.clicked})};
    
    render() {
        return (
            <nav className='nav-bar-sage'>
                <img src="https://vgraphs.com/images/players/sprays/valorant-collectible-pulse-check-spray.png" width="200px"></img>
                <a href='/' id='logo-href'><h1 className='nav-logo'>SAGE CUISINES</h1></a>
                <div className='menu-icon-sage' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'menu-items-sage active' : 'menu-items-sage'}>
                    {MenuList.map((item, index) => {
                        return (
                            <li key={index}>
                                <h4><a className={item.classes} href={item.href}>{item.title}</a></h4>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;