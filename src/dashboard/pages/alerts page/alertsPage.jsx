import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTable from "../../components/dataTable/DataTable";
import Filters from "../../components/filters/Filters";

function AlertsPage() {
  return (
    <div className="alertsPage-wrapper">
      <div className="search-table-section">
        <SearchBar />
        <DataTable />
      </div>
      <div className="filters-section">
        <Filters />
      </div>
    </div>
  );
}

export default AlertsPage;
