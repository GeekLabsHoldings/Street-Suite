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
          <div>
          <label htmlFor="private-equity">
            Private Equity
            <input
              type="radio"
              id="private-equity"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          </div>
          <div>
          <label htmlFor="Market">
            Market
            <input
              type="radio"
              id="Market"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          </div>
          <div>
          <label htmlFor="Options">
            Options
            <input
              type="radio"
              id="Options"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
          </div>
         <div>
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
         <div>
         <label htmlFor="Small-Caps">
            Small Caps
            <input
              type="radio"
              id="Small-Caps"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
         </div>
        <div>
        <label htmlFor="private-equity">
            Private Equity
            <input
              type="radio"
              id="private-equity"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
        </div>
         <div>
         <label htmlFor="Market">
            Market
            <input
              type="radio"
              id="Market"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
         </div>
         <div>
         <label htmlFor="Options">
            Options
            <input
              type="radio"
              id="Options"
              name="check-Filter"
              onChange={handleFilterChange}
            />
          </label>
         </div>
          <div>
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
        </div>
      </Box>
    </Box>
  );
}
