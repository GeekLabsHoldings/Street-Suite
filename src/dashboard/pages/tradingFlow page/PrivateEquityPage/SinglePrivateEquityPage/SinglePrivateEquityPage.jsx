import React from 'react'
import styles from "./SinglePrivateEquityPage.module.css"
import companyImg from "../../../../assets/companyImg.png"

import { Link, NavLink } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';


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


const SinglePrivateEquityPage = () => {
    return (
        <div className={styles.want_share + " w-full flex flex-col lg:flex-row gap-[10%]"}>
            <div className={styles.company_details + " w-full lg:w-[30%]"}>
                <div className={styles.company_details_header}>
                    <img src={companyImg} alt="" className=' !w-[--146px]'/>
                    <span className={styles.total_price_direction}>$ 190
                        <svg width="30" height="23" viewBox="0 0 30 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="white" />
                        </svg>
                    </span>
                </div>
                <div className={styles.company_details_body}>
                    <ul className='space-y-[0.7vw] pt-4'>
                        <li>
                            <span>Name:</span>
                            <span>Logoipsum</span>
                        </li>
                        <li>
                            <span>Industry:</span>
                            <span>Finance</span>
                        </li>
                        <li>
                            <span>Value:</span>
                            <span>$200 Million</span>
                        </li>
                        <li>
                            <span>Value:</span>
                            <span>$200 Million</span>
                        </li>
                        <li>
                            <span>Value:</span>
                            <span>$200 Million</span>
                        </li>
                        <li>
                            <span>Value:</span>
                            <span>$200 Million</span>
                        </li>
                        <li>
                            <span>Funding Round:</span>
                            <span>Angel</span>
                        </li>
                        <li>
                            <span>Financial Data:</span>
                            <span> <Link>Read more <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.909091 0C0.407018 0 0 0.44772 0 1V10C0 10.5523 0.407018 11 0.909091 11H9.09091C9.593 11 10 10.5523 10 10V6.5C10 6.22386 9.79645 6 9.54545 6C9.29445 6 9.09091 6.22386 9.09091 6.5V10H0.909091V1H4.09091C4.34195 1 4.54545 0.77614 4.54545 0.5C4.54545 0.22386 4.34195 0 4.09091 0H0.909091ZM9.86691 0.14645C9.91045 0.19439 9.94336 0.24964 9.96555 0.30861C9.98736 0.36669 9.99964 0.4303 10 0.497V0.5V3.5C10 3.77614 9.79645 4 9.54545 4C9.29445 4 9.09091 3.77614 9.09091 3.5V1.70711L4.41232 6.85355C4.23481 7.04882 3.94701 7.04882 3.7695 6.85355C3.59198 6.65829 3.59198 6.34171 3.7695 6.14645L8.44809 1H6.81818C6.56715 1 6.36364 0.77614 6.36364 0.5C6.36364 0.22386 6.56715 0 6.81818 0H9.54536C9.607 0 9.66582 0.01349 9.71945 0.03794C9.77309 0.06234 9.82327 0.09851 9.86691 0.14645Z" fill="#53ACFF" />
                            </svg></Link> </span>
                        </li>
                        <li>
                            <span>Financial Data:</span>
                            <span><Link>Read more <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.909091 0C0.407018 0 0 0.44772 0 1V10C0 10.5523 0.407018 11 0.909091 11H9.09091C9.593 11 10 10.5523 10 10V6.5C10 6.22386 9.79645 6 9.54545 6C9.29445 6 9.09091 6.22386 9.09091 6.5V10H0.909091V1H4.09091C4.34195 1 4.54545 0.77614 4.54545 0.5C4.54545 0.22386 4.34195 0 4.09091 0H0.909091ZM9.86691 0.14645C9.91045 0.19439 9.94336 0.24964 9.96555 0.30861C9.98736 0.36669 9.99964 0.4303 10 0.497V0.5V3.5C10 3.77614 9.79645 4 9.54545 4C9.29445 4 9.09091 3.77614 9.09091 3.5V1.70711L4.41232 6.85355C4.23481 7.04882 3.94701 7.04882 3.7695 6.85355C3.59198 6.65829 3.59198 6.34171 3.7695 6.14645L8.44809 1H6.81818C6.56715 1 6.36364 0.77614 6.36364 0.5C6.36364 0.22386 6.56715 0 6.81818 0H9.54536C9.607 0 9.66582 0.01349 9.71945 0.03794C9.77309 0.06234 9.82327 0.09851 9.86691 0.14645Z" fill="#53ACFF" />
                            </svg></Link></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.want_share_chart + ' w-full flex flex-col lg:w-[60%] space-y-6'}>
                <div className={styles.want_share_chart_header}>
                    <h5>Want  A Share?</h5>
                    <div className={styles.number_of_sales}>
                        <span className=' !text-[--20px] !font-bold'>600</span>
                        <p className=' !font-bold !text-[--11px]'>People Bought <br />
                            This Last Week</p>
                    </div>
                </div>
                <div className={styles.want_share_chart_body + " h-full"}>
                    <ReactApexChart options={state2.options} series={state2.series} type="bar" height={"100%"} width={"100%"} />
                </div>
                <div className={styles.want_share_chart_footer}>
                    <div className='flex items-start justify-between gap-6'>
                        <div className={styles.input_group + " w-1/2 lg:w-[35%]"}>
                            <label htmlFor="">Shares</label>
                            <input type="text" />
                        </div>
                        <div className={styles.input_group + " w-1/2 lg:w-auto"}>
                            <label htmlFor="">Offer A Price</label>
                            <input type="text" />
                            <span>*Min amount $100</span>
                        </div>
                    </div>
                    <div className={styles.actions + " space-y-3"}>
                        <button>Buy</button>
                        <button>Sell</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePrivateEquityPage
