import React from 'react'
import logoImg from "../../assets/Logo.png"
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (

    // start of navbar 
    <nav className='lg:container mx-auto px-4 '>

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
        <div className="AuthButtons">
            <button className='logIn'>Log In</button>
            <button className='signUp'>Sign Up</button>
        </div>
      {/*  end of navbar auth bttons */}
    </nav>
    // end of navbar 

  )
}

export default NavBar