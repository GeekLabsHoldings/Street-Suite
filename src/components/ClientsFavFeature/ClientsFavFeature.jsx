import React from 'react'
import "./ClientsFavFeature.css"

import clientReviewsImg from "../../assets/clientReviewsImg.png"

const ClientsFavFeature = () => {
  return (
    <section className='clientsFavFeature'>
      <h3 className='section-title'>Testimonials</h3>

      <img src={clientReviewsImg} alt="" />
    </section>
  )
}

export default ClientsFavFeature
