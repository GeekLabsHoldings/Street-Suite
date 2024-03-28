import React from 'react'
import SearchBar from '../../../components/searchBar/SearchBar'
import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
import searchIcon from "../../../assets/search.svg";
import styles from "./PrivateEquityPage.module.css"
import popularPadge from "../../../assets/popular-padge.png";
import companyImg from "../../../assets/companyImg.png"

import { NavLink, Outlet } from 'react-router-dom';


const PrivateEquityPage = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-12 px-0 lg:px-12'>
            <div className="w-full lg:w-[70%]">
                <SearchBar>
                    <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row w-full">
                        <h5 className={styles.supTitle + ' text-nowrap text-xl lg:text-3xl'}>Private Equity</h5>

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

            <div className={styles.equities + " w-full lg:w-[30%] d-none d-lg-block"}>
                <img src={popularPadge} alt="" className={styles.padge} />
                <h6>Recommended Equities</h6>

                <div className={styles.recommended_equities + " space-y-3"}>

                    <NavLink to="single-equity" className={styles.equity_item + " " + styles.Up}>
                        <img src={companyImg} alt="" />
                        <span>$ 190
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                            </svg>
                        </span>
                    </NavLink>
                    <NavLink to="single-equity" className={styles.equity_item + " " + styles.Down}>
                        <img src={companyImg} alt="" />
                        <span>$ 190
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                            </svg>
                        </span>
                    </NavLink>
                    <NavLink to="single-equity" className={styles.equity_item + " " + styles.Down}>
                        <img src={companyImg} alt="" />
                        <span>$ 190
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                            </svg>
                        </span>
                    </NavLink>
                    <NavLink to="single-equity" className={styles.equity_item + " " + styles.Up}>
                        <img src={companyImg} alt="" />
                        <span>$ 190
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                            </svg>
                        </span>
                    </NavLink>
                    <NavLink to="single-equity" className={styles.equity_item + " " + styles.Up}>
                        <img src={companyImg} alt="" />
                        <span>$ 190
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                            </svg>
                        </span>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}

export default PrivateEquityPage
