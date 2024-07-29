import React, { useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTable from "../../components/dataTable/DataTable";
import Filters from "../../components/filters/Filters";
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css";

import searchIcon from "../../assets/search.svg";
import NotificationWindow from "../../UI-components/NotificationWindow/NotificationWindow";
import axios from "axios";

function AlertsPage() {
  const [openFilterInMobile, setOpenFilterInMobile] = useState(false);
  const [strategy, setStrategy] = useState("");
  const [industry, setIndustry] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [alerts, setAlerts] = useState([]);

  const toggleFilterMenu = () => {
    setOpenFilterInMobile(!openFilterInMobile);
  };

  return (
    <div className="alertsPage-wrapper w-full lg:w-auto">
      <div className="search-table-section">
        {/* search bar component from components folder at dashboard */}
        <SearchBar>
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
            <NotificationWindow />

            <button
              className={SearchBarStyles.toggleFilters + " block xl:hidden"}
              onClick={toggleFilterMenu}
            >
              Filter
            </button>
          </div>
        </SearchBar>
        <SearchBar>
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
        <DataTable
          strategy={strategy}
          industry={industry}
          marketCap={marketCap}
          riskLevel={riskLevel}
          setAlerts={setAlerts}
          alerts={alerts}
        />
      </div>

      {/* filters component from components folder at dashboard */}
      <Filters
        openFilterInMobile={openFilterInMobile}
        toggleFilterMenu={toggleFilterMenu}
        setStrategy={setStrategy}
        setIndustry={setIndustry}
        setMarketCap={setMarketCap}
        setRiskLevel={setRiskLevel}
        setAlerts={setAlerts}
        alert={alerts}
      />
    </div>
  );
}

export default AlertsPage;
