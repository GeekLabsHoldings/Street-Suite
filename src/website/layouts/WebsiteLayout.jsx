import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AnnoncmentSlider from '../components/home-page-sections/Annoncment-Slider/AnnoncmentSlider'
import NavBar from '../components/home-page-sections/NavBar/NavBar'
import Footer from '../components/home-page-sections/Footer/Footer'
import { tokenContext } from '../context/appContext'

const WebsiteLayout = () => {
    console.log("asdasdasd");
  
    
    return (
        <>
            <AnnoncmentSlider />

            <NavBar />

            <Outlet />

            <Footer />
        </>
    )
}

export default WebsiteLayout
