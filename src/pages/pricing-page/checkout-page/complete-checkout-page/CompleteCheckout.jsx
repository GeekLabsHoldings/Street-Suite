import React from 'react'
import "./CompleteCheckout.css"

import thankyouImg from "../../../../assets/thankyou-img.png"

const CompleteCheckout = () => {
  return (
    <div className='CompleteCheckout-wrapper'>
        <div className='lg:container mx-auto px-4 CompleteCheckout-container py-28 flex items-center justify-center gap-12'>
            <div className="CompleteCheckout-message w-1/2">
                <h4>Thank you for your Purchase!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            
                <div className="receipt-card border-animate">
                  <div className="card-body">
                    <h6>Your Receipt</h6>

                    <div className="receipt-price">
                      <h5>premium Plan</h5>

                      <p><span>$15</span> / month</p>
                    </div>

                    <p>*** Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </div>
            </div>
            <div className="CompleteCheckout-img w-1/2">
                <img src={thankyouImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CompleteCheckout
