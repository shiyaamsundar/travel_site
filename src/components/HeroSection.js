import React from 'react'
import Button from './Button'

import './HeroSection.css'
import '../App.css'

const HeroSection=()=> {

    const vdosrc="./videos/video-1.mp4"

    return (
        <div className="hero-container">
            <video src={vdosrc} autoPlay loop muted/>
            <h1>Adventure Awaits</h1>
            <p>What are u waiting for</p>
            <div className="hero-btn">
        <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large">Get Started</Button>
        <Button className="btns" buttonStyle='btn--primary' buttonSize="btn--large">Watch trailer<i className="far da-play-circle"/></Button>
            </div>
        </div>
    )
}

export default HeroSection
