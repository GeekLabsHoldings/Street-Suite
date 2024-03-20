import React from 'react'
import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
import styles from "./YourPortfolioPage.module.css"
import searchIcon from "../../../assets/search.svg";
import ReactApexChart from 'react-apexcharts';

import popularPadge from "../../../assets/popular-padge.png";
import companyImg from "../../../assets/companyImg.png"
import SearchBar from '../../../components/searchBar/SearchBar';
import { Link } from 'react-router-dom';


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
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: "100%",
          }
        }
      }
    ],
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

const state2 = {

  series: [{
    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
      5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
      48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
    ]
  }],
  options: {
    chart: {
      type: 'bar',
      toolbar: { // Hamburger menu at top
        show: false,
      },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: 0,
            to: 100,
            color: "#53ACFF"
          }, {
            from: -100,
            to: -46,
            color: '#A4A4A4'
          }, {
            from: -45,
            to: 0,
            color: '#A4A4A4'
          }]
        },
        columnWidth: '40%',
      }
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + "%";
        }
      }
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
        '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
        '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
        '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
        '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
        '2013-07-01', '2013-08-01', '2013-09-01'
      ],
      labels: {
        rotate: -90
      }
    },
    legend: {
      show: false,
    },
    theme: {
      mode: 'dark',
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
    },
  },

}

const YourPortfolioPage = () => {
    return (
        <>

            <SearchBar>
                <div className="flex gap-3 md:gap-8 flex-col-reverse md:flex-row w-full">
                    <h5 className={styles.supTitle + ' text-nowrap text-xl md:text-3xl'}>Your Portfolio</h5>

                    <div className="w-full flex items-center justify-center gap-4">
                        <div className={SearchBarStyles.searchInput + " w-full"}>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search By.."
                            />
                            <img src={searchIcon} alt="searchIcon" />
                        </div>

                        <button className={SearchBarStyles.searchBtn + " hidden md:flex"}>Search</button>
                    </div>
                </div>
            </SearchBar>

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
                        <div className="flex items-center gap-4 md:gap-12">
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
            <div className={styles.shares_equities}>
                <div className={styles.myShares}>
                    <h4 className='text-xl md:text-3xl mb-3'>My Shares</h4>
                    <div className={styles.mySharesCard}>
                        <div className={styles.my_positions}>
                            <p>My Positions</p>
                            <ul>
                                <li><a href="">Space X</a></li>
                                <li><a href="">Space X</a></li>
                                <li><a href="">Space X</a></li>
                                <li><a href="">Space X</a></li>
                                <li><a href="">Space X</a></li>
                                <li><a href="">Space X</a></li>
                            </ul>
                        </div>
                        <div className={styles.company_info_chart}>
                            <div className={styles.company_info}>
                                <div className={styles.companyName + " flex items-center justify-around  mb-10"}>
                                    <h6>SPACE X</h6>
                                    <span>
                                        $ 23
                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.67836 6.39421L7.36433 0.458374H0L3.67836 6.39421Z" fill="white" />
                                        </svg>
                                    </span>
                                </div>
                                <ul className='space-y-5'>
                                    <li>
                                        <span>Shares Bought Price</span>
                                        <span>$ 20</span>
                                    </li>
                                    <li>
                                        <span>Current Share Price</span>
                                        <span>$ 23</span>
                                    </li>
                                    <li>
                                        <span>total Number of Shares</span>
                                        <span>100</span>
                                    </li>
                                    <li>
                                        <span>Total wins/Losses</span>
                                        <span>
                                            $ 300
                                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.67836 6.39421L7.36433 0.458374H0L3.67836 6.39421Z" fill="white" />
                                            </svg>
                                        </span>
                                    </li>
                                    <li>
                                        <span>Total Amount</span>
                                        <span>$ 23,00</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col items-end w-full md:w-[55%]'>
                                <div className={styles.company_chart}>
                                    <ReactApexChart options={state2.options} series={state2.series} type="bar" height={200} width={"100%"} />
                                </div>
                                <div className={styles.number_of_sales}>
                                    <span>600</span>
                                    <p>People Bought <br />
                                        This Last Week</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.equities}>
                    <img src={popularPadge} alt="" className={styles.padge} />
                    <h6>Recommended Equities</h6>

                    <div className={styles.recommended_equities + " space-y-3"}>

                        <Link to="private-equity" className={styles.equity_item + " " + styles.Up}>
                            <img src={companyImg} alt="" />
                            <span>$ 190
                                <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                                </svg>
                            </span>
                        </Link>
                        <Link to="private-equity" className={styles.equity_item + " " + styles.Down}>
                            <img src={companyImg} alt="" />
                            <span>$ 190
                                <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                                </svg>
                            </span>
                        </Link>
                        <Link to="private-equity" className={styles.equity_item + " " + styles.Down}>
                            <img src={companyImg} alt="" />
                            <span>$ 190
                                <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                                </svg>
                            </span>
                        </Link>
                        <Link to="private-equity" className={styles.equity_item + " " + styles.Up}>
                            <img src={companyImg} alt="" />
                            <span>$ 190
                                <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                                </svg>
                            </span>
                        </Link>
                        <Link to="private-equity" className={styles.equity_item + " " + styles.Up}>
                            <img src={companyImg} alt="" />
                            <span>$ 190
                                <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                                </svg>
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default YourPortfolioPage
