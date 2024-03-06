import React from 'react'
import "./GetStarted.css"

import getStartedImg from "../../assets/getStartedImg.png"

const GetStarted = () => {
    return (

        // get started section
        <section className='getStarted'>

            <div className="lg:container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-6 getStarted-container columns-8 items-center">

                {/* get started section content */}
                <div className="getStarted-content">
                    <h3>Get Started With Street Suite.</h3>
                    <p>Join over 31 users benefiting daily from Street Suite, reaching their trading goals and beyond.
                        Get Started For Free</p>
                    <button>Get Started For Free</button>
                    <p>*Cancel anytime!</p>
                </div>
                {/* end of get started section content */}

                {/* get started section img */}
                <div className="getStarted-img">
                    <img src={getStartedImg} alt="" />
                </div>
                {/* end of get started section img */}

            </div>
        </section>
        // end of get started section

    )
}

export default GetStarted
