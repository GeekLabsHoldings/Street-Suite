import React, { useContext, useEffect, useState } from "react";
import QuizCard, {
  SkeletonQuizCard,
} from "../../../UI-components/quizCard/QuizCard";
import Slider from "react-slick";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";
import { tokenContext } from "../../../context/appContext";

const CustomArrow = (props) => {
  const { className, style, onClick } = props;
  const [arrowHovered, setArrowHovered] = useState(false);

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
          fill={`${arrowHovered ? "#53ACFF" : "#53ACFF50"}`}
          fill-opacity="1"
          onMouseOver={() => setArrowHovered(true)}
          onMouseLeave={() => setArrowHovered(false)}
          className=" transition-all duration-300"
        />
      </svg>
    </div>
  );
};

const QuizzesFiltersPage = () => {
  const { seeMore, setSeeMore } = useContext(tokenContext);
  const contextData = useOutletContext();
  console.log(contextData);
  // console.log(seeMore);

  // const [categoryList, setCategoryList] = useState([]);
  // const [quizData, setQuizData] = useState([]);
  // const [filter, setFilter] = useState("latest");
  // const [pageLoading, setPageLoading] = useState(true);
  // const [searchedQuizzes, setSearchedQuizzes] = useState([]);
  // const [selectedFilter, setSelectedFilter] = useState(false);

  // async function getAllCategories(data) {
  //   // try {
  //   //   // window.scrollTo(0, 0);
  //   //   //   setPageLoading(true);
  //   //   const { data } = await axios.get(
  //   //     `${process.env.REACT_APP_API_URL}quizzes/categories/`
  //   //   );
  //   //   setCategoryList(data);
  //   //   console.log(data);
  //   // } catch (e) {
  //   //   console.error(e);
  //   // } finally {
  //   //   //   setPageLoading(false);
  //   // }
  //   // const categories = data.map((quiz) => quiz.quzzies
  // }

  // async function handleSearchChange(val) {
  //   const newData = quizData;
  //   const shownData = newData.map((e, i) => {
  //     return e.quizzes;
  //   });
  //   const searchedData = Array.from(
  //     new Map(
  //       shownData
  //         .map((e, i) =>
  //           e.filter((x, z) =>
  //             x.title.toLowerCase().includes(val.toLowerCase())
  //           )
  //         )
  //         .flat()
  //         .map((item) => [item.id, item])
  //     ).values()
  //   );
  //   console.log(searchedData);
  //   setSearchedQuizzes(searchedData);
  // }

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}quizzes/`)
  //     .then((res) => {
  //       console.log(res.data);

  //       setQuizData(res.data);
  //       setCategoryList(res.data.map((quiz) => quiz.text));
  //       setPageLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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
    <>
      {/* all quizzes */}
      {seeMore && !contextData?.selectedFilter ? (
        <div className=" grid grid-cols-4 gap-4">
          {contextData?.quizData
            .filter((quizes) => {
              return quizes.text === seeMore;
            })[0]
            ?.quizzes?.map((quiz) => {
              return (
                <div
                  className=" col-span-1"
                  style={{
                    minWidth: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)",
                  }}
                  key={quiz?.id}
                >
                  <QuizCard
                    title={quiz?.title}
                    linkId={quiz?.id}
                    image={quiz?.image}
                    label={quiz?.label}
                  />
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          <div className="quizzes-cards space-y-6">
            <div className="title flex items-center justify-between">
              <h6>{contextData?.filter}</h6>
            </div>

            <div className="slider-container">
              <Slider {...settings}>
                {contextData?.pageLoading
                  ? Array(10)
                      .fill(0)
                      .map((_, idx) => <SkeletonQuizCard key={idx} />)
                  : contextData?.quizData
                      .filter((quizes) => {
                        console.log(contextData?.quizData);

                        return quizes.text === contextData?.filter;
                      })[0]
                      ?.quizzes?.map((quiz) => {
                        console.log(quiz?.label);

                        return (
                          <div
                            style={{
                              minWidth:
                                "clamp(220px, calc( 17vw + 0.5rem ) ,600px)",
                            }}
                            key={quiz?.id}
                          >
                            <QuizCard
                              title={quiz?.title}
                              linkId={quiz?.id}
                              label={quiz?.label}
                              image={quiz?.image}
                            />
                          </div>
                        );
                      })}
              </Slider>
            </div>
          </div>

          {/* all quizzes */}
          {!contextData?.selectedFilter
            ? contextData?.quizData
                .filter((e, i) => e.text !== "latest")
                .map((f, idx) =>
                  f?.quizzes?.length > 0 ? (
                    <div className="quizzes-cards space-y-6 mb-6" key={idx}>
                      <div className="title flex items-center justify-between">
                        <h6>{f.text}</h6>
                        <Link
                          onClick={() => {
                            contextData?.setFilter(f.text);
                            contextData?.setSelectedFilter(true);
                          }}
                        >
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
                          {contextData?.pageLoading
                            ? Array(10)
                                .fill(0)
                                .map((_, idx) => <SkeletonQuizCard key={idx} />)
                            : contextData?.quizData
                                .filter((quizes) => quizes.text === f.text)[0]
                                ?.quizzes?.map((quiz) => (
                                  <div
                                  style={{
                                    minWidth: "clamp(220px, calc( 17vw + 0.5rem ) ,600px)",
                                  }}
                                    key={quiz?.id}
                                  >
                                    <QuizCard
                                      title={quiz?.title}
                                      linkId={quiz?.id}
                                      label={quiz?.label}
                                      image={quiz?.image}
                                    />
                                  </div>
                                ))}
                        </Slider>
                      </div>
                    </div>
                  ) : null
                )
            : null}
        </div>
      )}
    </>
  );
};

export default QuizzesFiltersPage;
