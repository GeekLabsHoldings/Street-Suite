import React, { useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css";
import styles from "./TradingFlowPage.module.css"

import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import NotificationWindow from '../../UI-components/NotificationWindow/NotificationWindow';



const TradingFlowPage = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

const location = useLocation()

  return (

    <div className='w-full p-3 lg:p-8 mx-auto' >

      <SearchBar  >
        <Link to="/dashboard/trading"><h2>Trading</h2></Link>
        <div className={`${SearchBarStyles.notification_searchInput} ${isNavOpen ? " " : "hidden"} lg:flex`}>
          <div className={SearchBarStyles.navBar} >
            <ul>
              <li>
                <NavLink to="transfer&pay" className={`${location.pathname.includes("transfer&pay") ? " !font-bold" : "font-normal"}`}>Transfer & Pay</NavLink>
              </li>
              <li>
                <NavLink to="private-equity" className={`${location.pathname.includes("private-equity") ? " !font-bold" : "font-normal"}`}>Private Equities</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex'>
          <NotificationWindow />
          <div className={` ${SearchBarStyles.bars} flex lg:hidden ${isNavOpen ? SearchBarStyles.open : ""}`} onClick={() => { setIsNavOpen(!isNavOpen) }}>
            <div className={SearchBarStyles.bar}></div>
          </div>
        </div>
      </SearchBar>




      <div className={styles.trading_wrapper}>

        {/* all children pages will appear here */}
        <Outlet />

      </div>


    </div>
  )
}

export default TradingFlowPage
