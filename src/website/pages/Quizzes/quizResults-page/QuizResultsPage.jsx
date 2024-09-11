import React, { useContext, useEffect, useState } from "react";
import QuizCard from "../../../UI-components/quizCard/QuizCard";
import Slider from "react-slick";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { tokenContext } from "../../../context/appContext";

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

const QuizResultsPage = () => {

  const {setSeeMore} = useContext(tokenContext);

  const navigate = useNavigate();
  const [score, setScore] = useState(null);
  const [totalQuizScore, setTotalQuizScore] = useState(null);
  const [totalUserScore, setTotalUserScore] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(null);
  const [totalRightAnswers, setTotalRightAnswers] = useState(null);
  const { quizId } = useParams();
  const [quizCat,setQuizCat] = useState(null)
  const [quizTitle,setQuizTitle] = useState(null)
  useEffect(() => {
    if (!localStorage.getItem(`quiz-${quizId}`)) {
      console.log("No quiz found");
      navigate("/quizzes/");
      return;
    } else {
      console.log("Quiz found");
      const { score, totalRightAnswers, totalUserScore } = JSON.parse(
        localStorage.getItem(`quiz-${quizId}`)
      );
      setScore(score);
      setTotalRightAnswers(totalRightAnswers);
      setTotalUserScore(totalUserScore);
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}quizzes/${quizId}/questions/`)
      .then((res) => {
        setTotalQuestions(res.data.length);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem(`quiz-${quizId}`)) {
      const { totalQuizScore } = JSON.parse(
        localStorage.getItem(`quiz-${quizId}`)
      );
      if (totalQuestions !== null) {
        setTotalQuizScore(totalQuizScore * totalQuestions);
      }
    }
  }, [totalQuestions]);

  useEffect(() => {
    // This effect will run when score or totalRightAnswers is updated
    if (
      score !== null &&
      totalRightAnswers !== null &&
      totalQuestions !== null &&
      totalQuizScore !== null &&
      totalUserScore !== null
    ) {
      // localStorage.removeItem(`quiz-${quizId}`);
    }
  }, [
    score,
    totalRightAnswers,
    totalQuestions,
    totalQuizScore,
    totalUserScore,
    quizId,
  ]);
   useEffect(()=>{
    axios
      .get(`${process.env.REACT_APP_API_URL}quizzes/${quizId}/`)
      .then((res) => {
        console.log(res.data)
        setQuizCat(res.data.category.text)
        setQuizTitle(res.data.title)
      })
   },[])

  const [moreQuizzes, setMoreQuizzes] = useState([]);


   useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}quizzes/`)
      .then((res) => {
        console.log(res.data);

        console.log(res.data.filter((e, i) => e.text == quizCat));
        setMoreQuizzes(
          res.data.filter((e, i) => e.text == quizCat)[0].quizzes
        );
        console.log(res.data.filter((e, i) => e.text == quizCat)[0].quizzes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [quizCat]);

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

  return (
    // quiz results like duration , score and current answer

    <div className="quiz-wrapper">
      <div className="quiz-results-title flex items-center justify-between mb-2">
        <h4>
          Do you know the difference? <br />
          Day Trading, Swing Trading, Position Trading.{" "}
        </h4>
        <button
          className="try-again hidden lg:inline-block"
          onClick={() => {
            navigate(`/quizzes/quiz/${quizId}`);
          }}
        >
          try again
        </button>
      </div>

      <div className="quiz-view p-20 mb-16">
        <div className="quiz-score-sheet flex lg:hidden h-full gap-1 lg:gap-4 mb-[20px] lg:mb-10">
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Questions</p>
              <span>{score}/20</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Timer</p>
              <span>15:00</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>My Score</p>
              <span>69%</span>
            </div>
          </div>
          <button
            className="try-again"
            onClick={() => {
              navigate("/quezzes/quiz");
            }}
          >
            try again
          </button>
        </div>
        <div className="quiz-score-sheet-results flex">
          <div className="w-[54%] p-[16px] lg:p-12 flex flex-col items-center">
            <p>Correct Answers</p>
            <span>
              {totalRightAnswers}/{totalQuestions}
            </span>
          </div>
          <div className="line"></div>

          <div className="w-[54%] p-[16px] lg:p-12 flex flex-col items-center">
            <p>Score</p>
            <span>
              {score}/{totalQuizScore}
            </span>
          </div>
          <div className="line"></div>
          <div className="w-[44%] p-[16px] lg:p-12 flex flex-col items-center">
            <p>My Score</p>
            <span>{totalUserScore}</span>
          </div>
        </div>
      </div>

      <div className="quiz-view get-better-card p-20 flex flex-col lg:flex-row items-center gap-8 mb-[20px]">
        <h5>Get Better <br /> with ST Suite Trainings</h5>
        <QuizCard horizontal={true} title="Stock Market 101 - Advanced" />
      </div>

      {/* more quizzes in quiz page */}
      <div className="quizzes-cards space-y-6">
        <div className="title flex items-center justify-between">
          <h6>More Quizzes</h6>
          <Link to={"/quizzes"} onClick={()=>{setSeeMore(quizCat);

        }}>
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
          {moreQuizzes
            .filter((quizes) => {
              return quizes.title !== quizTitle;
            })
            ?.map((quiz) => {
              return (
                <div
                  style={{
                    width: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)",
                  }}
                  key={quiz?.id}
                >
                  <QuizCard
                    title={quiz?.title}
                    linkId={quiz?.id}
                    image={quiz?.image}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsPage;
