import React from 'react'
import "./Hero.css"
import heroImg from "../../assets/hero-Img.png"

const Hero = () => {
  return (

    // hero section
    <section className='hero'>
        <h1>Trading Opportunities<br/> with<span> STREET SUITE’s </span>Alerts</h1>
        <p className='sm:container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <button>Get Started</button>
        <img src={heroImg} alt="" />

    </section>
    // end of hero section

  )
}

export default Hero
