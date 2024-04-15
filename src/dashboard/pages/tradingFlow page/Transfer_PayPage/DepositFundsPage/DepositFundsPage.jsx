import React from "react";
import styles from "./DepositFundsPage.module.css";
import methodFlag from "../../../../assets/method-flag.png";

import addIcon from "../../../../assets/add-icon.png";
import copyIcon from "../../../../assets/copy-icon.svg";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

// the Deposit Funds Page is sub page from Transfer & Pay Page
const DepositFundsPage = () => {
  const navigate = useNavigate();

  // function that will copy the text in bank transfer transaction section
  const copyText = (e) => {
    let copyText = $(e.target).parents("li").find("span").text();

    navigator.clipboard.writeText(copyText);

    // make the text of tooltip "copied !" when copy text
    $(e.target).parents("button").children(".myTooltip").text("Copied !");
  };

  // function that return text of tooltip to "copy"
  const outcopyText = (e) => {
    $(e.target).parents("button").children(".myTooltip").text("Copy");
  };

  return (
    <>
      {/* choose transfer method card  */}
      <div className={styles.choose_transfer_method_card}>
        {/* card header that contain {title & complete icon} */}
        <div className={styles.card_header}>
          <h4>Choose Transfer Method</h4>

          <div className={styles.complete_icon + " " + styles.completed}>
            <svg
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4.5L4.5 7L9.5 2"
                stroke-width="2.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
            <button>
              <img src={addIcon} alt="" /> Add More
            </button>
          </div>
        </div>

        {/* card header that contain {title & complete icon} */}
        <div className={styles.card_header + " mt-12 mb-4"}>
          <h4>Amount Details</h4>

          <div className={styles.complete_icon}>
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4.5L4.5 7L9.5 2"
                stroke-width="2.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* amount details of transfer  */}
        <div className={styles.amount_details}>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 items-start">
            <div className={styles.input_group + " w-full lg:w-[30%]"}>
              <label htmlFor="">Deposit Amount</label>
              <div className="flex gap-2 w-full">
                <input type="text" className=" w-full" />
                <span>USD</span>
              </div>
              
            </div>
            <div className={styles.input_group + " w-full lg:w-[40%]"}>
              <label htmlFor="">Transaction Reference Number</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.check_input_group + " py-3 lg:py-6"}>
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2">
                  {" "}
                  Make this a Reaccuring transaction
                </label>
                <br />
              </div>
        </div>

        {/* confirm Details btn in transfer method section at Deposit Funds Page */}
        <button className={styles.confirm_btn}>Confirm Details</button>
      </div>
      {/* end of choose transfer method card  */}

      {/* bank transfer transaction card  */}
      <div className={styles.bank_transfer_transaction_card}>
        {/* card header that contain ( title and little paragraph) */}
        <div className={styles.card_header}>
          <h4>Bank Wire Transfer Transaction</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        {/* card body that contain lists of bank transfer transaction details */}
        <div
          className={
            styles.card_body +
            " grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-8 lg:gap-y-16 mb-8 lg:mb-20"
          }
        >
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
            <li>Street Suite </li>
            <li>Some Data</li>
            <li>Some data with numbers</li>
            <li>54FDGI5</li>
          </ul>
          <ul>
            <li>Bank Account Number </li>
            <li className="flex items-center justify-between">
              {/* span that will be copied */}
              <span>6548653684</span>

              {/* copy icon that copy text of span */}
              <div className={styles.tooltip}>
                <button
                  onClick={(e) => copyText(e)}
                  onMouseOut={(e) => outcopyText(e)}
                >
                  <img src={copyIcon} alt="" />
                  <div className={styles.tooltiptext + " myTooltip"}>Copy</div>
                </button>
              </div>
            </li>
          </ul>
          <ul>
            <li>SWIFT/BIC Code </li>
            <li>CJD6546816</li>
          </ul>
          <ul>
            <li>Payment Reference </li>
            <li className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                {/* spans that will be copied */}
                <span>
                  358681864 <br />
                </span>
                <span>First Name Last Name</span>
              </div>

              {/* copy icon that copy text of span */}
              <div className={styles.tooltip}>
                <button
                  onClick={(e) => copyText(e)}
                  onMouseOut={(e) => outcopyText(e)}
                >
                  <img src={copyIcon} alt="" />
                  <div className={styles.tooltiptext + " myTooltip"}>Copy</div>
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Complete Transaction btn in transfer method section at Deposit Funds Page */}
        <button
          className={styles.confirm_btn}
          onClick={() =>
            navigate("/dashboard/trading/transfer&pay/seccssful-transaction")
          }
        >
          Complete Transaction
        </button>
      </div>
    </>
  );
};

export default DepositFundsPage;
