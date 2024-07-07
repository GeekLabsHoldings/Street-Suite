import React, { useEffect, useState } from "react";
import QuizCard from "../../../UI-components/quizCard/QuizCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <svg
        width="31"
        height="41"
        viewBox="0 0 31 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.72503e-06 2.05123L2.11204e-06 38.9523C0.00118656 39.3259 0.10525 39.6921 0.300989 40.0115C0.496727 40.3309 0.77673 40.5914 1.11086 40.7649C1.44499 40.9385 1.82059 41.0185 2.19724 40.9964C2.57389 40.9743 2.93731 40.8509 3.2484 40.6395L30.1631 22.189C31.279 21.4243 31.279 19.5833 30.1631 18.8166L3.2484 0.366085C2.93796 0.15252 2.57435 0.0272807 2.19708 0.00397365C1.81981 -0.0193334 1.4433 0.0601835 1.10846 0.233885C0.773622 0.407587 0.493259 0.668829 0.297838 0.989229C0.102417 1.30963 -0.000591351 1.67693 3.72503e-06 2.05123Z"
          fill="#53ACFF"
          fill-opacity="1"
        />
      </svg>
    </div>
  );
};

const QuizzesFiltersPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [quizData, setQuizData] = useState([]);

  async function getAllCategories() {
    try {
      // window.scrollTo(0, 0);
      //   setPageLoading(true);
      const { data } = await axios.get(
        `https://abdulrahman.onrender.com/quizzes/categories/`
      );
      setCategoryList(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      //   setPageLoading(false);
    }
  }

  useEffect(() => {
    axios
      .get("https://abdulrahman.onrender.com/quizzes/")
      .then((res) => {
        setQuizData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    centerPadding: "50px",
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="quizzes-filter">
        {/* search input to search for quizzes */}
        <div className="search-input">
          <div className="input-box">
            <input type="text" placeholder="Search by..." />
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.187 17.1826C15.8253 15.5195 17.5212 10.9988 15.975 7.08547C14.4288 3.1721 10.2259 1.34793 6.58765 3.01107C2.94939 4.67422 1.25346 9.19488 2.79968 13.1082C4.34591 17.0216 8.54876 18.8458 12.187 17.1826Z"
                stroke="white"
                stroke-width="2.3301"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.4492 15.541L20.0007 21.5131"
                stroke="white"
                stroke-width="2.3301"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button>Search</button>
        </div>

        {/* filter to show more specific quizzes */}
        <div className="check-Filter">
          <label htmlFor="Latest">
            {" "}
            Latest
            <input type="radio" id="Latest" name="check-Filter" />
          </label>
          {categoryList.map((e) => (
            <label htmlFor={e.title} key={e.id}>
              {e.title}
              <input type="radio" id={e.title} name="check-Filter" />
            </label>
          ))}
        </div>
      </div>

      {/* all quizzes */}
      <div className="quizzes-cards space-y-6">
        <div className="title flex items-center justify-between">
          <h6>Latest</h6>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {quizData.map((quiz) => (
              <div
                style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
              >
                <QuizCard />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* all quizzes */}
      <div className="quizzes-cards space-y-6 mb-6">
        <div className="title flex items-center justify-between my-8">
          <h6>Market Analysis</h6>
          <Link to="">
            See More
            <svg
              width="10"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className="slider-container d-none d-md-block">
          <Slider {...settings}>
            <div
              style={{ width: "clamp(420px, calc( 30vw + 0.5rem ) ,1200px)" }}
            >
              <QuizCard
                horizontal={true}
                title="Test Your Knowledge Bundle. "
              />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
          </Slider>
        </div>
        <div className="slider-container d-inline d-md-none">
          <QuizCard horizontal={true} title="Test Your Knowledge Bundle. " />

          <Slider {...settings}>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
          </Slider>
        </div>
      </div>

      <div className="quizzes-cards space-y-6 mb-6">
        <div className="title flex items-center justify-between">
          <h6>Market Analysis</h6>
          <Link>
            See More{" "}
            <svg
              width="10"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
            <div
              style={{ width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)" }}
            >
              <QuizCard />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default QuizzesFiltersPage;
