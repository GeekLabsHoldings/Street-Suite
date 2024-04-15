import React from 'react'
import styles from './Transfer_PayPage.module.css'
import ProgressBar from '@ramonak/react-progress-bar'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Transfer_PayPage = () => {

const pathname = useLocation().pathname
console.log(pathname);


    return (
        
        <div className='flex flex-col lg:flex-row lg:gap-12 items-start'>

            <div className="flex flex-col items-start justify-center gap-[12px] lg:gap-[32px] w-full lg:w-1/4">

                {/* Title of parent Page */}
                <h5 className={styles.supTitle + ' text-nowrap text-xl lg:text-3xl'}>
                    Transfer & Pay
                </h5>


                {/* list of navlinks that navigate to sub pages in Transfer & Pay page*/}
                <ul className={styles.transfer_pay_side_nav + ' transfer_pay_side_nav lg:space-y-4 w-full'}>
                    <li>
                        <NavLink to="deposit-funds" className={pathname === "/dashboard/trading/transfer&pay" ? "active":" "}>Deposit Funds</NavLink>
                    </li>
                    <li>
                        <NavLink to="withdraw-funds">Withdraw Funds</NavLink>
                    </li>
                    <li>
                        <NavLink to="transactions-history">Transactions History</NavLink>
                    </li>
                </ul>



            </div>

            <div className="flex flex-col w-full lg:w-3/4 items-center mb-12 lg:mt-8 lg:gap-[60px]">

                {/* progress bar in Transfer & Pay page */}
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
                    className={styles.ProgressBar + ' w-full '}
                />

                <div className={styles.transfer_pay_wrapper + " w-full"}>

                    {/* sub pages will appear here */}
                    <Outlet />

                </div>

            </div>

        </div>
    )
}

export default Transfer_PayPage