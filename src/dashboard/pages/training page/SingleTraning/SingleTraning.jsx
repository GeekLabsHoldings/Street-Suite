
import React, { useState } from 'react'
import $ from 'jquery';

import SearchBar from '../../../components/searchBar/SearchBar'
import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
import searchIcon from "../../../assets/search.svg";
import styles from './SingleTraning.module.css';


import notifIcon from "../../../assets/notif.svg";
import { NavLink, Outlet } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';

const SingleTraning = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);


    // function that open & close collaps 
    const openCollaps = (e) => {

        console.log($(e.target).parentsUntil(".training_lison_collapse"));
        $(e.target).parents(".training_lison_collapse").toggleClass("open");

        // slide up all collaps are open
        // $(".training_lison_collapse_body").not($(e.target).parents(".training_lison_collapse").children(".training_lison_collapse_body")).slideUp(300);

        // $(".training_lison_collapse").not($(e.target).parents(".training_lison_collapse")).removeClass("current");

        // toggle slide collaps by click
        $(e.target).parents(".training_lison_collapse").children(".training_lison_collapse_body").slideToggle(300);

        // $(e.target).parents(".training_lison_collapse").toggleClass("current");

    }


    return (
        <div>
            <SearchBar >
                <h2>Trading</h2>
                <div className={SearchBarStyles.notification_searchInput + " hidden md:flex"}>
                    <div className={styles.training_navBar} >
                        <ul>
                            <li>
                                <NavLink to="/dashboard/training/suite-academy" className={styles.active}>ST Suite Academy</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/training/my-courses">My Courses</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className={SearchBarStyles.searchInput + " w-full hidden lg:block"}>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search By.."
                        />
                        <img src={searchIcon} alt="searchIcon" />
                    </div>

                    <button className={SearchBarStyles.notificationBtn} type="button">
                        <img src={notifIcon} alt="" />
                        <span>6</span>
                    </button>
                </div>
                <div className={` ${SearchBarStyles.bars} flex md:hidden ${isNavOpen ? SearchBarStyles.open : ""}`} onClick={() => { setIsNavOpen(!isNavOpen) }}>
                    <div className={SearchBarStyles.bar}></div>
                </div>
            </SearchBar>

            <div className='flex gap-[50px] items-start'>

                <div className="flex flex-col w-full lg:w-4/5 items-center mb-12 lg:mt-8 lg:gap-[30px]">

                    <div className={styles.training_title}>
                        <h5>Understanding the Bull Flag pattern</h5>

                        <div className={styles.Bullish}>
                            <span>Bullish</span>
                            <p>70% Likelihood of <br /> follow through</p>
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
                        className={styles.ProgressBar + ' w-full lg:mb-[50px]'}
                    />

                    <Outlet />

                </div>
                <div className={styles.table_of_content + " w-1/5"}>
                    <h6>Table of Content</h6>

                    <ul>
                        <li className={styles.completed}>Intro</li>
                        <li className={styles.completed}>What is a bull Flag</li>
                        <li className={styles.current}>Key Characteristics of a Bull Flag</li>
                        <li>Significance of the Bull Flag Pattern</li>
                        <li>How to Identify and Trade the Bull Flag Pattern</li>
                        <li>Successful VS Failed bull flag patterns</li>
                        <li>Summary</li>
                        <li>Assesment</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default SingleTraning
