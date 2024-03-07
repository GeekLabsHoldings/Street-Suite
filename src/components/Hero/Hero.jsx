import React from 'react'
import "./Hero.css"

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
