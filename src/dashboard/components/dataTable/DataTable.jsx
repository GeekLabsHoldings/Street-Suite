import React, { useState } from "react";
import $ from "jquery";
import styles from "./DataTable.module.css";
import img1 from "../../assets/table/Group.svg";
import img2 from "../../assets/table/Vector2.svg";
import img3 from "../../assets/table/Vector.svg";
import img4 from "../../assets/table/Group 63.svg";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchAlerts = async ({
  pageParam = 1,
  strategy,
  ticker__industry,
  ticker__market_capital,
  risk_level,
}) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}alerts/`, {
    params: {
      page: pageParam,
      strategy,
      ticker__industry,
      ticker__market_capital,
      risk_level,
    },
  });
  return response.data;
};

function DataTable(strategy, industry, marketCap, riskLevel) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    status,
  } = useInfiniteQuery({
    queryKey: ["alerts"],
    queryFn: () => fetchAlerts({ strategy, industry, marketCap, riskLevel }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.next) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
    refetchInterval: 1000,
  });

  const openCollaps = (e) => {
    $(e.target)
      .parents(".tableItem")
      .siblings(".tableItemCollaps")
      .slideToggle(300);
  };

  if (isLoading)
    return (
      <div className="w-full flex justify-center items-center pt-5 pb-8">
        <div className="h-16 w-16 rounded-full border-8 border-solid border-r-transparent border-[#53ACFF] animate-spin"></div>
      </div>
    );
  if (status === "error") return <h1>Error loading data</h1>;

  const alerts = data?.pages?.flatMap((page) => page.results) || [];

  return (
    <InfiniteScroll
      dataLength={alerts.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <div className="w-full flex justify-center items-center pt-5 pb-8">
          <div className="h-16 w-16 rounded-full border-8 border-solid border-r-transparent border-[#53ACFF] animate-spin"></div>
        </div>
      }
      className="overflow-y-hidden"
    >
      <div className={styles.table}>
        {alerts.map((ele, idx) => (
          <div className={styles.tableItemContainer} key={idx}>
            <ul
              className={styles.tableItem + " tableItem"}
              onClick={(e) => {
                openCollaps(e, idx);
              }}
            >
              <li>
                <img src={img1} alt="" />
                <p>{ele.ticker["symbol"]}</p>
              </li>
              <li>
                <img src={img3} alt="" />
                <p
                  className={
                    ele?.risk_level === "Bearish"
                      ? styles.DOWN
                      : ele?.risk_level === "Bullish"
                      ? styles.UP
                      : ""
                  }
                >
                  {`${Number(ele?.result_value).toFixed(3)}  ${
                    ele?.strategy.split(" ")[0]
                  }`}
                </p>
              </li>
              <li>
                <img src={img4} alt="" />
                <p>{ele?.risk_level}</p>
              </li>
            </ul>
            <div className={`${styles.tableItemCollaps} tableItemCollaps`}>
              <p>{ele?.message}</p>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default DataTable;
