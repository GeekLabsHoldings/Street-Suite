import React, { useEffect, useState } from "react";
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
  industry,
  marketCap,
  riskLevel,
}) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}alerts/`, {
    params: {
      page: pageParam,
      strategy,
      ticker__industry: industry,
      ticker__market_capital: marketCap,
      riskLevel,
    },
  });
  return response.data;
};

const createFetchAlerts =
  (strategy, industry, marketCap, riskLevel) =>
  ({ pageParam = 1 }) => {
    console.log("Hellllllo");
    return fetchAlerts({ pageParam, strategy, industry, marketCap, riskLevel });
  };

function DataTable({
  strategy,
  industry,
  marketCap,
  riskLevel,
  setAlerts,
  alerts,
}) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    status,
  } = useInfiniteQuery({
    queryKey: ["alerts", strategy, industry, marketCap, riskLevel],
    queryFn: createFetchAlerts(strategy, industry, marketCap, riskLevel),
    getNextPageParam: (lastPage, pages) => {
      console.log("Hiiiiiiiiiiiiii");
      if (alerts.length === 0) return 1;
      if (lastPage.next) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  useEffect(() => {
    setAlerts(data?.pages?.flatMap((page) => page.results) || []);
  }, [data]);
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

  return (
    <InfiniteScroll
      dataLength={alerts.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        alerts?.length > 0 ? (
          <div className="w-full flex justify-center items-center pt-5 pb-8">
            <div className="h-16 w-16 rounded-full border-8 border-solid border-r-transparent border-[#53ACFF] animate-spin"></div>
          </div>
        ) : (
          <h1 className="text-center text-2xl">No Data Found</h1>
        )
      }
      className="overflow-y-hidden"
    >
      <div className={styles.table}>
        {alerts.map((ele, idx) => (
          <div className={styles.tableItemContainer} key={idx}>
            <ul
              className={styles.tableItem + " tableItem"}
              onClick={(e) => {
                openCollaps(e);
              }}
            >
              <li>
                <img src={img1} alt="" />
                <p>{ele?.ticker["symbol"]}</p>
              </li>
              <li>
                <img src={img3} alt="" />
                <p
                  className={
                    ele?.risk_level === "Bearish" || ele?.risk_level === "Put"
                      ? styles.DOWN
                      : ele?.risk_level === "Bullish" ||
                        ele?.risk_level === "Call"
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
