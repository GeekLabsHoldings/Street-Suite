import React from 'react'
import styles from "./SuccessfulTransactionPage.module.css"
import { Link } from 'react-router-dom'

import mailIcon from "../../../../assets/mail-icon.svg"
import callIcon from "../../../../assets/call-icon.svg"
import chatIcon from "../../../../assets/chat-icon.svg"



// Successful Transaction Page is child page of Transfer & Pay Page that will appear when transaction completed successfully
const SuccessfulTransactionPage = () => {

    return (
        <div className={styles.SuccessfulTransactionPage}>

            {/* main message */}
            <h4>SUCCESSFUL<br /> TRANSACTION</h4>
            <div className='flex flex-col lg:flex-row items-end gap-10'>

                {/* some paragraphs in Successful Transaction Page */}
                <div className='w-full lg:w-1/2'>
                    <p>
                        We are pleased to inform you that we have successfully received your deposit!
                    </p>
                    <p>
                        We kindly ask for your understanding as it may take up to 34 hours for the deposited amount to be fully reflected in your account.
                        Rest assured, our team is diligently working to ensure a swift processing of your transaction.
                    </p>

                    <h6>If you have any questions or concerns feel free to <Link>contact us</Link></h6>
                </div>

                {/* lists of some info about st suite */}
                <div className='w-full lg:w-1/2 flex flex-wrap gap-x-4 gap-y-6 lg:gap-x-12 :gap-y-12'>
                    <ul className='w-[60%]'>
                        <li>Catch us on </li>
                        <li>Sunday through Thursday</li>
                    </ul>
                    <ul className='w-[30%]'>
                        <li>Between</li>
                        <li>9-5 EST</li>
                    </ul>
                    <ul className='w-full'>
                        <li>You can reach us on</li>
                        <li>
                            <span><img src={mailIcon} alt="" /></span>
                            <span>stsuite@gmail.com</span>
                        </li>
                        <li>
                            <span><img src={callIcon} alt="" /></span>
                            <span>+02  015698564</span>
                        </li>
                        <li>
                            <span><img src={chatIcon} alt="" /></span>
                            <span>Live Chat</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* button will take you to home page*/}
            <Link to="/trading" className={styles.go_home_btn}>Go Home</Link>
        </div>
    )
}

export default SuccessfulTransactionPage
