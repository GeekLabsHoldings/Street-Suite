import React from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchBarStyles from "../../components/searchBar/SearchBar.module.css";
import styles from "./TradingFlowPage.module.css"

import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";
import { NavLink } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts';


const state = {

  series: [{
    name: 'Website Blog',
    type: 'line',
    data: [440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390]
  }, {
    name: 'Social Media',
    type: 'column',
    data: [440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390, 440, 505, 414, 227, 413, 201, 352, 320, 257, 160, 200, 260, 330, 390]
  }],
  options: {
    chart: {
      height: "100%",
      toolbar: { // Hamburger menu at top
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      background: 'transparent'
    },
    colors: ["#53ACFF", "#53ACFF"],
    stroke: {
      width: [4, 1],
      curve: 'smooth',
    },

    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 74, 76, 78, 80, 82, 84, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110],

    xaxis: {
      show: false,
      labels: {
        show: false,
      }
    },
    // yaxis: {
    //   show: false,
    //   labels: {
    //     show: false,
    //   }
    // },

    plotOptions: {
      bar: {
        columnWidth: 1
      }
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
    },
    legend: {
      show: false,
    },
    theme: {
      mode: 'dark',
    }
  },


};


const TradingFlowPage = () => {


  return (
    <div className='w-full px-8'>

      <SearchBar  >
        <h2>Trading</h2>
        <div className={SearchBarStyles.notification_searchInput}>
          <div className={SearchBarStyles.navBar}>
            <ul>
              <li>
                <NavLink to="private-equities" className={SearchBarStyles.active}>Private Equities</NavLink>
              </li>
              <li>
                <NavLink to="Transfer&Pay">Transfer & Pay</NavLink>
              </li>
              <li>
                <NavLink to="privacy&security">Privacy & Security</NavLink>
              </li>
            </ul>
            <NavLink to="trading-history" className={SearchBarStyles.tradingHistory}>Trading History</NavLink>
          </div>
          <button className={SearchBarStyles.notificationBtn} type="button">
            <img src={notifIcon} alt="" />
            <span>6</span>
          </button>
        </div>
      </SearchBar>



      <SearchBar>
        <h5 className='text-nowrap text-3xl'>Your Portfolio</h5>

        <div className="w-full flex items-center justify-center gap-4">
          <div className={SearchBarStyles.searchInput}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search By.."
            />
            <img src={searchIcon} alt="searchIcon" />
          </div>

          <button className={SearchBarStyles.searchBtn}>Search</button>
        </div>
      </SearchBar>



      <div className={styles.trading_wrapper}>

        <div className={styles.account_chart}>
          <div className={styles.account_number} >
            <ul>
              <li><span>Account Number</span><span>659865</span></li>
              <li><span>Last Updated</span><span>11:56 PM GMT+2</span></li>
            </ul>
            <ul>
              <li><span>Total Cash </span><span>$100,546</span></li>
              <li><span>Stocks </span><span>265</span></li>
              <li><span>Options</span><span>100</span></li>
              <li><span>Total Cash </span><span>$100,546</span></li>
              <li><span>Stocks</span><span>265</span></li>
              <li><span>Options</span><span>100</span></li>
            </ul>
          </div>
          <div className={styles.chart}>
            <div className={styles.total_price}>
              <div className="flex items-center gap-12">
              <p>$ 128,7K</p>
              <div className={styles.total_price_direction}>
                <span>+ 463</span>
                <span><svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                </svg> (0.23 %)</span>
              </div>
              </div>
            </div>
            <div className={styles.chart_container}>
              <ReactApexChart options={state.options} series={state.series} height={300} />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default TradingFlowPage
