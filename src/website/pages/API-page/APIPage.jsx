import React from 'react'
import "./APIPage.css"
import Hero from '../../components/home-page-sections/Hero/Hero'

import dataPointImg1 from "../../assets/data-points1.png"
import dataPointImg2 from "../../assets/data-points2.png"
import dataPointImg3 from "../../assets/data-points3.png"
import dataPointImg4 from "../../assets/data-points4.png"
import dataPointImg5 from "../../assets/data-points5.png"
import dataPointImg6 from "../../assets/data-points6.png"
import CompaniesCarousel from '../../components/home-page-sections/CompaniesCarousel/CompaniesCarousel'
import TypeIt from 'typeit-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const APIPage = () => {
    return (

        <>
            <Helmet>
                <title>Street Suite’s API</title>
                <meta
                    name="description"
                    content="Introducing Street Suite’s innovative, reliable trading API."
                />
            </Helmet>


            <div className='APIPage-wrapper'>
                {/* hero section in API page */}
                <Hero >
                    <h1 ><span> STREET SUITE</span> <br /> API You Can Trust </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className="flex gap-6">
                        <Link to="/checkout">Get Started</Link >
                        <Link to="" >API Documentation</Link >
                    </div>

                </Hero>




                <div className="shadow-bg">
                    <div className='lg:container mx-auto px-4 APIPage-container py:8 lg:py-20'>

                        {/* data points section in API page */}
                        <div className="data-points-section py-12">
                            <h3>Data Points We Cover</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p>

                            <div className="data-points grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-8">

                                {/* data point card */}
                                <div className="data-point-card border-animate">
                                    <div className="card-body  relative">
                                        <img src={dataPointImg1} alt="" />
                                        <h6>Data Point 1</h6>
                                    </div>
                                </div>

                                <div className="data-point-card border-animate">
                                    <div className="card-body  relative">
                                        <img src={dataPointImg2} alt="" />
                                        <h6>Data Point 1</h6>
                                    </div>
                                </div>
                                <div className="data-point-card border-animate">
                                    <div className="card-body  relative">
                                        <img src={dataPointImg3} alt="" />
                                        <h6>Data Point 1</h6>
                                    </div>
                                </div>
                                <div className="data-point-card border-animate">
                                    <div className="card-body  relative">
                                        <img src={dataPointImg4} alt="" />
                                        <h6>Data Point 1</h6>
                                    </div>
                                </div>
                                <div className="data-point-card border-animate">
                                    <div className="card-body  relative">
                                        <img src={dataPointImg5} alt="" />
                                        <h6>Data Point 1</h6>
                                    </div>
                                </div>
                                <div className="data-point-card border-animate">
                                    <div className="card-body  relative">
                                        <img src={dataPointImg6} alt="" />
                                        <h6>Data Point 1</h6>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* analytics accessible section in API page */}
                        <div className="analytics-accessible-section py-12 flex flex-col">
                            <h3>Analytics & Data Accessible To All </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p>

                            {/* analytics accessible Card section in API page */}

                            <div className="analytics-accessible-card border-animate">
                                <div className="card-body relative">
                                    <ul className="analytics-list">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
                                        <li>sed do eiusmod tempor incididunt ut labore et dolore  </li>
                                        <li>citation ullamco laboris nisi </li>
                                        <li>magna aliqua. Ut enim ad minim eniam, quis nostrud exer </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </li>
                                        <li>sed do eiusmod tempor incididunt ut labore et dolore... </li>
                                    </ul>
                                    <div className="price">
                                        <span>$30</span>
                                        <p>per month</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* clients work with us carousel */}
                    <div className='clients-works-with-us py-20'>
                        <h3>90+ Clients Work With Us</h3>

                        <CompaniesCarousel />
                    </div>


                    {/* easy to use section in API page  */}
                    <div className="easy-to-use px-[16px]">

                        <div className="easy-to-use-card border-animate">
                            <div className="card-body p-6 flex gap-[15px] lg:gap-8">

                                {/* auto typing section */}
                                <div className="api-code-card border-animate w-2/3 lg:w-1/2">
                                    <div className="card-content">
                                        <TypeIt options={{
                                            speed: 30,
                                            waitUntilVisible: true,
                                        }}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur, blanditiis quis expedita eos minima asperiores,</p>
                                            {/* <code>
                                        [
                                            "statusCode": 200,
                                            "headers" {"Content-Type": "application/json"},
                                            "body": {
                                                "results": {
                                                    "name": "LEASES_PAYMENTS",
                                                    "description": "Total of all future operating lease payments",
                                                    "endpoints": "Modal Data, Adjusted Fundamentals.",
                                                }
                                            }
                                        ]          
                                    </code> */}

                                        </TypeIt>
                                    </div>
                                </div>

                                {/* json , PHP buttons in easy to use section in API page */}
                                <div className="easy-to-use-content w-1/3 lg:w-1/2">
                                    <h5>Easy To Use Documentation</h5>
                                    <div className="flex gap-4 flex-col lg:flex-row">
                                        <button>Json API</button>
                                        <button>PHP API</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}

export default APIPage
