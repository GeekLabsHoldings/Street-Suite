import React from 'react'
import "./Plans.css"
import { Link } from 'react-router-dom'

const Plans = () => {
    return (

        // plans section
        <section className='plans'>
            <h3 className='section-title'>Choose your plan</h3>

            <div className='lg:container mx-auto px-0 md:px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 gap-y-6 plans-container md:columns-8 flex items-center md:items-end overflow-x-scroll'>
                {/* first plane */}
                <div className="plane">
                    <div className="plane-body flex flex-col justify-center items-center p-6 md:px-8 md:py-12">
                        <h5 className="plane-title">Starter Plane</h5>
                        <div className="line"></div>
                        <ul className="plane-points space-y-5 pl-5 pr-1 md:px-4">
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                        <div className="line"></div>
                        <div className="plane-price">
                            <p><span>$0</span> / month</p>
                        </div>
                        <div className="plane-action">
                            <Link to="/checkout">Choose</Link>

                        </div>
                    </div>
                </div>
                {/* end of first plane */}

                {/* second and recommended plane */}
                <div className="recommended-plane">
                    <div className="plane recommended">
                        <div className="plane-body flex flex-col justify-center items-center px-8 py-12">
                            <h5 className="plane-title">Premium Plan</h5>
                            <div className="line"></div>
                            <ul className="plane-points space-y-5 px-4">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                            <div className="line"></div>
                            <div className="plane-price">
                                <p><span>$0</span> / month</p>
                            </div>
                            <div className="plane-action">
                                <Link to="/checkout">Choose</Link>

                            </div>
                        </div>
                    </div>
                    <h6 className='hidden md:block'>Recommended</h6>
                </div>
                {/* end of second and recommended plane */}

                {/* third plane */}
                <div className="plane">
                    <div className="plane-body flex flex-col justify-center items-center p-6 md:px-8 md:py-12">
                        <h5 className="plane-title">Starter Plane</h5>
                        <div className="line"></div>
                        <ul className="plane-points space-y-5 pl-5 pr-1 md:px-4">
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                        <div className="line"></div>
                        <div className="plane-price">
                            <p><span>$0</span> / month</p>
                        </div>
                        <div className="plane-action">
                            <Link to="/checkout">Choose</Link>

                        </div>
                    </div>
                </div>
                {/* end of third plane */}

            </div>
        </section>
        // end ofplans section

    )
}

export default Plans
