import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar/SearchBar";
import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
import searchIcon from "../../../assets/search.svg";
import styles from "./SuiteAcademy.module.css";

import { Link, NavLink } from "react-router-dom";

import advancedBadge from "../../../assets/advanced padge.png";
import NotificationWindow from "../../../UI-components/NotificationWindow/NotificationWindow";
import axios from "axios";
import { courseContext } from "../context/coursesContext";
const SuiteAcademy = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [mostLikedCourses, setMostLikedCourses] = useState([]);
  const [mostCompletedCourses, setMostCompletedCourses] = useState([]);
  const { currentCourse, setCurrentCourse } = useContext(courseContext);

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}courses/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          setCourses(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}courses/?order_by=most_liked`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("userToken")}`,
          },
        })
        .then((res) => {
          setMostLikedCourses(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}courses/?order_by=most_completed`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("userToken")}`,
            },
          }
        )
        .then((res) => {
          setMostCompletedCourses(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // ST Suite academy page
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8">
      <div className="w-full lg:w-[77%]">
        {/* nav bar */}
        <SearchBar>
          <h2>Training</h2>
          <div
            className={`${SearchBarStyles.notification_searchInput} ${
              isNavOpen ? " " : "hidden"
            } lg:flex`}
          >
            <div className={styles.training_navBar}>
              <ul>
                <li>
                  <NavLink to="">ST Suite Academy</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/training/my-courses">
                    My Courses
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <NotificationWindow />
          <div
            className={` ${SearchBarStyles.bars} flex md:hidden ${
              isNavOpen ? SearchBarStyles.open : ""
            }`}
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <div className={SearchBarStyles.bar}></div>
          </div>
        </SearchBar>

        {/* search input */}
        <SearchBar>
          <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row w-full">
            <h5
              className={styles.supTitle + " text-nowrap text-xl lg:text-3xl"}
            >
              ST Suite Academy
            </h5>

            <div className="w-full flex items-center justify-center gap-4">
              <div className={SearchBarStyles.searchInput + " w-full"}>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search By.."
                />
                <img src={searchIcon} alt="searchIcon" />
              </div>

              <button className={SearchBarStyles.searchBtn + " hidden lg:flex"}>
                Search
              </button>
            </div>
          </div>
        </SearchBar>

        <div
          className={
            styles.trainings_most_liked +
            " flex flex-col lg:flex-row gap-[50px] pt-[20px]"
          }
        >
          <div className={styles.trainings + " w-full lg:w-2/3 space-y-4"}>
            {/* training card in St suite academy page that redirect to single training page*/}
            {Array.isArray(courses) && courses.length ? (
              courses?.map((course) => (
                <Link
                  to={`/dashboard/training/single-training/${course.id}`}
                  onClick={() => {
                    setCurrentCourse(course);
                  }}
                >
                  <div className={styles.border_animate}>
                    <div className={styles.training_card + " flex gap-[16px]"}>
                      <img
                        src={advancedBadge}
                        alt=""
                        className={styles.advanced_badge}
                      />
                      <div className={styles.training_card_img + " w-1/4"}>
                        <img src={course.image} alt="" className="w-full" />
                      </div>
                      <div
                        className={
                          styles.training_card_info +
                          " w-3/4 space-y-4 lg:space-y-5"
                        }
                      >
                        <h4>{course.title}</h4>
                        <div className="my-[16px] hidden lg:flex items-center gap-[50px]">
                          <span>{course.module_numbers} Modules</span>
                          <span>{course.duration} Week Completion </span>
                        </div>
                        <ul>
                          <li>
                            <svg
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.4444 4.62293C12.3883 4.61492 12.3323 4.61492 12.2762 4.62293C11.0343 4.58287 10.0488 3.56535 10.0488 2.31547C10.0488 1.04156 11.0824 0 12.3643 0C13.6382 0 14.6798 1.03355 14.6798 2.31547C14.6718 3.56535 13.6863 4.58287 12.4444 4.62293Z"
                                fill="#53ACFF"
                              />
                              <path
                                d="M15.0563 10.1757C14.1589 10.7766 12.901 11.001 11.7393 10.8487C12.0437 10.1917 12.204 9.46266 12.212 8.6935C12.212 7.8923 12.0357 7.13116 11.6992 6.46616C12.885 6.30592 14.1429 6.53026 15.0482 7.13116C16.3141 7.96441 16.3141 9.33446 15.0563 10.1757Z"
                                fill="#53ACFF"
                              />
                              <path
                                d="M3.55937 4.62293C3.61545 4.61492 3.67154 4.61492 3.72762 4.62293C4.96949 4.58287 5.95496 3.56535 5.95496 2.31547C5.95496 1.03355 4.92141 0 3.63949 0C2.36558 0 1.33203 1.03355 1.33203 2.31547C1.33203 3.56535 2.31751 4.58287 3.55937 4.62293Z"
                                fill="#53ACFF"
                              />
                              <path
                                d="M3.64947 8.69366C3.64947 9.47082 3.81772 10.2079 4.12218 10.8729C2.99249 10.9931 1.81472 10.7527 0.949424 10.1839C-0.316475 9.34263 -0.316475 7.97258 0.949424 7.13132C1.80671 6.55445 3.01652 6.32209 4.15423 6.45029C3.82574 7.1233 3.64947 7.88444 3.64947 8.69366Z"
                                fill="#53ACFF"
                              />
                              <path
                                d="M8.11031 11.1127C8.04621 11.1046 7.9741 11.1046 7.90199 11.1127C6.42778 11.0646 5.25 9.85477 5.25 8.36453C5.25801 6.84225 6.48387 5.6084 8.01416 5.6084C9.53644 5.6084 10.7703 6.84225 10.7703 8.36453C10.7623 9.85477 9.59253 11.0646 8.11031 11.1127Z"
                                fill="#53ACFF"
                              />
                              <path
                                d="M5.50697 12.7721C4.29716 13.5813 4.29716 14.9113 5.50697 15.7125C6.88505 16.6339 9.14444 16.6339 10.5225 15.7125C11.7323 14.9033 11.7323 13.5733 10.5225 12.7721C9.15245 11.8507 6.89306 11.8507 5.50697 12.7721Z"
                                fill="#53ACFF"
                              />
                            </svg>
                            {course.subscriber_number}
                          </li>
                          <li>
                            <svg
                              viewBox="0 0 15 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.5804 1.46831C14.3084 1.12924 13.9214 0.934858 13.5185 0.934858H12.1413C12.0722 -0.142691 11.4071 0.00708708 11.1481 0.00708708C10.8748 0.00708708 7.50002 0.00708708 7.50002 0.00708708C7.50002 0.00708708 4.12528 0.00708708 3.85194 0.00708708C3.5929 0.00708708 2.92772 -0.142658 2.85866 0.934858H1.48142C1.07864 0.934858 0.691603 1.12931 0.419524 1.46831C0.0897582 1.87932 -0.0525367 2.47247 0.0173949 3.14133C0.0303441 3.43847 0.16675 4.96477 1.60206 6.05037C2.33149 6.60207 3.03257 6.88335 3.67036 7.02649C3.81014 7.05972 3.95155 7.08957 4.09648 7.11287C4.09848 7.11532 4.10044 7.11784 4.10249 7.12025C7.08664 10.5751 6.72221 8.57645 6.72221 11.7433C6.72221 12.9711 5.17619 12.5736 5.17619 13.516C5.17619 14.4583 3.97124 13.6828 4.08277 14.8008C4.15109 15.4862 5.99639 16 7.50008 16C9.00365 16 10.8491 15.4862 10.9174 14.8008C11.0289 13.6828 9.82384 14.4583 9.82384 13.516C9.82384 12.5736 8.27791 12.9711 8.27791 11.7433C8.27791 8.57642 7.91345 10.5751 10.8976 7.12025C10.9017 7.11545 10.9055 7.11036 10.9096 7.10552C11.6528 6.99964 12.5051 6.72587 13.3981 6.05041C14.8333 4.9648 14.9697 3.4385 14.9826 3.14136C15.0525 2.47247 14.9102 1.87926 14.5804 1.46831ZM13.8051 3.00951L13.7997 3.04148L13.8004 3.08509C13.7976 3.16969 13.7417 4.21047 12.7275 4.97753C12.4502 5.18736 12.1818 5.34639 11.9209 5.46989C11.8618 5.49619 11.803 5.52253 11.7426 5.54544C12.0989 4.44153 12.1568 3.20682 12.1578 2.2368H13.5185C13.5641 2.2368 13.6315 2.25298 13.6933 2.32988C13.7985 2.46106 13.8393 2.70873 13.8051 3.00951ZM6.66544 6.32859C6.55396 6.48327 6.38899 6.56385 6.22256 6.56385C6.09957 6.56385 5.97576 6.51992 5.87196 6.42932C4.45455 5.19258 4.33581 3.49484 4.33581 2.00064C4.33581 1.65751 4.58873 1.37932 4.90062 1.37932C5.21252 1.37932 5.46538 1.65751 5.46538 2.00064C5.46538 3.31167 5.55019 4.56243 6.57385 5.45565C6.81825 5.66892 6.85924 6.05975 6.66544 6.32859ZM2.27243 4.97753C1.25923 4.21118 1.20239 3.17166 1.19949 3.08534L1.20014 3.05569L1.19486 3.00947C1.16065 2.70876 1.20143 2.46103 1.30672 2.32985C1.36848 2.25295 1.4358 2.23677 1.48142 2.23677H2.84211C2.84302 3.06488 2.88702 4.08544 3.12102 5.05331C3.16004 5.2202 3.20328 5.38613 3.25411 5.54918C2.93876 5.41797 2.6121 5.23445 2.27243 4.97753Z"
                                fill="#53ACFF"
                              />
                            </svg>
                            {course.completed}
                          </li>
                          <li>
                            <svg
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 7.73333V14.1333C18 15.0889 17.039 16 16.0312 16H10.125C8.89882 16 7.90516 15.8565 6.75 15.4667C6.3933 15.3463 5.34375 14.9333 5.34375 14.9333V7.46667L9.98691 2.29553L10.4062 0H11.25C12.1847 0 12.8431 0.707133 12.8431 1.59347V2.09193C12.8431 3.2296 12.7708 4.36627 12.6266 5.49573L12.5793 5.86667H16.0312C17.039 5.86667 18 6.7778 18 7.73333ZM0 15.7333H4.21875V6.66667H0V15.7333Z"
                                fill="#53ACFF"
                              />
                            </svg>
                            {course.likes_number}
                          </li>
                          <li className="d-none d-lg-flex">
                            <svg
                              viewBox="0 0 21 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.750658 8.37104C0.272864 8.84129 0.00295154 9.48296 1.77153e-05 10.1531C-0.00249699 10.8233 0.262805 11.4671 0.736827 11.9411C2.00592 13.2102 3.70041 14.9047 4.96195 16.1666C5.93724 17.1415 7.51564 17.1511 8.50266 16.188C10.9796 13.7705 15.307 9.54666 16.6059 8.27883C16.8481 8.04245 16.9852 7.71805 16.9852 7.3794C16.9852 5.60737 16.9852 0 16.9852 0H9.76797C9.43771 0 9.12086 0.129508 8.88573 0.36128C7.60114 1.62618 3.24986 5.90998 0.750658 8.37104ZM15.3087 1.67647V6.68283C15.3087 7.02274 15.1708 7.34797 14.9273 7.58477C13.641 8.83416 9.43981 12.9151 7.59904 14.7031C7.11244 15.1754 6.33666 15.17 5.85677 14.6901C4.85633 13.6901 3.218 12.0513 2.20667 11.04C1.97113 10.8044 1.83953 10.4846 1.8412 10.1514C1.84246 9.81825 1.977 9.49972 2.21505 9.26627C4.08222 7.43347 8.31112 3.28211 9.58021 2.03649C9.81534 1.80556 10.1318 1.67647 10.4612 1.67647C11.8032 1.67647 15.3087 1.67647 15.3087 1.67647ZM11.9947 2.70834C11.2609 2.71463 10.5488 3.13458 10.2068 3.77835C9.91006 4.33619 9.89245 5.03025 10.1573 5.60402C10.5077 6.36346 11.3522 6.87018 12.2035 6.78132C13.0593 6.69247 13.8376 6.01224 14.0074 5.14844C14.1314 4.51851 13.9395 3.83409 13.499 3.36677C13.1222 2.96735 12.5853 2.71798 12.0341 2.70876C12.0212 2.70834 12.0082 2.70834 11.9947 2.70834ZM11.9981 3.7641C12.4612 3.76703 12.8959 4.11993 12.9801 4.58599C13.009 4.74693 12.9981 4.91541 12.9424 5.06965C12.7777 5.52187 12.2634 5.82867 11.7839 5.71341C11.3066 5.59857 10.947 5.08935 11.0287 4.59437C11.1029 4.14633 11.509 3.77164 11.9801 3.7641C11.9859 3.7641 11.9922 3.7641 11.9981 3.7641Z"
                                fill="#53ACFF"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.9859 1.0957V2.77259H18.395V7.77895C18.395 8.11886 18.2576 8.44409 18.014 8.6809C16.7278 9.93029 12.5265 14.0108 10.6858 15.7988C10.1992 16.2715 9.42297 16.2657 8.9435 15.7862L8.92925 15.7719L8.50343 16.1881C8.22555 16.4589 7.90116 16.6529 7.55664 16.7703L8.04868 17.2623C9.02397 18.2376 10.6024 18.2473 11.589 17.2837C14.066 14.8662 18.3933 10.6428 19.6926 9.37495C19.9349 9.13815 20.0715 8.81376 20.0715 8.47511C20.0715 6.7035 20.0715 1.0957 20.0715 1.0957H16.9859Z"
                                fill="#53ACFF"
                              />
                            </svg>
                            {course.category.title}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <h1>No courses available</h1>
            )}
          </div>

          {/* most liked and most completed section */}
          <div className={styles.most_liked_trainings + " w-full lg:w-1/3"}>
            {/* most liked */}
            <h5>Most Liked</h5>

            {/* most liked training card */}
            {Array.isArray(mostLikedCourses) && mostLikedCourses.length ? (
              mostLikedCourses?.map((course) => (
                <Link
                  to="/dashboard/training/single-training"
                  onClick={() => setCurrentCourse(course)}
                >
                  <div className={styles.most_liked_training_card}>
                    <h6>{course.title}</h6>
                    <ul>
                      <li>
                        <svg
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4444 4.62293C12.3883 4.61492 12.3323 4.61492 12.2762 4.62293C11.0343 4.58287 10.0488 3.56535 10.0488 2.31547C10.0488 1.04156 11.0824 0 12.3643 0C13.6382 0 14.6798 1.03355 14.6798 2.31547C14.6718 3.56535 13.6863 4.58287 12.4444 4.62293Z"
                            fill="#53ACFF"
                          />
                          <path
                            d="M15.0563 10.1757C14.1589 10.7766 12.901 11.001 11.7393 10.8487C12.0437 10.1917 12.204 9.46266 12.212 8.6935C12.212 7.8923 12.0357 7.13116 11.6992 6.46616C12.885 6.30592 14.1429 6.53026 15.0482 7.13116C16.3141 7.96441 16.3141 9.33446 15.0563 10.1757Z"
                            fill="#53ACFF"
                          />
                          <path
                            d="M3.55937 4.62293C3.61545 4.61492 3.67154 4.61492 3.72762 4.62293C4.96949 4.58287 5.95496 3.56535 5.95496 2.31547C5.95496 1.03355 4.92141 0 3.63949 0C2.36558 0 1.33203 1.03355 1.33203 2.31547C1.33203 3.56535 2.31751 4.58287 3.55937 4.62293Z"
                            fill="#53ACFF"
                          />
                          <path
                            d="M3.64947 8.69366C3.64947 9.47082 3.81772 10.2079 4.12218 10.8729C2.99249 10.9931 1.81472 10.7527 0.949424 10.1839C-0.316475 9.34263 -0.316475 7.97258 0.949424 7.13132C1.80671 6.55445 3.01652 6.32209 4.15423 6.45029C3.82574 7.1233 3.64947 7.88444 3.64947 8.69366Z"
                            fill="#53ACFF"
                          />
                          <path
                            d="M8.11031 11.1127C8.04621 11.1046 7.9741 11.1046 7.90199 11.1127C6.42778 11.0646 5.25 9.85477 5.25 8.36453C5.25801 6.84225 6.48387 5.6084 8.01416 5.6084C9.53644 5.6084 10.7703 6.84225 10.7703 8.36453C10.7623 9.85477 9.59253 11.0646 8.11031 11.1127Z"
                            fill="#53ACFF"
                          />
                          <path
                            d="M5.50697 12.7721C4.29716 13.5813 4.29716 14.9113 5.50697 15.7125C6.88505 16.6339 9.14444 16.6339 10.5225 15.7125C11.7323 14.9033 11.7323 13.5733 10.5225 12.7721C9.15245 11.8507 6.89306 11.8507 5.50697 12.7721Z"
                            fill="#53ACFF"
                          />
                        </svg>
                        {course.subscriber_number}
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5804 1.46831C14.3084 1.12924 13.9214 0.934858 13.5185 0.934858H12.1413C12.0722 -0.142691 11.4071 0.00708708 11.1481 0.00708708C10.8748 0.00708708 7.50002 0.00708708 7.50002 0.00708708C7.50002 0.00708708 4.12528 0.00708708 3.85194 0.00708708C3.5929 0.00708708 2.92772 -0.142658 2.85866 0.934858H1.48142C1.07864 0.934858 0.691603 1.12931 0.419524 1.46831C0.0897582 1.87932 -0.0525367 2.47247 0.0173949 3.14133C0.0303441 3.43847 0.16675 4.96477 1.60206 6.05037C2.33149 6.60207 3.03257 6.88335 3.67036 7.02649C3.81014 7.05972 3.95155 7.08957 4.09648 7.11287C4.09848 7.11532 4.10044 7.11784 4.10249 7.12025C7.08664 10.5751 6.72221 8.57645 6.72221 11.7433C6.72221 12.9711 5.17619 12.5736 5.17619 13.516C5.17619 14.4583 3.97124 13.6828 4.08277 14.8008C4.15109 15.4862 5.99639 16 7.50008 16C9.00365 16 10.8491 15.4862 10.9174 14.8008C11.0289 13.6828 9.82384 14.4583 9.82384 13.516C9.82384 12.5736 8.27791 12.9711 8.27791 11.7433C8.27791 8.57642 7.91345 10.5751 10.8976 7.12025C10.9017 7.11545 10.9055 7.11036 10.9096 7.10552C11.6528 6.99964 12.5051 6.72587 13.3981 6.05041C14.8333 4.9648 14.9697 3.4385 14.9826 3.14136C15.0525 2.47247 14.9102 1.87926 14.5804 1.46831ZM13.8051 3.00951L13.7997 3.04148L13.8004 3.08509C13.7976 3.16969 13.7417 4.21047 12.7275 4.97753C12.4502 5.18736 12.1818 5.34639 11.9209 5.46989C11.8618 5.49619 11.803 5.52253 11.7426 5.54544C12.0989 4.44153 12.1568 3.20682 12.1578 2.2368H13.5185C13.5641 2.2368 13.6315 2.25298 13.6933 2.32988C13.7985 2.46106 13.8393 2.70873 13.8051 3.00951ZM6.66544 6.32859C6.55396 6.48327 6.38899 6.56385 6.22256 6.56385C6.09957 6.56385 5.97576 6.51992 5.87196 6.42932C4.45455 5.19258 4.33581 3.49484 4.33581 2.00064C4.33581 1.65751 4.58873 1.37932 4.90062 1.37932C5.21252 1.37932 5.46538 1.65751 5.46538 2.00064C5.46538 3.31167 5.55019 4.56243 6.57385 5.45565C6.81825 5.66892 6.85924 6.05975 6.66544 6.32859ZM2.27243 4.97753C1.25923 4.21118 1.20239 3.17166 1.19949 3.08534L1.20014 3.05569L1.19486 3.00947C1.16065 2.70876 1.20143 2.46103 1.30672 2.32985C1.36848 2.25295 1.4358 2.23677 1.48142 2.23677H2.84211C2.84302 3.06488 2.88702 4.08544 3.12102 5.05331C3.16004 5.2202 3.20328 5.38613 3.25411 5.54918C2.93876 5.41797 2.6121 5.23445 2.27243 4.97753Z"
                            fill="#53ACFF"
                          />
                        </svg>
                        {course.completed}
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 7.73333V14.1333C18 15.0889 17.039 16 16.0312 16H10.125C8.89882 16 7.90516 15.8565 6.75 15.4667C6.3933 15.3463 5.34375 14.9333 5.34375 14.9333V7.46667L9.98691 2.29553L10.4062 0H11.25C12.1847 0 12.8431 0.707133 12.8431 1.59347V2.09193C12.8431 3.2296 12.7708 4.36627 12.6266 5.49573L12.5793 5.86667H16.0312C17.039 5.86667 18 6.7778 18 7.73333ZM0 15.7333H4.21875V6.66667H0V15.7333Z"
                            fill="#53ACFF"
                          />
                        </svg>
                        {course.likes_number}
                      </li>
                    </ul>
                  </div>
                </Link>
              ))
            ) : (
              <h1>No courses available</h1>
            )}

            {/* most completed */}
            <h5>Most Completed</h5>

            {Array.isArray(mostCompletedCourses) &&
            mostCompletedCourses.length ? (
              mostCompletedCourses?.map((course) => (
                <Link
                  to={`/dashboard/training/single-training/${course.id}`}
                  onClick={() => setCurrentCourse(course)}
                >
                  <div className={styles.most_liked_training_card}>
                    <h6>{course.title}</h6>
                    <ul>
                      <li>
                        <svg
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 7.73333V14.1333C18 15.0889 17.039 16 16.0312 16H10.125C8.89882 16 7.90516 15.8565 6.75 15.4667C6.3933 15.3463 5.34375 14.9333 5.34375 14.9333V7.46667L9.98691 2.29553L10.4062 0H11.25C12.1847 0 12.8431 0.707133 12.8431 1.59347V2.09193C12.8431 3.2296 12.7708 4.36627 12.6266 5.49573L12.5793 5.86667H16.0312C17.039 5.86667 18 6.7778 18 7.73333ZM0 15.7333H4.21875V6.66667H0V15.7333Z"
                            fill="#53ACFF"
                          />
                        </svg>
                        93% Completion Rate
                      </li>
                    </ul>
                  </div>
                </Link>
              ))
            ) : (
              <h1>No courses available</h1>
            )}
          </div>
        </div>
      </div>

      {/* ST suite wiki section */}
      <div className={styles.st_suite_wiki + " w-full lg:w-[20%]"}>
        {/* title */}
        <h6>ST SUITE WIKI</h6>

        {/* search input in wiki section */}
        <div className={styles.searchInput + " w-full"}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search By.."
          />
          <img src={searchIcon} alt="searchIcon" />
        </div>

        {/* title */}
        <h6>Where to start on Street Suite?</h6>

        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt <a href="">ut labore et dolore</a>
          </li>
          <li>
            magna aliqua. Ut enim ad <a href="">minim veniam, quis</a> nostrud
            exercitation
          </li>
          <li>
            ullamco laboris nisi ut aliquip ex ea{" "}
            <a href="">commodo consequat.</a>
          </li>
        </ul>

        {/* title */}
        <h6>Where to start on Street Suite?</h6>

        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            {" "}
            sed do eiusmod tempor incididunt <a href="">
              ut labore et dolore
            </a>{" "}
            magna aliqua.
          </li>
        </ul>

        {/* title */}
        <h6>Where to start on Street Suite?</h6>

        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt <a href="">ut labore et dolore</a>
          </li>
          <li>
            magna aliqua. Ut enim ad <a href="">minim veniam, quis</a> nostrud
            exercitation{" "}
          </li>
          <li>
            ullamco laboris nisi ut aliquip ex ea{" "}
            <a href="">commodo consequat</a>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuiteAcademy;
