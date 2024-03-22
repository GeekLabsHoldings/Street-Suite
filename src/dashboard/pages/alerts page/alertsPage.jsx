import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTable from "../../components/dataTable/DataTable";
import Filters from "../../components/filters/Filters";
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css"

import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";

function AlertsPage() {
  return (
    <div className="alertsPage-wrapper">
      <div className="search-table-section">

        {/* search bar component from components folder at dashboard */}
        <SearchBar >
          
            <h2>Alerts</h2>
            <div className={SearchBarStyles.notification_searchInput + " d-flex"}>
              <div className={SearchBarStyles.searchInput}>
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
        </SearchBar>

        {/* dataTable component from components folder at dashboard */}
        <DataTable />
      </div>
      <div className="filters-section">
        {/* filters component from components folder at dashboard */}
        <Filters />
      </div>
    </div>
  );
}

export default AlertsPage;
