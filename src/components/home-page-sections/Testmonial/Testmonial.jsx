import React from 'react'
import "./Testmonial.css"
import avatar1 from "../../../assets/avatar.png"
import avatar2 from "../../../assets/avatar2.png"

const Testmonial = () => {
    return (

        // What Our Clients Say About Us section
        <section className='testmonial'>
            <h3 className='section-title'>What Our Clients Say About Us</h3>
            <p className='text-center'>Our client’s <span>word of mouth</span> is our best marketing strategy.</p>

            <div className='lg:container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6 testmonial-container columns-8'>
                {/* card of client  */}
                <div className="card bg-base-100 shadow-xl w-full">
                    <div className="card-body p-12">
                        <div className="avatar flex flex-row gap-4 mb-6 items-center">
                            <img src={avatar1} alt="" />
                            <div className="user-info flex flex-col">
                                <h6>Alex Horren</h6>
                                <p>@alexhorennnn</p>
                            </div>
                        </div>
                        <div className="opinion mb-8">
                            <p className='mb-6'>Great Experience! Trading made easy!</p>
                            <a href="">8 Recommendations</a>
                        </div>
                        <div className="date flex justify-end">
                            <span>10:30 PM | feb 2nd, 2023</span>
                        </div>
                    </div>
                </div>
                {/* end card of client  */}

                {/* card of client  */}
                <div className="card bg-base-100 shadow-xl w-full">
                    <div className="card-body p-12">
                        <div className="avatar flex flex-row gap-4 mb-6 items-center">
                            <img src={avatar2} alt="" />
                            <div className="user-info flex flex-col">
                                <h6>Alex Horren</h6>
                                <p>@alexhorennnn</p>
                            </div>
                        </div>
                        <div className="opinion mb-8">
                            <p className='mb-6'>Great Experience! Trading made easy!</p>
                            <a href="">8 Recommendations</a>
                        </div>
                        <div className="date flex justify-end">
                            <span>10:30 PM | feb 2nd, 2023</span>
                        </div>
                    </div>
                </div>
                {/* end card of client  */}

                {/* card of client  */}
                <div className="card bg-base-100 shadow-xl w-full">
                    <div className="card-body p-12">
                        <div className="avatar flex flex-row gap-4 mb-6 items-center">
                            <img src={avatar2} alt="" />
                            <div className="user-info flex flex-col">
                                <h6>Alex Horren</h6>
                                <p>@alexhorennnn</p>
                            </div>
                        </div>
                        <div className="opinion mb-8">
                            <p className='mb-6'>Great Experience! Trading made easy!</p>
                            <a href="">8 Recommendations</a>
                        </div>
                        <div className="date flex justify-end">
                            <span>10:30 PM | feb 2nd, 2023</span>
                        </div>
                    </div>
                </div>
                {/* end card of client  */}

                {/* card of client  */}
                <div className="card bg-base-100 shadow-xl w-full">
                    <div className="card-body p-12">
                        <div className="avatar flex flex-row gap-4 mb-6 items-center">
                            <img src={avatar1} alt="" />
                            <div className="user-info flex flex-col">
                                <h6>Alex Horren</h6>
                                <p>@alexhorennnn</p>
                            </div>
                        </div>
                        <div className="opinion mb-8">
                            <p className='mb-6'>Great Experience! Trading made easy!</p>
                            <a href="">8 Recommendations</a>
                        </div>
                        <div className="date flex justify-end">
                            <span>10:30 PM | feb 2nd, 2023</span>
                        </div>
                    </div>
                </div>
                {/* end card of client  */}
            </div>
        </section>
        // end section
    )
}

export default Testmonial
