import React from 'react'
import styles from './WithdrawFundsPage.module.css'
import methodFlag from "../../../../assets/method-flag.png"
import addIcon from "../../../../assets/add-icon.png"


const WithdrawFundsPage = () => {
  return (
    // choose withdraw method card 
    <div className={styles.withdraw_funds}>

      {/* card header that contain {title & complete icon} */}
      <div className={styles.card_header}>
        <h4>Choose Withdraw Method</h4>

        <div className={styles.complete_icon + " " + styles.completed}>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4.5L4.5 7L9.5 2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      {/* transfer methods that user will choose from them and add more button */}
      <div className={styles.transfer_methods}>
      <div className={styles.method_item}>
            <input type="radio" name="transfer-methods" id="transfer-methods" />
            <div>
              <p>Wire</p>
              <p>Wire - HSBC</p>
            </div>
            <img src={methodFlag} alt="" />
          </div>
          <div className={styles.method_item}>
            <input type="radio" name="transfer-methods" id="transfer-methods2" />
            <div>
              <p>Wire</p>
              <p>Wire - HSBC</p>
            </div>
            <img src={methodFlag} alt="" />
          </div>
          <div className={styles.method_item}>
            <input type="radio" name="transfer-methods" id="transfer-methods3" />

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

      {/* card header that contain {title & complete icon} */}
      <div className={styles.card_header}>
        <h4>Wire funds to the following bank:</h4>

        <div className={styles.complete_icon + " " + styles.completed}>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4.5L4.5 7L9.5 2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div className={styles.method_item}>
        <div>
          <p>Wire</p>
          <p>Wire - HSBC</p>
        </div>
        <img src={methodFlag} alt="" />
      </div>

      <div className={styles.wire_amount}>
        <h5>Wire the following amount:</h5>


        <div className=' w-full flex flex-col lg:flex-row gap-[15px] lg:gap-8'>

          <ul className={styles.available_cash + " w-full lg:w-3/5 space-y-4"}>
            <li>
              <p>Cash Available for Withdrawal:
                <span>(with margin loan)</span>
              </p>
              <p>100,000
                <span>USD</span>
              </p>
            </li>
            <li>
              <p>Cash Available for Withdrawal:
                <span>(with margin loan)</span>
              </p>
              <p>00
                <span>USD</span>
              </p>
            </li>
          </ul>

          {/* amount details of transfer  */}
          <div className={styles.amount_details + " w-full lg:w-2/5"}>
            <div className={styles.input_group + ""}>
              <label htmlFor="">Withdrawal Amount</label>
              <div className='flex gap-2 w-full'>
                <input type="text" className=' w-full' />
                <span>USD</span>
              </div>
              <div className={styles.check_input_group + " py-3 lg:py-6"}>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label for="vehicle2"> Make this  a Reaccuring transaction</label><br />
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* confirm button */}
      <button className={styles.confirm_btn}>Confirm Details</button>
    </div>
  )
}

export default WithdrawFundsPage