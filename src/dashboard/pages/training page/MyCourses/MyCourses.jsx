import React, { useEffect, useState } from 'react'
import SearchBar from '../../../components/searchBar/SearchBar'
import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
import searchIcon from "../../../assets/search.svg";
import styles from "./MyCourses.module.css";

import notifIcon from "../../../assets/notif.svg";
import { NavLink, Outlet } from 'react-router-dom';
import $ from 'jquery';


const MyCourses = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);


    useEffect(() => {


        // Show the first tab by default
        $('.myCourses-tabs .tab').hide();
        $('.myCourses-tabs .tab:first-child').show();
        $('.myCourses-tabs .tabs-nav li:first').addClass('selected');

        // Change tab class and display content
        $('.myCourses-tabs .tabs-nav a').on('click', function (event) {
            event.preventDefault();

            $('.myCourses-tabs .tabs-nav li').removeClass('selected');
            $('.myCourses-tabs .tabs-nav li').addClass('not-selected');
            $(this).parent().removeClass('not-selected');
            $(this).parent().addClass('selected');
            $('.myCourses-tabs .tab').hide();
            $($(this).attr('href')).show();

        });

    }, [])


    return (
        <div className='MyCourses-wrapper flex flex-col lg:flex-row lg:gap-8 items-start'>
            <div className='w-full xl:w-[77%]'>
                <SearchBar >
                    <h2>Trading</h2>
                    <div className={SearchBarStyles.notification_searchInput + " hidden md:flex"}>
                        <div className={styles.training_navBar} >
                            <ul>
                                <li>
                                    <NavLink to="/dashboard/training/suite-academy">ST Suite Academy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/training/my-courses">My Courses</NavLink>
                                </li>
                            </ul>
                        </div>
                        <button className={SearchBarStyles.notificationBtn + " hidden lg:flex"} type="button">
                            <img src={notifIcon} alt="" />
                            <span>6</span>
                        </button>
                    </div>
                    <div className={` ${SearchBarStyles.bars} flex lg:hidden ${isNavOpen ? SearchBarStyles.open : ""}`} onClick={() => { setIsNavOpen(!isNavOpen) }}>
                        <div className={SearchBarStyles.bar}></div>
                    </div>
                </SearchBar>

                {/* search input */}
                <SearchBar>
                    <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row w-full">
                        <h5 className={styles.supTitle + ' text-nowrap text-xl lg:text-3xl'}>ST Suite Academy</h5>

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

                            <button className={SearchBarStyles.searchBtn + " hidden lg:flex"}>Search</button>
                        </div>
                    </div>
                </SearchBar>

                <Outlet />

            </div>

            {/* ST suite wiki section */}
            <div className={styles.st_suite_wiki + " w-full xl:w-[20%]"}>
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
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="">ut labore et dolore</a></li>
                    <li>magna aliqua. Ut enim ad <a href="">minim veniam, quis</a> nostrud exercitation</li>
                    <li>ullamco laboris nisi ut aliquip ex ea <a href="">commodo consequat.</a></li>
                </ul>

                {/* title */}
                <h6>Where to start on Street Suite?</h6>

                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li> sed do eiusmod tempor incididunt <a href="">ut labore et dolore</a> magna aliqua.</li>
                </ul>

                {/* title */}
                <h6>Where to start on Street Suite?</h6>

                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="">ut labore et dolore</a></li>
                    <li>magna aliqua. Ut enim ad <a href="">minim veniam, quis</a> nostrud exercitation </li>
                    <li>ullamco laboris nisi ut aliquip ex ea <a href="">commodo consequat</a>.</li>
                </ul>

            </div>
        </div>
    )
}

export default MyCourses
