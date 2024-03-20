import React from 'react'
import styles from './Transfer_PayPage.module.css'
import ProgressBar from '@ramonak/react-progress-bar'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Transfer_PayPage = () => {
    return (
        <div>
            <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row w-full items-center lg:mb-12">
                <h5 className={styles.supTitle + ' text-nowrap text-xl lg:text-3xl w-1/5'}>Private Equity</h5>

                <ProgressBar
                    completed={10}
                    bgColor="#53ACFF"
                    height="8px"
                    baseBgColor="rgba(20, 20, 20, 1)"
                    labelColor="#fff"
                    transitionDuration="1"
                    animateOnRender
                    maxCompleted={100}
                    customLabel="10%  Completed "
                    className={styles.ProgressBar + ' w-4/5'}
                />

            </div>


            <div className="flex items-start justify-center gap-3 lg:gap-8">

                <ul className={styles.transfer_pay_side_nav + ' transfer_pay_side_nav space-y-4 w-1/5'}>
                    <li>
                        <NavLink to="deposit-funds">Deposit Funds</NavLink>
                    </li>
                    <li>
                        <NavLink to="withdraw-funds">Withdraw Funds</NavLink>
                    </li>
                    <li>
                        <NavLink to="transactions-history">Transactions History</NavLink>
                    </li>
                </ul>

                <div className={styles.transfer_pay_wrapper + " w-4/5"}>

                    <Outlet />

                </div>

            </div>
        </div>
    )
}

export default Transfer_PayPage