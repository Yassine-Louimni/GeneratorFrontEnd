import React from 'react'
import './Hero.css'
import dark_arrow from '../../assests/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
     <div className='hero-text'>
        <h1>Your Website, Your Way—Built in 60 Seconds!</h1>
        <p>Choose a template, customize it, and launch your professional website—all in a flash!</p>
        <a href="/explore" className="btn">Explore more<img src={dark_arrow} alt='' /></a>
       
     </div>
    </div>
  )
}

export default Hero
