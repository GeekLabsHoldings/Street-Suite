import React, { useContext, useEffect, useRef, useState } from "react";
import "./QuizzesPage.css";
import Hero from "../../../components/home-page-sections/Hero/Hero";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { tokenContext } from "../../../context/appContext";

const QuizzesPage = () => {
  const { seeMore, setSeeMore } = useContext(tokenContext);

  console.log(seeMore);
  const ad = "el";
  const [categoryList, setCategoryList] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [filter, setFilter] = useState("latest");
  const [pageLoading, setPageLoading] = useState(true);
  const [searchedQuizzes, setSearchedQuizzes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(false);
  const location = useLocation().pathname

  async function getAllCategories(data) {
    // try {
    //   // window.scrollTo(0, 0);
    //   //   setPageLoading(true);
    //   const { data } = await axios.get(
    //     `${process.env.REACT_APP_API_URL}quizzes/categories/`
    //   );
    //   setCategoryList(data);
    //   console.log(data);
    // } catch (e) {
    //   console.error(e);
    // } finally {
    //   //   setPageLoading(false);
    // }
    // const categories = data.map((quiz) => quiz.quzzies
  }

  async function handleSearchChange(val) {
    const newData = quizData;
    const shownData = newData.map((e, i) => {
      return e.quizzes;
    });
    const searchedData = Array.from(
      new Map(
        shownData
          .map((e, i) =>
            e.filter((x, z) =>
              x.title.toLowerCase().includes(val.toLowerCase())
            )
          )
          .flat()
          .map((item) => [item.id, item])
      ).values()
    );
    console.log(searchedData);
    setSearchedQuizzes(searchedData);
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}quizzes/`)
      .then((res) => {
        console.log(res.data);

        setQuizData(res.data);
        setCategoryList(res.data.map((quiz) => quiz.text));
        setPageLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = navRef.current.getBoundingClientRect();
      console.log(rect.top); // Log the element's position

      // Check if the top of the element is less than or equal to 0
      if (rect.top < 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use another useEffect to log `isSticky` when it changes
  useEffect(() => {
    console.log("isSticky updated:", isSticky);
  }, [isSticky]);

  return (
    <>
      <Helmet>
        <title>Quizzes | Street Suite</title>
        <meta
          name="description"
          content="Test your stock trading knowledge and abilities with Street Suite’s quizzes."
        />
      </Helmet>

      <div className="quizzes-wrapper">
        <Hero>
          <h1>
            Welcome to <br /> <span> STREET SUITE’s </span> Quizzes
          </h1>
          <p className="sm:container">
            Dive into our interactive quizzes designed to unravel your trading
            persona and unveil insights into your trading prowess.
          </p>
        </Hero>

        {location == "/quizzes" ? <div ref={navRef} className={`${isSticky ? "bg-[#2a2a2a]" : "bg-transparent"} sticky top-0 z-10 quizzes-filter py-[--sy-29px]`} style={{
          boxShadow: "0px 28px 30.7px 0px #00000040"
        }}>
          {/* search input to search for quizzes */}
          <div className="search-input w-[80%]  mx-auto">
            <div className="input-box relative">
              <input
                type="text"
                className=" placeholder:text-white !px-[--18px] !py-[--sy-23px]"
                placeholder="Search by..."
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    handleSearchChange(e.target.value);
                  } else {
                    setSearchedQuizzes([]);
                  }
                }}
              />
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
              {searchedQuizzes.length > 0 ? (
                <div className="absolute !top-[120%] z-[99] w-full bg-[#202020] rounded-[4px] overflow-hidden">
                  {searchedQuizzes?.map((e, i) => {
                    return (
                      <Link
                        to={`/quizzes/quiz/${e.id}`}
                        className="block border-t-0 border-r-0 border-l-0 border-b-[1px] px-2 py-2 border-solid border-[#131313] text-white transition-colors duration-200 hover:!text-[#53acff]"
                      >
                        {e.title}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <button>Search</button>
          </div>
          {/* filter to show more specific quizzes */}
          <div className="check-Filter w-[80%]  mx-auto">
            {categoryList.map((ele, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="radio"
                  id={ele}
                  name="check-Filter"
                  className="peer hidden" // Add peer class here and hide the input
                  onClick={(e) => {
                    setFilter(e.target.nextSibling.textContent.trim());
                    setSelectedFilter(true);
                  }}
                />
                <label
                  htmlFor={ele}
                  className="font-normal cursor-pointer peer-checked:font-bold peer-checked:bg-[#53ACFF] text-[23px] hover:bg-[#1F4262]"
                  style={{
                    boxShadow:
                      "3.4px 3.4px 4.25px 0px #00000040 inset, -3.4px -3.4px 4.25px 0px #00000040 inset",
                  }}
                >
                  {ele}
                </label>
              </div>
            ))}
          </div>
        </div> : null}

        <div className="quizzes-container mx-auto px-[16px] items-center  py-[10px] lg:py-16 relative">
          <Outlet context={{quizData,selectedFilter,searchedQuizzes,pageLoading,filter,categoryList,setFilter,setSelectedFilter}} />
        </div>
      </div>
    </>
  );
};

export default QuizzesPage;
