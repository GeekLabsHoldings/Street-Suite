import React from 'react'
import styles from "./DepositFundsPage.module.css"
import methodFlag from "../../../../assets/method-flag.png"

import addIcon from "../../../../assets/add-icon.png"
import copyIcon from "../../../../assets/copy-icon.svg"

const DepositFundsPage = () => {

    return (
        <>

            <div className={styles.choose_transfer_method_card}>
                <div className={styles.card_header}>
                    <h4>Choose Transfer Method</h4>

                    <div className={styles.complete_icon + " " + styles.completed}>
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4.5L4.5 7L9.5 2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className={styles.transfer_methods}>
                    <div className={styles.method_item + " " + styles.chosen}>
                        <div>
                            <p>Wire</p>
                            <p>Wire - HSBC</p>
                        </div>
                        <img src={methodFlag} alt="" />
                    </div>
                    <div className={styles.method_item}>
                        <div>
                            <p>Wire</p>
                            <p>Wire - HSBC</p>
                        </div>
                        <img src={methodFlag} alt="" />
                    </div>
                    <div className={styles.method_item}>
                        <div>
                            <p>Wire</p>
                            <p>Wire - HSBC</p>
                        </div>
                        <img src={methodFlag} alt="" />
                    </div>
                    <div className={styles.add_more}>
                        <button><img src={addIcon} alt="" />  Add More</button>
                    </div>
                </div>

                <div className={styles.card_header + " mt-12 mb-4"}>
                    <h4>Amount Details</h4>

                    <div className={styles.complete_icon}>
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4.5L4.5 7L9.5 2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className={styles.amount_details}>
                    <div className='flex gap-8 items-start'>
                        <div className={styles.input_group + " w-[30%]"}>
                            <label htmlFor="">Deposit Amount</label>
                            <div className='flex gap-2 w-full'>
                                <input type="text" className=' w-full' />
                                <span>USD</span>
                            </div>
                        </div>
                        <div className={styles.input_group + " w-[40%]"}>
                            <label htmlFor="">Transaction Reference Number</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.check_input_group + " py-6"}>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label for="vehicle2"> Make this  a Reaccuring transaction</label><br />
                    </div>
                </div>

                <button className={styles.confirm_btn}>Confirm Details</button>

            </div>

            <div className={styles.bank_transfer_transaction_card}>
                <div className={styles.card_header}>
                    <h4>Bank Wire Transfer Transaction</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className={styles.card_body + " grid grid-cols-3 gap-x-8 gap-y-16 mb-20"}>
                    <ul>
                        <li>Wire Funds to Account Title </li>
                        <li>Street Suite</li>
                        <li>Some Data</li>
                        <li>Some data with numbers</li>
                        <li>54FDGI5</li>
                    </ul>
                    <ul>
                        <li>ABA Routing Number </li>
                        <li>003548765</li>
                    </ul>
                    <ul>
                        <li>Beneficiary Bank</li>
                        <li>Street Suite  </li>
                        <li>Some Data</li>
                        <li>Some data with numbers</li>
                        <li>54FDGI5</li>
                    </ul>
                    <ul>
                        <li>Bank Account Number </li>
                        <li><span>6548653684</span> <a href=""><img src={copyIcon} alt="" /></a></li>
                    </ul>
                    <ul>
                        <li>SWIFT/BIC Code </li>
                        <li>CJD6546816</li>
                    </ul>
                    <ul>
                        <li>Payment Reference </li>
                        <li>358681864</li>
                        <li><span>First Name Last Name</span> <a href=""><img src={copyIcon} alt="" /></a></li>
                    </ul>
                </div>

                <button className={styles.confirm_btn}>Confirm Details</button>

            </div>

        </>
    )
}

export default DepositFundsPage
