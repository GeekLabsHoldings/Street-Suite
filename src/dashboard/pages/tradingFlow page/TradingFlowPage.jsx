import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css";
import styles from "./TradingFlowPage.module.css"

import notifIcon from "../../assets/notif.svg";
import { Link, NavLink, Outlet } from 'react-router-dom'
import $ from 'jquery';



const TradingFlowPage = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openNotificationWindow, setOpenNotificationWindow] = useState(false);

  const toggleNotificationWindow = () => {
    setOpenNotificationWindow(!openNotificationWindow)
  }

  useEffect(() => {

    // Show the first tab by default
    $('.notification_window .tab').hide();
    $('.notification_window .tab:first-child').show();
    $('.notification_window .tabs-nav li:first').addClass('selected');

    // Change tab class and display content
    $('.notification_window .tabs-nav a').on('click', function (event) {
      event.preventDefault();

      $('.notification_window .tabs-nav li').removeClass('selected');
      $('.notification_window .tabs-nav li').addClass('not-selected');
      $(this).parent().removeClass('not-selected');
      $(this).parent().addClass('selected');
      $('.notification_window .tab').hide();
      $($(this).attr('href')).show();
    });

  }, [])



  return (
    
    <div className='w-full p-3 md:p-8 mx-auto' >

      <SearchBar  >
        <Link to="/dashboard/trading"><h2>Trading</h2></Link>
        <div className={SearchBarStyles.notification_searchInput + " hidden md:flex"}>
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
          <button className={SearchBarStyles.notificationBtn} type="button" onClick={toggleNotificationWindow}>
            <img src={notifIcon} alt="" />
            <span>6</span>
            <div className={openNotificationWindow? SearchBarStyles.notification_window + " notification_window " + SearchBarStyles.open : SearchBarStyles.notification_window + " notification_window "} >
                <ul class="tabs-nav flex items-center">

                  {/* taps that show the appropriate content in leaderBoard page */}
                  <li><a href="#Alerts">Alerts</a></li>
                  <li><a href="#News">News</a></li>

                </ul>
                <div class={SearchBarStyles.tabs_content + " tabs-stage"}>

                  {/* Biggest Winners content that show when user click on Biggest Winners tab in leaderBoard page */}
                  <div id="Alerts" className='tab space-y-4'>
                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                  </div>

                  <div id="News" className='tab space-y-4'>
                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>

                    <div className={SearchBarStyles.notification_item}>
                      <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                      <span>26 mins ago</span>
                    </div>
                  </div>

                </div>
              </div>
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
