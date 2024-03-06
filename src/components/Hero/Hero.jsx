import React from 'react'
import "./Hero.css"
import heroImg from "../../assets/hero-Img.png"

const Hero = ({children}) => {
  return (

    // hero section
    <section className='hero'>

      {children}

    </section>
    // end of hero section

  )
}

export default Hero
