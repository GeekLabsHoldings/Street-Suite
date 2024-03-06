import React from 'react'
import "./Plans.css"

const Plans = () => {
    return (

        // plans section
        <section className='plans'>
            <h3 className='section-title'>Choose your plan</h3>

            <div className='lg:container mx-auto px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-6 plans-container columns-8 flex items-end'>
                {/* first plane */}
                <div className="plane">
                    <div className="plane-body flex flex-col justify-center items-center px-8 py-12">
                        <h5 className="plane-title">Starter Plane</h5>
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
                            <button>Choose</button>
                        </div>
                    </div>
                </div>
                {/* end of first plane */}

                {/* second and recommended plane */}
                <div className="recommended-plane">
                    <div className="plane recommended">
                        <div className="plane-body flex flex-col justify-center items-center px-8 py-12">
                            <h5 className="plane-title">Starter Plane</h5>
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
                                <button>Choose</button>
                            </div>
                        </div>
                    </div>
                    <h6>Recommended</h6>
                </div>
                {/* end of second and recommended plane */}

                {/* third plane */}
                <div className="plane">
                    <div className="plane-body flex flex-col justify-center items-center px-8 py-12">
                        <h5 className="plane-title">Starter Plane</h5>
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
                            <button>Choose</button>
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
