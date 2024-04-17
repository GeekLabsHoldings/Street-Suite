import React, { useState } from 'react'
import logoImg from "../../../assets/Logo.png"
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../../../redux/cardsSlice';
import LoginImg from '../../../../dashboard/assets/imgOfPerson.svg';

const NavBar = () => {

  const userState = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropDown,setOpenDropDown] = useState(false);
  const [selected,setSelected] = useState(false);


  return (
<div>
    <section className='navbar '>
     {isNavOpen && <div className='overlay'></div>}
      <nav className='mx-auto px-[2vw] justify-between '>

        {/* navbar logo */}
        <Link to="/" className="logo">
          <img src={logoImg} alt="" />
        </Link>
        {/*end of navbar logo */}

        <div className={`mobileScreenNav ${isNavOpen ? "open" : ""} hidden md:flex justify-around w-auto gap-[5vw]`}>
          {/* navbar links */}
          <ul className='navLinks first flex gap-[16px] lg:gap-0'>
            <li ><NavLink to="/quizzes">Quizzes</NavLink></li>
            <li ><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          </ul>
          {/* end of navbar links */}

          {/* navbar links */}
          <ul className='navLinks flex gap-[16px] lg:gap-[3rem]'>
            <li><NavLink to="/blogs">Blog</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
          </ul>
          {/* end of navbar links */}
        </div>


        {/* navbar auth bttons */}
        {!userState ? <div className="AuthButtons hidden lg:flex gap-[16px]">
          <Link to="/login" className='logIn'>Log In</Link>
          <Link to="/signup" className='signUp'>Sign Up</Link>
        </div> : 
        <div>
           <div className='flex gap-2 cursor-pointer relative loginPerson' onClick={()=>{setOpenDropDown(!openDropDown)}}>
         <img src={LoginImg} alt="" />
         <div className='loginPerson '>
             <h6>Moni Roy</h6>
             <p>Beginner</p>
         </div>
         </div>
         {openDropDown && !selected ? 
       <div className='userOptions'>
        <ul className='ulSection'>
       <li><a href="/dashboard/setting">setting</a></li>
       <li onClick={()=>{
         dispatch(logout());
         setSelected(true)
       }}><a onClick={()=>{setSelected(true)}}>logout</a></li>
      </ul>
       </div>
       :null}
        </div>
         
    }

        {/*  end of navbar auth bttons */}

        <div className={` bars flex lg:hidden ${isNavOpen ? "open" : ""}`} onClick={() => { setIsNavOpen(!isNavOpen) }}>
          <div className='bar'></div>
        </div>
      </nav>
    </section>

       

      </div>
    
    
    // start of navbar 

    // end of navbar 

  )
}

export default NavBar