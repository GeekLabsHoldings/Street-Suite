import React from 'react'
import logoImg from "../../assets/Logo.png"
import "./NavBar.css"


const NavBar = () => {
  return (

    // start of navbar 
    <nav className='lg:container mx-auto px-4 '>

      {/* navbar logo */}
        <div className="logo">
            <img src={logoImg} alt="" />
        </div>
      {/*end of navbar logo */}

      {/* navbar links */}
        <ul className='hidden md:flex gap-2 lg:gap-10'>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Quizzes</a></li>
            <li><a href="">Leaderboard</a></li>
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