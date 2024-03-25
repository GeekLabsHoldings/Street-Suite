import React from 'react'
import "./QuizzesPage.css"
import Hero from '../../../components/home-page-sections/Hero/Hero'
import { Outlet } from 'react-router-dom'

const QuizzesPage = () => {


    return (
        <>
            <div className="quizzes-wrapper">
                <Hero>
                    <h1>Welcome to <br /> <span> STREET SUITE’s </span> Quizzes</h1>
                    <p className='sm:container'>Dive into our interactive quizzes designed to unravel your trading persona and unveil insights into your trading prowess.</p>
                </Hero>


                <div className="lg:container mx-auto px-[16px] items-center  py-[10px] lg:py-16">

                    <Outlet />
                
                </div>

            </div>
        </>
    )
}

export default QuizzesPage
