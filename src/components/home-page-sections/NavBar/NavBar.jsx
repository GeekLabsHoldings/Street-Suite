import React, { useState } from 'react'
import logoImg from "../../../assets/Logo.png"
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (

    <section className='navbar'>
      <nav className='lg:container mx-auto px-4 justify-between '>

        {/* navbar logo */}
        <Link to="/" className="logo">
          <img src={logoImg} alt="" />
        </Link>
        {/*end of navbar logo */}

        {/* navbar links */}
        <ul className='navLinks hidden md:flex gap-2 lg:gap-10'>
          <li><NavLink to="features">Features</NavLink></li>
          <li><NavLink to="pricing">Pricing</NavLink></li>
          <li><NavLink to="faq">FAQ</NavLink></li>
          <li><NavLink to="quezzes">Quizzes</NavLink></li>
          <li><NavLink to="Leaderboard">Leaderboard</NavLink></li>
        </ul>
        {/* end of navbar links */}

        {/* navbar auth bttons */}
        <div className="AuthButtons hidden md:flex gap-2">
          <button className='logIn'>Log In</button>
          <button className='signUp'>Sign Up</button>
        </div>
        {/*  end of navbar auth bttons */}

        <div className={`bars ${isNavOpen ? "open" : ""}`} onClick={()=>{setIsNavOpen(!isNavOpen)}}>
          <div className='bar'></div>
        </div>
      </nav>
    </section>// start of navbar 

    // end of navbar 

  )
}

export default NavBar