import React from 'react'
import styles from "./SuccessfulTransactionPage.module.css"
import { Link } from 'react-router-dom'

import mailIcon from "../../../../assets/mail-icon.svg"
import callIcon from "../../../../assets/call-icon.svg"
import chatIcon from "../../../../assets/chat-icon.svg"

const SuccessfulTransactionPage = () => {
    return (
        <div className={styles.SuccessfulTransactionPage}>
            <h4>SUCCESSFUL<br /> TRANSACTION</h4>
            <div className='flex items-end gap-10'>
                <div className='w-1/2'>
                    <p>
                        We are pleased to inform you that we have successfully received your deposit!
                    </p>
                    <p>
                        We kindly ask for your understanding as it may take up to 34 hours for the deposited amount to be fully reflected in your account.
                        Rest assured, our team is diligently working to ensure a swift processing of your transaction.
                    </p>

                    <h6>If you have any questions or concerns feel free to <Link>contact us</Link></h6>
                </div>
                <div className='w-1/2 grid grid-cols-2 gap-x-12 gap-y-12'>
                    <ul>
                        <li>Catch us on </li>
                        <li>Sunday through Thursday</li>
                    </ul>
                    <ul>
                        <li>Between</li>
                        <li>9-5 EST</li>
                    </ul>
                    <ul>
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
            <button className={styles.go_home_btn}>Go Home</button>
        </div>
    )
}

export default SuccessfulTransactionPage
