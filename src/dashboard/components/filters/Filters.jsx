import React, { useState } from "react";
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
import filterIcon from "../../assets/filterIcon.png"

const industryFilter = [
  {icon: healthIcon , title: "Health Car"},
  {icon: ITIcon , title: "IT"},
  {icon: communicationIcon , title: "Communication"},
  {icon: discretionaryIcon , title: "Discretionary"},
  {icon: consumerIcon , title: "Consumer"},
  {icon: energyIcon , title: "Energy"},
  {icon: financialsIcon , title: "Financials"},
  {icon: industrialsIcon , title: "Industrials"},
  {icon: matrialsIcon , title: "Matrials"},
  {icon: estateIcon , title: "Real Estate"},
  {icon: utilitiesIcon , title: "Utilities"}
]

const strategySelect = [
  {type:"radio" , name:"Strategy-Filter" , id:"Big-Option-Buys" , label:"Big Option Buys"},
  {type:"radio" , name:"Strategy-Filter" , id:"Marger-Arbitrage" , label:"Marger Arbitrage"},
  {type:"radio" , name:"Strategy-Filter" , id:"Short-Reports" , label:"Short Reports"},
]

const AssetSelect = [
  {type:"radio" , name:"Asset-Filter" , id:"stocks" , label:"Stocks"},
  {type:"radio" , name:"Asset-Filter" , id:"sptions" , label:"Options"},
  {type:"radio" , name:"Asset-Filter" , id:"future" , label:"Future"},
]

function Filters() {
  const [industryFilterIsOpen, setIndustryFilterIsOpen] = useState(true);
  const [marketCapFilterIsOpen, setMarketCapFilterIsOpen] = useState(true);
  const [riskLevelFilterIsOpen, setRiskLevelFilterIsOpen] = useState(true);
  const [currentcheckedAsset , setcurrentcheckedAsset] = useState(1);
  const [currentcheckedStrategy , setcurrentcheckedStrategy] = useState(1);
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);


  const toggleindustryFilter = () => {
    setIndustryFilterIsOpen(!industryFilterIsOpen);
  };

  const toggleMarketCapFilter = () => {
    setMarketCapFilterIsOpen(!marketCapFilterIsOpen);
  };

  const toggleRiskLevelFilter = () => {
    setRiskLevelFilterIsOpen(!riskLevelFilterIsOpen);
  };

  const toggleFilterMenu = () => {
    setFilterMenuIsOpen(!filterMenuIsOpen);
  }

  return (
    <div className={filterMenuIsOpen? styles.filters+" "+styles.open : styles.filters} >
      <button className={styles.toggleFilters} onClick={toggleFilterMenu}>
        <img src={filterIcon} alt="" />
      </button>
      <div className={styles.filtersContainer}>



      <h4>Filters</h4>
      <div className={styles.filtersApplaied}>
        <div className={styles.clearAll}>
          <p>Filters Applaied</p>
          <button>Clear All</button>
        </div>
        <ul className={styles.filtersApplaiedContainer}>
          <li>
            Real State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
          <li>
            Real State State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
          <li>
            Real State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
          <li>
            Real State State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
          <li>
            Real State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
          <li>
            Real State State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
          <li>
            Real State State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
          <li>
            Real State
            <span>
              <img src={closeIcon} alt="delete" />
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.filtersStock}>
        <h5>Stock</h5>
        <div className={styles.filtersStockContainer}>
          <div className={styles.searchInput}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="$  TICKER"
            />
            <img src={filterSearchIcon} alt="searchIcon" />
          </div>

          <div
            className={
              industryFilterIsOpen
                ? styles.industryFilter + " " + styles.open
                : styles.industryFilter
            }
          >
            <div className={styles.selectLabel} onClick={toggleindustryFilter}>
              <img src={arrowIcon} alt="" />
              <h6>Industry</h6>
            </div>
            <ul className={styles.selectItems}>
              {industryFilter.map((ele,idx)=>(
                <li key={idx}>
                <div className={styles.selectItem}>
                  <img src={ele.icon} alt={ele.title} />
                  <p>{ele.title}</p>
                </div>
              </li>
              ))}
              
            </ul>
          </div>

          <div className={styles.checkBoxFilters}>
            <div
              className={
                marketCapFilterIsOpen
                  ? styles.MarketCapFilter + " " + styles.open
                  : styles.MarketCapFilter
              }
            >
              
                <div
                  className={styles.selectLabel}
                  onClick={toggleMarketCapFilter}
                >
                  <img src={arrowIcon} alt="" />
                  <h6>Market Cap</h6>
                </div>
                <ul className={styles.checkItems}>
                  <li>
                    <input
                      type="radio"
                      id="Micro"
                      name="Market-Cap"
                      value="Micro"
                    />
                    <label htmlFor="Micro">Micro</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Small"
                      name="Market-Cap"
                      value="Small"
                    />
                    <label htmlFor="Small">Small</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Larg"
                      name="Market-Cap"
                      value="Larg"
                    />
                    <label htmlFor="Larg">Larg</label>
                  </li>
                </ul>
            </div>

            <div
              className={
                riskLevelFilterIsOpen
                  ? styles.riskLevelFilter + " " + styles.open
                  : styles.riskLevelFilter
              }
            >
              <div
                className={styles.selectLabel}
                onClick={toggleRiskLevelFilter}
              >
                <img src={arrowIcon} alt="" />
                <h6>Risk Level</h6>
              </div>
              <ul className={styles.checkItems}>
                <li>
                  <input type="radio" id="Low" name="Risk-Level" value="Low" />
                  <label htmlFor="Low">Low Risk</label>
                </li>
                <li>
                  <input type="radio" id="Mid" name="Risk-Level" value="Mid" />
                  <label htmlFor="Mid">Mid Risk</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="High"
                    name="Risk-Level"
                    value="High"
                  />
                  <label htmlFor="High">High Risk</label>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.scrollSelect}>
            <div className={styles.strategyFilter}>
              <div className={styles.selectLabel}>
                <h6>Strategy</h6>
              </div>
              <div className={styles.selectContainer}>
                {strategySelect.map((ele,idx)=>(
                  <div className={ styles.selectItem} key={idx}>
                  <input type={ele.type} name={ele.name} id={ele.id} checked={ idx === currentcheckedStrategy ? "checked" : false}  onChange={()=> setcurrentcheckedStrategy(idx)} />
                  <label htmlhtmlFor={ele.id}>{ele.label}</label>
                </div>
                ))}
                


              </div>
            </div>
            <div className={styles.AssetFilter}>
              <div className={styles.selectLabel}>
                <h6>Asset</h6>
              </div>

              <div className={styles.selectContainer}>
                {AssetSelect.map((ele,idx)=>(
                  <div className={ styles.selectItem} key={idx}>
                  <input type={ele.type} name={ele.name} id={ele.id} checked={ idx === currentcheckedAsset ? "checked" : false}  onChange={()=> setcurrentcheckedAsset(idx)} />
                  <label htmlhtmlFor={ele.id}>{ele.label}</label>
                </div>
                ))}
                


              </div>

            </div>
          </div>
        </div>
      </div>

      <button className={styles.applyBtn}>Apply</button>
      </div>
    </div>
  );
}

export default Filters;
