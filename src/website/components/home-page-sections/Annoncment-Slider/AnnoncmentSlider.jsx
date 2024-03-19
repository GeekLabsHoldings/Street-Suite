import React from 'react'
import "./AnnoncmentSlider.css"
import Slider from "react-slick";

const AnnoncmentSlider = () => {


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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    // Announcment slider in top of page 
    <div className="AnnoncmentSlider">

      <Slider {...settings}>
        {/* slider item  */}
        <div>
          <h6>Announcment strip</h6>
        </div>
        <div>
          <h6>Announcment strip</h6>
        </div>
        <div>
          <h6>Announcment strip</h6>
        </div>
        <div>
          <h6>Announcment strip</h6>
        </div>
        <div>
          <h6>Announcment strip</h6>
        </div>
        <div>
          <h6>Announcment strip</h6>
        </div>
      </Slider>
    </div>
  );
}

export default AnnoncmentSlider
