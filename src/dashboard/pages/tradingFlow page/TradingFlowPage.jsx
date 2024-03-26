import React, { useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css";
import styles from "./TradingFlowPage.module.css"

import notifIcon from "../../assets/notif.svg";
import { NavLink, Outlet } from 'react-router-dom'


const TradingFlowPage = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);





  return (
    <div className='w-full p-3 md:p-8 max-w-[1600px] mx-auto' >


      <SearchBar  >
        <h2>Trading</h2>
        <div className={SearchBarStyles.notification_searchInput + " hidden md:flex"}>
          <div className={SearchBarStyles.navBar} >
            <ul>
              <li>
                <NavLink to="private-equities">Private Equities</NavLink>
              </li>
              <li>
                <NavLink to="transfer&pay">Transfer & Pay</NavLink>
              </li>
              <li>
                <NavLink to="privacy&security">Privacy & Security</NavLink>
              </li>
            </ul>
            <NavLink to="trading-history" className={SearchBarStyles.tradingHistory}>Trading History</NavLink>
          </div>
          <button className={SearchBarStyles.notificationBtn + " flex md:hidden"} type="button">
            <img src={notifIcon} alt="" />
            <span>6</span>
          </button>
        </div>
        <div className={` ${SearchBarStyles.bars} flex md:hidden ${isNavOpen ? SearchBarStyles.open : ""}`} onClick={() => { setIsNavOpen(!isNavOpen) }}>
          <div className={SearchBarStyles.bar}></div>
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
