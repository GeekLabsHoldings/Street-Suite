import React from 'react'

import SearchBarStyles from "../../../components/searchBar/SearchBar.module.css";
import styles from "./TradingHistory.module.css"
import searchIcon from "../../../assets/search.svg";
import SearchBar from '../../../components/searchBar/SearchBar';
import { Link } from 'react-router-dom';
import CustomSelectMenu from '../../../UI-components/CustomSelectMenu/CustomSelectMenu';




const TradingHistory = () => {

    // custom select menu options
    const options = [
        { name: '20 March 2024' },
        { name: '21 March 2024' },
        { name: '22 March 2024' },
        { name: '23 March 2024' },
        { name: '24 March 2024' },
        { name: '25 March 2024' },
        { name: '26 March 2024' },
        { name: '27 March 2024' }
      ]

    return (
        <div >
            <SearchBar>
                <div className="flex gap-3 md:gap-8 flex-col-reverse md:flex-row w-full">

                    {/* sub title of page */}
                    <h5 className={styles.supTitle + ' text-nowrap text-xl md:text-3xl'}>Trading History</h5>

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


            <div className={styles.trading_history + " flex items-start flex-col lg:flex-row gap-8 pb-[50px]"}>

                {/* trading history table in trading history page */}
                <div className={styles.trading_history_table + " w-full lg:w-5/6"}>

                    {/* head of trading history table */}
                    <ul className={styles.table_head + " grid grid-cols-7"}>
                        <li>Equity Name</li>
                        <li>Buying Price</li>
                        <li>Current Price</li>
                        <li>Selling Price</li>
                        <li>Date Bought</li>
                        <li>Time Bought</li>
                        <li>Type</li>
                    </ul>

                    {/* body of trading history table  */}
                    <div className={styles.table_body + " flex flex-col gap-[1px]"}>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                        {/* row of trading history info of private equity  */}
                        <ul className="grid grid-cols-7 gap-[1px]">
                            <li>Private Equity 1</li>
                            <li>$ 200</li>
                            <li>$ 150</li>
                            <li>$ 150</li>
                            <li>20 March 2024</li>
                            <li>06:12:03 PM</li>
                            <li>Margin</li>
                        </ul>

                    </div>
                </div>

                {/* filter in trading history page that filters data of table */}
                <div className={styles.trading_history_filter + " w-full lg:w-1/6 "}>
                    <h6 className='!text-[--19px]'>Filter By</h6>

                    <div className={styles.drop_down_menu}>
                        <p>Date</p>
                        <CustomSelectMenu options={options} />
                    </div>
                    <div className={`!mb-[--sy-29px] ${styles.drop_down_menu}`}>
                        <p>Type</p>
                        <CustomSelectMenu options={options}/>
                    </div>

                    <button>Apply</button>
                    <button>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default TradingHistory
