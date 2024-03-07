import React from 'react'
import "./QuezzesPage.css"
import Hero from '../../../components/Hero/Hero'
import { Outlet } from 'react-router-dom'

const QuezzesPage = () => {


    return (
        <>
            <div className="quizzes-wrapper">
                <Hero>
                    <h1>Welcome to <br /> with<span> STREET SUITE’s </span>Quizzes</h1>
                    <p className='sm:container'>Dive into our interactive quizzes designed to unravel your trading persona and unveil insights into your trading prowess.</p>
                </Hero>


                <div className="lg:container mx-auto px-4 items-center py-16">

                    <Outlet />
                
                </div>

            </div>
        </>
    )
}

export default QuezzesPage
