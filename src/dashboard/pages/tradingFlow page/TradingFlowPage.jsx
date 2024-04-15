import React, { useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css";
import styles from "./TradingFlowPage.module.css"

import { Link, NavLink, Outlet } from 'react-router-dom'

import NotificationWindow from '../../UI-components/NotificationWindow/NotificationWindow';



const TradingFlowPage = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);



  return (

    <div className='w-full p-3 lg:p-8 mx-auto' >

      <SearchBar  >
        <Link to="/dashboard/trading"><h2>Trading</h2></Link>
        <div className={`${SearchBarStyles.notification_searchInput} ${isNavOpen ? " " : "hidden"} lg:flex`}>
          <div className={SearchBarStyles.navBar} >
            <ul>
              <li>
                <NavLink to="private-equity">Private Equities</NavLink>
              </li>
              <li>
                <NavLink to="transfer&pay">Transfer & Pay</NavLink>
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
