import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTable from "../../components/dataTable/DataTable";
import Filters from "../../components/filters/Filters";
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css"

import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";
import $ from 'jquery';
import { Link } from "react-router-dom";

function AlertsPage() {

  const [openFilterInMobile, setOpenFilterInMobile] = useState(false);
  const [openNotificationWindow, setOpenNotificationWindow] = useState(false);

  const toggleFilterMenu = () => {
    setOpenFilterInMobile(!openFilterInMobile)
  }
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
    <div className="alertsPage-wrapper w-full lg:w-auto">
      <div className="search-table-section">

        {/* search bar component from components folder at dashboard */}
        <SearchBar >

          <h2>Alerts</h2>
          <div className={SearchBarStyles.notification_searchInput + " d-flex"}>
            <div className={SearchBarStyles.searchInput + " hidden lg:block"}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search By.."
              />
              <img src={searchIcon} alt="searchIcon" />
            </div>
            <div className="relative">
              <button className={SearchBarStyles.notificationBtn + " notificationBtn"} type="button" onClick={toggleNotificationWindow}>
                <img src={notifIcon} alt="" />
                <span>6</span>
              </button>
              <div className={openNotificationWindow ? SearchBarStyles.notification_window + " notification_window " + SearchBarStyles.open : SearchBarStyles.notification_window + " notification_window "} >
                <ul class="tabs-nav flex items-center">

                  {/* taps that show the appropriate content in leaderBoard page */}
                  <li><a href="#Alerts">Alerts</a></li>
                  <li><a href="#News">News</a></li>

                </ul>
                <div class={SearchBarStyles.tabs_content + " tabs-stage"}>

                  {/* Biggest Winners content that show when user click on Biggest Winners tab in leaderBoard page */}
                  <div id="Alerts" className='tab space-y-4'>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                  </div>

                  <div id="News" className='tab space-y-4'>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div>
                    </Link>
                    <Link to="/dashboard/alerts">

                      <div className={SearchBarStyles.notification_item}>
                        <p><span>$TSLA</span> just announced an acquisition of <span>$NFLX</span> at <span>$200 B</span>. </p>
                        <span>26 mins ago</span>
                      </div></Link>
                  </div>

                </div>
              </div>
            </div>

            <button className={SearchBarStyles.toggleFilters + " block lg:hidden"} onClick={toggleFilterMenu}>
              Filter
            </button>
          </div>
        </SearchBar>
        <SearchBar >
          <div className={SearchBarStyles.searchInput + " block lg:hidden"}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search By.."
            />
            <img src={searchIcon} alt="searchIcon" />
          </div>
        </SearchBar>

        {/* dataTable component from components folder at dashboard */}
        <DataTable />
      </div>

      {/* filters component from components folder at dashboard */}
      <Filters openFilterInMobile={openFilterInMobile} toggleFilterMenu={toggleFilterMenu} />

    </div>
  );
}

export default AlertsPage;
