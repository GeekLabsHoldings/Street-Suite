import React from 'react'
import "./CompaniesCarousel.css"
import Slider from "react-slick";
import img1 from "../../assets/companyLogo1.png"
import img2 from "../../assets/companyLogo2.png"

const CompaniesCarousel = () => {


  // settings that handle features of carousel by slack carousel
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
  };


  return (

    <div className="companiesCarousel">

      {/* companies logo carousel  */}
      <Slider {...settings}>

        {/* company logo */}
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default CompaniesCarousel
