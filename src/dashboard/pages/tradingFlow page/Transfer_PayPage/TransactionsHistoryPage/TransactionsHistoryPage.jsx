import React from 'react'
import styles from './TransactionsHistoryPage.module.css'
import CustomSelectMenu from '../../../../UI-components/CustomSelectMenu/CustomSelectMenu'
import searchIcon from "../../../../assets/search.svg";


const TransactionsHistoryPage = () => {

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

    // custom select menu options
    const transactionOptions = [
      { name: '20 March 2024' },
      { name: '21 March 2024' },
      { name: '22 March 2024' },
      { name: '23 March 2024' },
      { name: '24 March 2024' },
      { name: '25 March 2024' },
      { name: '26 March 2024' },
      { name: '27 March 2024' }
    ]

      // custom select menu options
  const methodOptions = [
    { name: '20 March 2024' },
    { name: '21 March 2024' },
    { name: '22 March 2024' },
    { name: '23 March 2024' },
    { name: '24 March 2024' },
    { name: '25 March 2024' },
    { name: '26 March 2024' },
    { name: '27 March 2024' }
  ]

    // custom select menu options
    const statusOptions = [
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
    <div className={styles.transaction_history_wrapper}>
      <h4>Date Range (Up to 90 days)</h4>

        

        <div className={styles.date_filter}>
          <p>Date</p>
          <div className=' w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-start gap-[15px] lg:gap-[40px]'>
          <CustomSelectMenu options={options} />  <div className={styles.dash}></div>  <CustomSelectMenu options={options} />
          </div>
        </div>

        <div className={styles.transaction_history_filter_container}>
          <div className={styles.searchInput}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search By.."
            />
            <img src={searchIcon} alt="searchIcon" />
          </div>

          <div className='flex flex-col lg:flex-row items-start gap-4'>
              <div className={styles.select_filters + " w-full lg:w-1/4"}>
                <CustomSelectMenu options={transactionOptions} />
                <CustomSelectMenu options={methodOptions} />
                <CustomSelectMenu options={statusOptions} />
              </div>
              <div className={styles.filtered_data + " w-full lg:w-3/4"}>
                <p>There are no transactions for this period.</p>
              </div>
          </div>
        </div>

    </div>
  )
}

export default TransactionsHistoryPage
