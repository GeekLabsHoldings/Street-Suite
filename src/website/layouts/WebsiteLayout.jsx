import React from 'react'
import { Outlet } from 'react-router-dom'
import AnnoncmentSlider from '../components/home-page-sections/Annoncment-Slider/AnnoncmentSlider'
import NavBar from '../components/home-page-sections/NavBar/NavBar'
import Footer from '../components/home-page-sections/Footer/Footer'

const WebsiteLayout = () => {
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
