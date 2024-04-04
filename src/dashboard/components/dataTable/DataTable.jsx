import React from 'react'
import $ from 'jquery';
import styles from './DataTable.module.css'
import img1 from '../../assets/table/Group.svg'
import img2 from '../../assets/table/Vector2.svg'
import img3 from '../../assets/table/Vector.svg'
import img4 from '../../assets/table/Group 63.svg'


// array of data that will be show in the table in alerts page
const tableData = [
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: 'Low Risk' },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: 'Low Risk' },
]



function DataTable() {


  // function that open & close collaps 
  const openCollaps = (e) => {

    // slide up all collaps are open
    // $(".tableItemCollaps").not($(e.target.offsetParent).siblings(".tableItemCollaps")).slideUp(300);

    // toggle slide collaps by click
    $(e.target).parents(".tableItem").siblings(".tableItemCollaps").slideToggle(300);
  }


  return (

    // alerts table in alerts page 
    <div className={styles.table}>

      {/* make map on array of tableData to show all data in table as a rows */}
      {tableData.map((ele, idx) => (
        <div className={styles.tableItemContainer}>

          {/* collaps header if i click on it , collaps will toggle slide open */}
          <ul className={styles.tableItem + " tableItem"} key={idx} onClick={(e) => { openCollaps(e, idx) }}>
            <li>
              <img src={img1} alt="" />
              <p>{ele.value1}</p>
            </li>
            <li>
              <img src={img2} alt="" />
              <p>{ele.value2}</p>
            </li>
            <li>
              <img src={img3} alt="" />
              <p className={ele.value3 > 0 ? styles.UP : styles.DOWN}>{ele.value3} %</p>
            </li>
            <li>
              <img src={img4} alt="" />
              <p>{ele.value4}</p>
            </li>
          </ul>

          {/* collaps body that will be show and hidden by click on collaps */}
          <div className={`${styles.tableItemCollaps} tableItemCollaps`}>
            <p><span>${ele.value1}</span> just announced an acquisition of <span>$NFLX</span> at <span>${ele.value2} B</span>.</p>
            <p>This is an <a href="">arbitage opportunity</a>, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal success is % and therebefore the recommended play <a href="">long/short</a> $ABC</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default DataTable