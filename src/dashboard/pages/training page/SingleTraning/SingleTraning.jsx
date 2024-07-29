import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";

import SearchBar from "../../../components/searchBar/SearchBar";
import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
import searchIcon from "../../../assets/search.svg";
import styles from "./SingleTraning.module.css";

import { courseContext } from "../context/coursesContext";
import { NavLink, Outlet, useParams } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import NotificationWindow from "../../../UI-components/NotificationWindow/NotificationWindow";
import axios from "axios";
import getCurrent from "../utils/getCurrent";

const SingleTraning = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [courseModules, setCourseModules] = useState([]);
  const { currentCourse, setCurrentCourse } = useContext(courseContext);
  const { currentModule, setCurrentModule } = useContext(courseContext);

  const { courseId } = useParams();
  // function that open & close collaps
  const openCollaps = (e) => {
    console.log($(e.target).parentsUntil(".training_lison_collapse"));
    $(e.target).parents(".training_lison_collapse").toggleClass("open");

    // slide up all collaps are open
    // $(".training_lison_collapse_body").not($(e.target).parents(".training_lison_collapse").children(".training_lison_collapse_body")).slideUp(300);

    // $(".training_lison_collapse").not($(e.target).parents(".training_lison_collapse")).removeClass("current");

    // toggle slide collaps by click
    $(e.target)
      .parents(".training_lison_collapse")
      .children(".training_lison_collapse_body")
      .slideToggle(300);

    // $(e.target).parents(".training_lison_collapse").toggleClass("current");
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}courses/modules/${courseId}`, {
        headers: {
          Authorization: `Token 3a6dc74f572324f8445310e28c8fb4e2f3ee5cce`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setCourseModules(res.data);
      })
      .catch((err) => console.log(err));

    if (currentCourse.length < 1) {
      axios
        .get(`${process.env.REACT_APP_API_URL}courses/${courseId}`)
        .then((res) => {
          setCurrentCourse(res.data[0]);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (courseModules.length > 0) {
      setCurrentModule(getCurrent(courseModules));
    }
  }, [courseModules]);

  return (
    <div>
      {/* nav bar in single training page */}
      <SearchBar>
        {/* title of page */}
        <h2>Training</h2>
        <div
          className={
            SearchBarStyles.notification_searchInput + " hidden lg:flex"
          }
        >
          {/* nav bar  */}
          <div className={styles.training_navBar}>
            <ul>
              <li>
                <NavLink
                  to="/dashboard/training/suite-academy"
                  className={styles.active}
                >
                  ST Suite Academy
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/training/my-courses">
                  My Courses
                </NavLink>
              </li>
            </ul>
          </div>

          {/* search input */}
          <div
            className={SearchBarStyles.searchInput + " w-full hidden lg:block"}
          >
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search By.."
            />
            <img src={searchIcon} alt="searchIcon" />
          </div>
        </div>

        {/* notification button in nav bar */}
        <NotificationWindow />

        {/* bars in mobile screen */}
        <div
          className={` ${SearchBarStyles.bars} flex lg:hidden ${
            isNavOpen ? SearchBarStyles.open : ""
          }`}
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <div className={SearchBarStyles.bar}></div>
        </div>
      </SearchBar>

      <div className="flex gap-[50px] items-start">
        <div className="flex flex-col w-full xl:w-[77%] items-center mb-12 lg:mt-8 lg:gap-[30px]">
          {/* title top of progress bar */}
          <div className={styles.training_title}>
            <h5>{currentCourse.title}</h5>

            <div className={styles.Bullish}>
              <span>Bullish</span>
              <p>
                70% Likelihood of <br /> follow through
              </p>
            </div>
          </div>

          {/* progress bar in Transfer & Pay page */}
          <ProgressBar
            completed={90}
            bgColor="#53ACFF"
            height="8px"
            baseBgColor="rgba(20, 20, 20, 1)"
            labelColor="#fff"
            transitionDuration="1"
            animateOnRender
            maxCompleted={100}
            customLabel="90%  Completed "
            className={styles.ProgressBar + " w-full lg:mb-[50px]"}
          />

          {/* sub pages like lesson page and assessment page will appear here */}
          <Outlet />
        </div>

        {/* table of content section */}
        <div className={styles.table_of_content + " w-[20%] hidden xl:block"}>
          {/* title table of content section */}
          <h6>Table of Content</h6>

          {/* list of content section */}
          <ul>
            {currentModule?.section_set?.map((section) => (
              <li
                key={section.id}
                className={
                  getCurrent(currentModule.section_set)?.id === section.id
                    ? styles.current
                    : section.completed === 1
                    ? styles.completed
                    : ""
                }
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTraning;
