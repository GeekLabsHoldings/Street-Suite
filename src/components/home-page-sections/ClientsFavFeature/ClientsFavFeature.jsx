import React from 'react'
import "./ClientsFavFeature.css"

import clientReviewsImg from "../../../assets/clientReviewsImg.png"
import clientReviewsMobileImg from "../../../assets/clientsFavFeatureMopile.png"

const ClientsFavFeature = () => {
  return (
    <section className='clientsFavFeature'>
      <h3 className='section-title'>Testimonials</h3>

      <img src={clientReviewsImg} alt="" className='hidden md:d-block' />
      <img src={clientReviewsMobileImg} alt="" className='d-block md:hidden' />
    </section>
  )
}

export default ClientsFavFeature
