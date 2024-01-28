import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import t11 from '../Assets/t11.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div>
                    <p className=''>LET'S</p>
                    <p>EXPLORE</p>
                    <p className='unique'>UNIQUE</p>
                    <p>CLOTHES</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={t11} alt="" />
            </div>
        </div>
    )
}

export default Hero