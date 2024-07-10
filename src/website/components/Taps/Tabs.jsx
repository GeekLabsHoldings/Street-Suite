import * as React from "react";
import Box from "@mui/material/Box";
import "./Tabs.css";

export default function BasicTabs({ setFilter }) {
  const handleFilterChange = (event) => {
    const labelContent = event.target.parentElement.textContent.trim();
    setFilter(labelContent);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="blogsTabs">
        {/* tabs for all filters */}
        <div className="check-Filter tabsStyle tabsSec">
          <label htmlFor="private-equity">
            Private Equity
            <input
              type="radio"
              id="private-equity"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="Market">
            Market
            <input
              type="radio"
              id="Market"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="Options">
            Options
            <input
              type="radio"
              id="Options"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="Large-Caps">
            Large Caps
            <input
              type="radio"
              id="Large-Caps"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="Small-Caps">
            Small Caps
            <input
              type="radio"
              id="Small-Caps"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="private-equity">
            Private Equity
            <input
              type="radio"
              id="private-equity"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="Market">
            Market
            <input
              type="radio"
              id="Market"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="Options">
            Options
            <input
              type="radio"
              id="Options"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          <label htmlFor="Large-Caps">
            Large Caps
            <input
              type="radio"
              id="Large-Caps"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
        </div>
      </Box>
    </Box>
  );
}
