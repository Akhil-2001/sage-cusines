import React, { Component } from 'react';
import Hero from "../components/HeroPage"
import TextCard from "../components/TextCard"
import ramen from '../img/ramen-1.jpg'
import './home.css'

function Home () {
    return(
        <div>
            <Hero />
            <TextCard heading='You were a boulder. I am a mountain!'>
            <br/><br/>"Cooking is like love, it should be entered into with complete abandon...<br/>
            Or not at all."<br/>
            <br/>
            "No one is is born a great cook, one learns by doing."<br/>
            <br/>
            "A recipe has no soul. You, as the cook,must bring soul to the recipe."
            </TextCard>
        </div>
    );
}

export default Home;