import React from 'react'

import "./CheckOutPage.css"
import { Link, useNavigate } from 'react-router-dom'

import popularBadge from "../../../assets/popular-badge.png"


const CheckOutPage = () => {

    const navigate = useNavigate()


    return (
        <div className='checkout-wrapper'>


            <div className='lg:container mx-auto px-[16px] checkout-container py-20 flex flex-col-reverse lg:flex-row items-center justify-center '>

                <div className="payment-details w-full lg:w-2/5">



                    <form action="" className='payment-form space-y-6'>
                        <h6>Payment Details</h6>
                        <div className="form-input">
                            <label htmlFor="">First Name*</label>
                            <input type="text" name="" id="" placeholder='Enter your name' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Last Name*</label>
                            <input type="text" name="" id="" placeholder='Enter your name' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Email*</label>
                            <input type="email" name="" id="" placeholder='Enter your email' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Password*</label>
                            <input type="password" name="" id="" placeholder='*******' />
                        </div>


                        <h6>Card Details</h6>
                        <div className="card-details w-fit">
                            <div className="card-body space-y-6">
                                <div className="form-input">
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" name="" id="" />
                                </div>

                                <div className="form-input">
                                    <label htmlFor="">Card Holder Name</label>
                                    <input type="text" name="" id="" />
                                </div>

                                <div className="flex gap-6 w-fit">
                                    <div className="form-input w-1/3">
                                        <label htmlFor="">Expiry Date</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className="form-input w-1/3">
                                        <label htmlFor="">CVV</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button onClick={() => navigate("/complete-checkout")}>Pay $15 Now</button>
                    </form>

                </div>



                <div className="chosen-plan w-full lg:w-2/5 flex justify-end">

                    <div className="recommended-plane">
                        <img src={popularBadge} alt="" />
                        <div className="plane plane-pricing border-animate">

                            <div className="plane-body flex flex-col justify-center items-center px-[16px] py-[32px] lg:px-8 lg:py-16">
                                <h5 className="plane-title">premium Plan</h5>
                                <div className="line"></div>
                                <ul className="plane-points space-y-5 px-4">
                                    <li className='available '>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='not-available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='not-available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                    <li className='not-available'>
                                        <svg className='true' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z" fill="#53ACFF" />
                                        </svg>
                                        <svg className="false" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z" fill="white" />
                                        </svg>

                                        Lorem ipsum dolor sit amet.</li>

                                </ul>
                                <div className="line"></div>
                                <div className="plane-price">
                                    <p><span>$0</span> / month</p>
                                </div>
                                <div className="plane-action">
                                    <p>Having second thoughts?</p>
                                    <Link to="/checkout">Check other plans</Link>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CheckOutPage
