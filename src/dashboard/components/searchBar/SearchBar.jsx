import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";
import { NavLink } from "react-router-dom";

function SearchBar({children}) {
  return (
    <div className={styles.SearchBar}>
      <h2>Alerts</h2>
      {/* <div className={styles.notification_searchInput}>
        <div className={styles.searchInput}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search By.."
          />
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <button className={styles.notificationBtn} type="button">
          <img src={notifIcon} alt="" />
          <span>6</span>
        </button>
      </div> */}
      <div className={styles.navBar}>
        <ul>
          <li>
            <NavLink to="private-equities" className={styles.active}>Private Equities</NavLink>
          </li>
          <li>
            <NavLink to="Transfer&Pay">Transfer & Pay</NavLink>
          </li>
          <li>
            <NavLink to="privacy&security">Privacy & Security</NavLink>
          </li>
        </ul>
        <NavLink to="trading-history" className={styles.tradingHistory}>Trading History</NavLink>
      </div>
    </div>
  );
}

export default SearchBar;
