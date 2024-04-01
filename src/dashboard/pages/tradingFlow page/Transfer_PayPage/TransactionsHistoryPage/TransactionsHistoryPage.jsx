import React from 'react'
import styles from './TransactionsHistoryPage.module.css'
import CustomSelectMenu from '../../../../UI-components/CustomSelectMenu/CustomSelectMenu'

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

  return (
    <div className={styles.transaction_history_wrapper}>
      <h4>Date Range (Up to 90 days)</h4>

      <div className={styles.date_filter}>
        
        <p>Date</p>

        <div className='w-1/2 grid grid-cols-2 gap-[45px]'>
          <CustomSelectMenu options={options} />  <CustomSelectMenu options={options} />
        </div>

      </div>
    </div>
  )
}

export default TransactionsHistoryPage
