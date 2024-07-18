import React, { useEffect, useState } from "react";
import $ from "jquery";
import styles from "./DataTable.module.css";
import img1 from "../../assets/table/Group.svg";
import img2 from "../../assets/table/Vector2.svg";
import img3 from "../../assets/table/Vector.svg";
import img4 from "../../assets/table/Group 63.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// array of data that will be show in the table in alerts page
const tableData = [
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "0.25", value4: "Low Risk" },
  { value1: "AMZN", value2: "200", value3: "-0.25", value4: "Low Risk" },
];

async function getAlerts() {
  const response = await axios.get("https://abdulrahman.onrender.com/alerts/");
  console.log(response.data);
  return response.data;
}

function DataTable() {
  // const [alerts, setAlerts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://abdulrahman.onrender.com/alerts/")
  //     .then((res) => {
  //       console.log(res.data);
  //       setAlerts(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ["alerts"],
    queryFn: getAlerts,
    refetchInterval: 1000,
  });

  // function that open & close collaps
  const openCollaps = (e) => {
    // slide up all collaps are open
    // $(".tableItemCollaps").not($(e.target.offsetParent).siblings(".tableItemCollaps")).slideUp(300);

    // toggle slide collaps by click
    $(e.target)
      .parents(".tableItem")
      .siblings(".tableItemCollaps")
      .slideToggle(300);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    // alerts table in alerts page
    <div className={styles.table}>
      {/* make map on array of tableData to show all data in table as a rows */}
      {data.map((ele, idx) => (
        <div className={styles.tableItemContainer} key={idx}>
          {/* collaps header if i click on it , collaps will toggle slide open */}
          <ul
            className={styles.tableItem + " tableItem"}
            key={idx}
            onClick={(e) => {
              openCollaps(e, idx);
            }}
          >
            <li>
              <img src={img1} alt="" />
              <p>{ele.ticker}</p>
            </li>
            {/* <li>
              <img src={img2} alt="" />
              <p>{ele.value2}</p>
            </li> */}
            <li>
              <img src={img3} alt="" />
              <p
                className={
                  ele.risk_level == "Bearish"
                    ? styles.DOWN
                    : ele.risk_level == "Bullish"
                    ? styles.UP
                    : ""
                }
              >
                {`${Number(ele.value).toFixed(3)}  ${
                  ele.strategy.split(" ")[0]
                }`}
              </p>
            </li>
            <li>
              <img src={img4} alt="" />
              <p>{ele.risk_level}</p>
            </li>
          </ul>

          {/* collaps body that will be show and hidden by click on collaps */}
          <div className={`${styles.tableItemCollaps} tableItemCollaps`}>
            <p>{ele.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataTable;
