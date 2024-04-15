import Slider from "react-slick";

const NotFoundPage = () => {
  const settings = {
    // focusOnSelect: true,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
      
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div>
      comming soon
    </div>
  );
};

export default NotFoundPage;
