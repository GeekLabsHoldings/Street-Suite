import React, { useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTable from "../../components/dataTable/DataTable";
import Filters from "../../components/filters/Filters";
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css"

import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";

function AlertsPage() {

  const [openFilterInMobile, setOpenFilterInMobile] = useState(false);

  const toggleFilterMenu = () => {
    setOpenFilterInMobile(!openFilterInMobile)
  }

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
            <button className={SearchBarStyles.notificationBtn} type="button">
              <img src={notifIcon} alt="" />
              <span>6</span>
            </button>
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
