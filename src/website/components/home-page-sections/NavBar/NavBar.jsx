import React, { useState } from 'react'
import logoImg from "../../../assets/Logo.png"
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  // useEffect(()=>{

  //   if (isNavOpen) {
  //     $(".mobileScreenNav").slideDown(300);
  //   }else{
  //     $(".mobileScreenNav").slide(300);
  //   }

  // },[])

  return (

    <section className='navbar'>
     {isNavOpen && <div className='overlay'></div>}
      <nav className='mx-auto px-[2rem] justify-between '>

        {/* navbar logo */}
        <Link to="/" className="logo">
          <img src={logoImg} alt="" />
        </Link>
        {/*end of navbar logo */}

        <div className={`mobileScreenNav ${isNavOpen ? "open" : ""} hidden md:flex justify-around w-[50%] gap-[16px] lg:gap-[0px]`}>
          {/* navbar links */}
          <ul className='navLinks first flex gap-[16px] lg:gap-0'>
            <li ><NavLink to="/quizzes">Quizzes</NavLink></li>
            <li ><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          </ul>
          {/* end of navbar links */}

          {/* navbar links */}
          <ul className='navLinks flex gap-[16px] lg:gap-[4rem]'>
            <li><NavLink to="/blogs">Blog</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
          </ul>
          {/* end of navbar links */}
        </div>


        {/* navbar auth bttons */}
        <div className="AuthButtons hidden lg:flex gap-[16px]">
          <Link to="/login" className='logIn'>Log In</Link>
          <Link to="/signup" className='signUp'>Sign Up</Link>
        </div>
        {/*  end of navbar auth bttons */}

        <div className={` bars flex lg:hidden ${isNavOpen ? "open" : ""}`} onClick={() => { setIsNavOpen(!isNavOpen) }}>
          <div className='bar'></div>
        </div>
      </nav>
    </section>// start of navbar 

    // end of navbar 

  )
}

export default NavBar