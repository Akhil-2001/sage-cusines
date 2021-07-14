import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render () {
        return(
            <div className='footer-container'>
                <div className='footer-item'>Web technology Project</div>
                <img src="https://vgraphs.com/images/players/sprays/valorant-collectible-pulse-check-spray.png" className='slow-orb' style={{'width':'100px'}}></img>
                <div className='footer-item us-names'>Akhil M R | Aniruddh Acharya | Anirudh B S | A Narendiran </div>
                <div className='footer-item'>PESU SEM 3 SECTION A</div>
            </div>
        )
    }
}

export default Footer;