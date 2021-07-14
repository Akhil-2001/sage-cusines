import React, { Component } from 'react';
import './about.css'
import About from '../components/AboutComponent';

function AboutPage() {
    return(
        <div className='body-burger'>
         <About title='About Page'>
             <p>
                 <br/>
                 Sage Cuisine is a Web Application developed using the MERN Stack that is used to navigate through a database of various tasty recipes.<br/>
                 The navigation bar contains a link to the homepage, the Browse page, the Locate page and the About page.
                 <br/> 
                 <br/>
                 
                 <ul>
                 <br/>
                    <li>
                        MongoDB is a cross-platform document-oriented database program. It was used to make the database and its collection.<br/>
                    </li>
                    <br/>
                    <li>
                        Express.js is a back end web application framework for Node.js and is designed for building web applications and APIs.<br/>
                        Express was used to connect the MongoDB database.
                    </li>
                    <br/>
                     <li>
                        React is an open-source, front end, JavaScript library for building user interfaces or UI components. <br/>
                        ReactJS was used to display all the recipes, navigation, bars, footers and backgrounds as well as manage all the hyperlinks.
                    </li>
                    <br/>
                    <li>
                        Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.<br/>
                        NodeJS was used in the majority of the implementations in all the .js Files
                    </li>
                </ul>
             </p>
             <br/><br/>
             
             <h2>Members</h2><br/>
             <ol>
                <li>Akhil M R</li><br/>
                <li>Aniruddh Acharya</li><br/>
                <li>Anirudh B S</li><br/>
                <li>A Narendiran</li><br/>
             </ol>
        
        </About>

        </div>
    )
}


export default AboutPage;
