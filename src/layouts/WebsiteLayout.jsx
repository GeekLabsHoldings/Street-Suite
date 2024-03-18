import React from 'react'
import { Outlet } from 'react-router-dom'
import AnnoncmentSlider from '../components/home-page-sections/Annoncment-Slider/AnnoncmentSlider'
import NavBar from '../components/home-page-sections/NavBar/NavBar'

const WebsiteLayout = () => {
    return (
        <>
            <AnnoncmentSlider />
            <NavBar />
            
            <Outlet />
        </>
    )
}

export default WebsiteLayout
