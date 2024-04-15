import React, { useState } from "react";
import $ from 'jquery'
import styles from "./Filters.module.css";
import closeIcon from "../../assets/close icon.svg";
import filterSearchIcon from "../../assets/filter search icon.svg";
import arrowIcon from "../../assets/industry/arrow icon.svg";
import healthIcon from "../../assets/industry/health care.svg";
import ITIcon from "../../assets/industry/IT.svg";
import communicationIcon from "../../assets/industry/communication.svg";
import discretionaryIcon from "../../assets/industry/consumer discretionary.svg";
import consumerIcon from "../../assets/industry/consumer.svg";
import energyIcon from "../../assets/industry/energy.svg";
import financialsIcon from "../../assets/industry/financials.svg";
import industrialsIcon from "../../assets/industry/industrials.svg";
import matrialsIcon from "../../assets/industry/matrials.svg";
import estateIcon from "../../assets/industry/real estate.svg";
import utilitiesIcon from "../../assets/industry/utilities.svg";
import Slider from "react-slick";

// array of industry filter data that used in industry select input
const industryFilter = [
  { icon: healthIcon, title: "Health Care" },
  { icon: ITIcon, title: "IT" },
  { icon: communicationIcon, title: "Communication" },
  { icon: discretionaryIcon, title: "Discretionary" },
  { icon: consumerIcon, title: "Consumer" },
  { icon: energyIcon, title: "Energy" },
  { icon: financialsIcon, title: "Financials" },
  { icon: industrialsIcon, title: "Industrials" },
  { icon: matrialsIcon, title: "Matrials" },
  { icon: estateIcon, title: "Real Estate" },
  { icon: utilitiesIcon, title: "Utilities" },
];

// array of strategy filter data that used in strategy select input
const strategySelect = [
  {
    type: "radio",
    name: "Strategy-Filter",
    id: "Big-Option-Buys",
    label: "Big Option Buys",
  },
  {
    type: "radio",
    name: "Strategy-Filter",
    id: "Marger-Arbitrage",
    label: "Marger Arbitrage",
  },
  {
    type: "radio",
    name: "Strategy-Filter",
    id: "Short-Reports",
    label: "Short Reports",
  },
];

// array of Market Cap filter data that used in Market Cap select input
const marketCapSelect = [
  {
    type: "radio",
    name: "marketCap",
    id: "micro",
    label: "Micro",
  },
  {
    type: "radio",
    name: "marketCap",
    id: "small",
    label: "Small",
  },
  {
    type: "radio",
    name: "marketCap",
    id: "large",
    label: "Large",
  },
];

// array of Market Cap filter data that used in Market Cap select input
const riskLevelSelect = [
  {
    type: "radio",
    name: "riskLevel",
    id: "lowRisk",
    label: "Low Risk",
  },
  {
    type: "radio",
    name: "riskLevel",
    id: "midRisk",
    label: "Mid Risk",
  },
  {
    type: "radio",
    name: "riskLevel",
    id: "highRisk",
    label: "High Risk",
  },
];

// array of Assets filter data that used in Assets select input
const AssetSelect = [
  { type: "radio", name: "Asset-Filter", id: "stocks", label: "Stocks" },
  { type: "radio", name: "Asset-Filter", id: "sptions", label: "Options" },
  { type: "radio", name: "Asset-Filter", id: "future", label: "Future" },
  { type: "radio", name: "Asset-Filter", id: "past", label: "Past" },
  { type: "radio", name: "Asset-Filter", id: "now", label: "Now" },
];

function Filters({ openFilterInMobile, toggleFilterMenu }) {
  const [appliedFilters, setAppliedFilters] = useState([]);

  // function that get value of market cap filter and add it to applied filters
  const handleMarketCapFilter = (e) => {
    let index = null;
    let newArr = appliedFilters;

    for (let i = 0; i < marketCapSelect.length; i++) {
      if (appliedFilters.includes(marketCapSelect[i].label)) {
        index = appliedFilters.indexOf(marketCapSelect[i].label);
        newArr[index] = e.target.value;
      }
    }

    index === null
      ? setAppliedFilters((prev) => [...prev, e.target.value])
      : setAppliedFilters([...newArr]);
  };

  // function that get value of market cap filter and add it to applied filters
  const handleRiskLevelFilter = (e) => {
    let index = null;
    let newArr = appliedFilters;

    for (let i = 0; i < riskLevelSelect.length; i++) {
      if (appliedFilters.includes(riskLevelSelect[i].label)) {
        index = appliedFilters.indexOf(riskLevelSelect[i].label);
        newArr[index] = e.target.value;
      }
    }

    index === null
      ? setAppliedFilters((prev) => [...prev, e.target.value])
      : setAppliedFilters([...newArr]);
  };

  // function that get value of market cap filter and add it to applied filters
  const handleStrategyFilter = (value) => {
    let index = null;
    let newArr = appliedFilters;

    for (let i = 0; i < strategySelect.length; i++) {
      if (appliedFilters.includes(strategySelect[i].label)) {
        index = appliedFilters.indexOf(strategySelect[i].label);
        newArr[index] = value;
      }
    }

    index === null
      ? setAppliedFilters((prev) => [...prev, value])
      : setAppliedFilters([...newArr]);
  };

  // function that get value of market cap filter and add it to applied filters
  const handleAssetFilter = (value) => {
    let index = null;
    let newArr = appliedFilters;

    for (let i = 0; i < AssetSelect.length; i++) {
      if (appliedFilters.includes(AssetSelect[i].label)) {
        index = appliedFilters.indexOf(AssetSelect[i].label);
        newArr[index] = value;
      }
    }

    index === null
      ? setAppliedFilters((prev) => [...prev, value])
      : setAppliedFilters([...newArr]);
  };

  // function that clear applied filters
  const clearAppliedFilters = () => {
    setAppliedFilters([])
  }

  const strategySettings = {
    focusOnSelect: true,
    centerPadding: "0px",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    speed: 300,

    afterChange: function (currentSlide) {
      const slides = document.querySelectorAll(".strategyFilter .slick-active input");
      console.log(currentSlide);
      $(".strategyFilter input").removeAttr("checked" , 0)
      slides[2].setAttribute("checked","checked");
      handleStrategyFilter(slides[2].getAttribute("value"))
    },
  };

  const assetSettings = {
    focusOnSelect: true,
    centerPadding: "0px",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    speed: 300,

    afterChange: function (currentSlide) {
      const slides = document.querySelectorAll(".AssetFilter .slick-active input");
      console.log(currentSlide);
      $(".AssetFilter input").removeAttr("checked" , 0)
      slides[1].setAttribute("checked","checked");
      handleAssetFilter(slides[1].getAttribute("value"))
    },
  };

  return (
    // filters part in right side in alerts page

    <div
      className={
        openFilterInMobile
          ? styles.filters_section + " " + styles.open
          : styles.filters_section
      }
    >
      <div className={styles.filters}>
        <div className={styles.filtersContainer}>
          <button
            className={styles.closeFilter + " block lg:hidden"}
            onClick={toggleFilterMenu}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h4>Filters</h4>
          <div className={styles.filtersApplaied}>
            <div className={styles.clearAll}>
              <p>Filters Applaied</p>
              <button onClick={clearAppliedFilters}>Clear All</button>
            </div>

            {/* container of filters that selected */}
            <ul className={styles.filtersApplaiedContainer}>
              {/* filter selected */}
              {appliedFilters.map((ele) => (
                <li>
                  {ele}
                  <span
                    onClick={() =>
                      setAppliedFilters((prev) =>
                        prev.filter((elm) => elm !== ele)
                      )
                    }
                  >
                    <img src={closeIcon} alt="delete" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* filter stock section */}
          <div className={styles.filtersStock}>
            <h5>Stock</h5>
            <div className={styles.filtersStockContainer}>
              {/* search input in filters */}
              <div className={styles.searchInput}>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="$  TICKER"
                />
                <img src={filterSearchIcon} alt="searchIcon" />
              </div>

              {/* Industry filter */}
              <div
                className={styles.industryFilter}
              >
                {/* industry filter title  */}
                <div className={styles.selectLabel}>
                  <h6>Industry</h6>
                </div>

                {/* industry filter body that toggled by click on title  */}
                <ul className={styles.selectItems}>
                  {industryFilter.map((ele, idx) => (
                    <li
                      key={idx}
                      onClick={() =>
                        setAppliedFilters((prev) =>
                          prev.includes(ele.title) ? prev : [...prev, ele.title]
                        )
                      }
                    >
                      <div className={styles.selectItem}>
                        <img src={ele.icon} alt={ele.title} />
                        <p>{ele.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Market Cap filter */}
              <div className={styles.checkBoxFilters}>
                <div
                  className={styles.MarketCapFilter}
                >
                  {/* Market Cap filter title  */}
                  <div className={styles.selectLabel} >
                    <h6>Market Cap</h6>
                  </div>

                  {/* Market Cap filter body that toggled by click on title  */}
                  <ul className={styles.checkItems}>
                    {marketCapSelect.map((ele, idx) => (
                      <li key={idx}>
                        <input
                          type={ele.type}
                          id={ele.id}
                          name={ele.name}
                          value={ele.label}
                          onChange={(e) => handleMarketCapFilter(e)}
                        />
                        <label htmlFor={ele.id}>{ele.label}</label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risk Level filter */}
                <div
                  className={styles.riskLevelFilter}
                >
                  {/* Risk Level filter title  */}
                  <div className={styles.selectLabel} >
                    <h6>Risk Level</h6>
                  </div>

                  {/* Risk Level filter body that toggled by click on title  */}
                  <ul className={styles.checkItems}>
                    {riskLevelSelect.map((ele, idx) => (
                      <li key={idx}>
                        <input
                          type={ele.type}
                          id={ele.id}
                          name={ele.name}
                          value={ele.label}
                          onChange={(e) => handleRiskLevelFilter(e)}
                        />
                        <label htmlFor={ele.id}>{ele.label}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.scrollSelect + " wheelSelect"}>
                {/* Strategy filter */}
                <div className={styles.strategyFilter + " strategyFilter"}>
                  <div className={styles.selectLabel}>
                    <h6>Strategy</h6>
                  </div>
                  <div className={styles.selectContainer }>
                    <div className={styles.activeBox}></div>
                    <div className="slider-container">
                      <Slider {...strategySettings}>
                        {strategySelect.map((ele, idx) => (
                          <div className={styles.selectItem} key={idx}>
                            <input
                              className="wheelSelectInput"
                              type={ele.type}
                              name={ele.name}
                              id={ele.id}
                              value={ele.label}
                            />
                            <label htmlhtmlFor={ele.id}>{ele.label}</label>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>

                {/* Asset filter */}
                <div className={styles.AssetFilter + " AssetFilter"}>
                  <div className={styles.selectLabel}>
                    <h6>Asset</h6>
                  </div>

                  <div className={styles.selectContainer}>
                  <div className={styles.activeBox}></div>

                    <div className="slider-container">
                      <Slider {...assetSettings}>
                        {AssetSelect.map((ele, idx) => (
                          <div className={styles.selectItem} key={idx}>
                            <input
                            className="wheelSelectInput"
                              type={ele.type}
                              name={ele.name}
                              id={ele.id}
                              value={ele.label}
                            />
                            <label htmlhtmlFor={ele.id}>{ele.label}</label>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* button that apply filters */}
          <div className="space-x-3 w-full flex justify-center">
            <button className={styles.saveFilterBtn}>Save Filter</button>
            <button className={styles.applyBtn}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
