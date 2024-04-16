import React from 'react'
import "./ClientsFavFeature.css"
import clientReviewsUserImg from "../../../assets/user.png"
import clientReviewsImg from "../../../assets/clientFavFeaturesImg.svg"
// import clientReviewsMobileImg from "../../../assets/clientsFavFeatureMopile.png"

const ClientsFavFeature = () => {
  return (
    <section className='clientsFavFeature'>
      <h3 className='section-title'>Testimonials</h3>

      <div className="clientsFavFeatures-content flex">
        <div className="clientsFavFeatures-reviews w-full lg:w-7/12 px-[5%] md:px-[10%] lg:px-0">
          <div className="clientsFavFeatures-review">
            <img src={clientReviewsUserImg} alt="" />
            <p>Training section is a masterpiece! </p>
          </div>
          <div className="clientsFavFeatures-review">
            <img src={clientReviewsUserImg} alt="" />
            <p>alerts are always up-to-date!</p>
          </div>
          <div className="clientsFavFeatures-review">
            <img src={clientReviewsUserImg} alt="" />
            <p>Very good platform!</p>
          </div>
          <div className="clientsFavFeatures-review">
            <img src={clientReviewsUserImg} alt="" />
            <p>Can’t wait for the full release</p>
          </div>
          <div className="clientsFavFeatures-review">
            <img src={clientReviewsUserImg} alt="" />
            <p>Great source!</p>
          </div>
        </div>
        <div className="clientsFavFeature-img hidden lg:flex w-full md:w-5/12">
          <img src={clientReviewsImg} alt="" />
        </div>
      </div>


    </section>
  )
}

export default ClientsFavFeature