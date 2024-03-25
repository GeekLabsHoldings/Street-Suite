import React, { useState } from 'react'
import SearchBar from '../../../components/searchBar/SearchBar'
import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
// import searchIcon from "../../../assets/search.svg";
import styles from "./MyCourses.module.css";

import notifIcon from "../../../assets/notif.svg";
import { NavLink } from 'react-router-dom';

const MyCourses = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);


    return (
        <div className='flex gap-8'>
            <div className='w-4/5'>
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
                        <button className={SearchBarStyles.notificationBtn + " hidden md:flex"} type="button">
                            <img src={notifIcon} alt="" />
                            <span>6</span>
                        </button>
                    </div>
                    <div className={` ${SearchBarStyles.bars} flex md:hidden ${isNavOpen ? SearchBarStyles.open : ""}`} onClick={() => { setIsNavOpen(!isNavOpen) }}>
                        <div className={SearchBarStyles.bar}></div>
                    </div>
                </SearchBar>

                <div className={styles.trainings_most_liked + " w-3/4"}>
                    <div className={styles.trainings}>

                    </div>
                    <div className={styles.most_liked}>

                    </div>
                </div>

            </div>

            <div className={styles.st_suite_wiki + " w-1/5"}>
                courses
            </div>
        </div>
    )
}

export default MyCourses
