import React, { useEffect, useState, Fragment } from "react";
import "./LeaderBoardPage.css";
import Hero from "../../components/home-page-sections/Hero/Hero";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import $ from "jquery";

import avatar1 from "../../assets/leaderboardavatar.png";

import badg1 from "../../assets/1 top3.png";
import badg2 from "../../assets/2 top3.png";
import badg3 from "../../assets/3 top3.png";

import brokerImg1 from "../../assets/broker-img1.png";
import brokerImg2 from "../../assets/broker-img2.png";
import brokerImg3 from "../../assets/broker-img3.png";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import styles from "./LeaderBoardPage.module.css";

const LeaderBoardPage = () => {
  let [isSideFilterOpen, setIsSideFilterOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "50px",
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    // Show the first tab by default
    $(".ranking-tabs .tab").hide();
    $(".ranking-tabs .tab:first-child").show();
    $(".ranking-tabs .tabs-nav li:first").addClass("selected");

    // Change tab class and display content
    $(".ranking-tabs .tabs-nav a").on("click", function (event) {
      event.preventDefault();
      console.log("rerender");

      $(".ranking-tabs .tabs-nav li").removeClass("selected");
      $(".ranking-tabs .tabs-nav li").addClass("not-selected");
      $(this).parent().removeClass("not-selected");
      $(this).parent().addClass("selected");
      $(".ranking-tabs .tab").hide();
      $($(this).attr("href")).show();

      if ($(".Ranking").parent().hasClass("selected")) {
        $(".featured-stories").slideUp(300);
        $(".leaderBoard-guid").slideDown(300);
        $(".featuredStories.border-animate").hide()
      }

      if ($(".Ranking").parent().hasClass("not-selected")) {
        $(".featured-stories").slideDown(300);
        $(".leaderBoard-guid").slideUp(300);
      }
    });
  }, []);

  const openCollaps = (e) => {
    $(e.target)
      .parents(".tableItem")
      .siblings(".tableItemCollaps")
      .slideToggle(300);
  };

  return (
    <>
      <Helmet>
        <title>Leaderboard | Street Suite</title>
        <meta
          name="description"
          content="Street Suite’s competitive leaderboard ranks the biggest winners and losers in the world of stock trading."
        />
      </Helmet>

      <div className="leaderBoard-wrapper">
        <div className={`overlay ${isSideFilterOpen ? "open" : ""}`}></div>

        <Hero>
          <h1>
            Top 20 Traders on <br />
            <span> STREET SUITE </span>
          </h1>
        </Hero>

        <div className="px-[10%]  flex flex-col lg:flex-row items-start  pb-16 gap-6 lg:gap-12">
          <div className="ranking-container w-full lg:w-2/3">
            <div className="ranking-tabs">
              <ul class="tabs-nav grid grid-cols-3 p-0 m-0 list-unstyled">
                {/* taps that show the appropriate content in leaderBoard page */}
                <li>
                  <a href="#tab-1" className="Biggest-Winners">
                    Biggest Winners
                  </a>
                </li>
                <li>
                  <a href="#tab-2" className="Biggest-Losers">
                    Biggest Losers
                  </a>
                </li>
                <li>
                  <a href="#tab-3" className="Ranking">
                    Ranking
                  </a>
                </li>
              </ul>
              <div class="tabs-stage tabs-content">
                {/* Biggest Winners content that show when user click on Biggest Winners tab in leaderBoard page */}
                <div id="tab-1" className="tab">
                  <div className={`${styles.table} relative`}>
                    {Array(9)
                      .fill(" ")
                      .map((d, i) => {
                        return (
                          <div
                            className={`${styles.tableItemContainer} relative`}
                            key={i}
                          >
                            <ul
                              className={`${
                                styles.tableItem
                              } relative z-[4] tableItem !p-0 w-full ${
                                i == 0
                                  ? "bg-[#53ACFF87] !hover:bg-[#53ACFF]"
                                  : i == 1 || i == 2
                                  ? "bg-[#53ACFF1F] !hover:bg-[#53ACFF]"
                                  : "bg-[#414040] hover:!bg-[#53ACFF]"
                              }`}
                              onClick={(e) => {
                                openCollaps(e);
                              }}
                            >
                              <div
                                className={` w-full rounded-[--12px] flex gap-[--50px] items-center  px-[--45px] py-[--16px] relative z-[5] ${
                                  i == 0
                                    ? "!bg-[#53ACFF87] hover:!bg-[#53ACFF]"
                                    : i == 1 || i == 2
                                    ? "bg-[#53ACFF1F] hover:!bg-[#53ACFF]"
                                    : "bg-[#414040] hover:!bg-[#53ACFF]"
                                }`}
                              >
                                <span
                                  className={`${
                                    i == 1
                                      ? "text-[#295780]"
                                      : i == 2
                                      ? "text-[#364452]"
                                      : ""
                                  } text-[--23px] font-bold`}
                                >
                                  {i + 1}
                                </span>
                                <div className=" flex gap-[--20px] items-center">
                                  <img src={avatar1} alt="" />
                                  <div className="user-info flex flex-col gap-y-[--sy-2px]">
                                    <h6 className="font-bold text-[--23px]">
                                      Alex Horren
                                    </h6>
                                    <p className=" text-[--13px]">
                                      @alexhorennnn
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className=" absolute w-[100%] h-[100%] -left-[--2px] -top-[--sy-2px] rounded-[--12px]"
                                style={{
                                  background: `${
                                    i < 3
                                      ? "linear-gradient(110.76deg, rgba(83, 172, 255, 0.5) 20.43%, rgba(255, 255, 255, 0) 96.49%)"
                                      : null
                                  }`,
                                }}
                              ></div>
                            </ul>
                            <div
                              className={`${styles.tableItemCollaps} tableItemCollaps !bg-[#202020]`}
                            >
                              <p>asdasdasdasd</p>
                            </div>
                            {i < 3 ? (
                              <img
                                src={badg1}
                                alt=""
                                className="padge !w-[clamp(50px,_calc(5.6vw_+_0.1rem),_3000px)] absolute z-2 -right-[--14px] -top-[--sy-11px]"
                              />
                            ) : null}
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Biggest losers content that show when user click on Biggest losers tab in leaderBoard page */}
                <div id="tab-2" className="tab">
                  <div className={`${styles.table} relative`}>
                    {Array(9)
                      .fill(" ")
                      .map((d, i) => {
                        return (
                          <div
                            className={`${styles.tableItemContainer} relative`}
                            key={i}
                          >
                            <ul
                              className={`${
                                styles.tableItem
                              } relative z-[4] tableItem !p-0 w-full ${
                                i == 0
                                  ? "bg-[#53ACFF87] !hover:bg-[#53ACFF]"
                                  : i == 1 || i == 2
                                  ? "bg-[#53ACFF1F] !hover:bg-[#53ACFF]"
                                  : "bg-[#414040] hover:!bg-[#53ACFF]"
                              }`}
                              onClick={(e) => {
                                openCollaps(e);
                              }}
                            >
                              <div
                                className={` w-full rounded-[--12px] flex gap-[--50px] items-center  px-[--45px] py-[--16px] relative z-[5] ${
                                  i == 0
                                    ? "!bg-[#53ACFF87] hover:!bg-[#53ACFF]"
                                    : i == 1 || i == 2
                                    ? "bg-[#53ACFF1F] hover:!bg-[#53ACFF]"
                                    : "bg-[#414040] hover:!bg-[#53ACFF]"
                                }`}
                              >
                                <span
                                  className={`${
                                    i == 1
                                      ? "text-[#295780]"
                                      : i == 2
                                      ? "text-[#364452]"
                                      : ""
                                  } text-[--23px] font-bold`}
                                >
                                  {i + 1}
                                </span>
                                <div className=" flex gap-[--20px] items-center">
                                  <img src={avatar1} alt="" />
                                  <div className="user-info flex flex-col gap-y-[--sy-2px]">
                                    <h6 className="font-bold text-[--23px]">
                                      Alex Horren
                                    </h6>
                                    <p className=" text-[--13px]">
                                      @alexhorennnn
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className=" absolute w-[100%] h-[100%] -left-[--2px] -top-[--sy-2px] rounded-[--12px]"
                                style={{
                                  background: `${
                                    i < 3
                                      ? "linear-gradient(110.76deg, rgba(83, 172, 255, 0.5) 20.43%, rgba(255, 255, 255, 0) 96.49%)"
                                      : null
                                  }`,
                                }}
                              ></div>
                            </ul>
                            <div
                              className={`${styles.tableItemCollaps} tableItemCollaps !bg-[#202020]`}
                            >
                              <p>asdasdasdasd</p>
                            </div>
                            {i < 3 ? (
                              <img
                                src={badg1}
                                alt=""
                                className="padge !w-[clamp(50px,_calc(5.6vw_+_0.1rem),_3000px)] absolute z-2 -right-[--14px] -top-[--sy-11px]"
                              />
                            ) : null}
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* ranking content that show when user click on ranking tab in leaderBoard page */}
                <div id="tab-3" className="tab Ranking-tap">
                  <div className="collapse-item renking-1 w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          " linear-gradient(110.76deg, rgba(83, 172, 255, 0.5) 20.43%, rgba(255, 255, 255, 0) 93.49%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <img src={badg1} alt="" className="padge" />
                      <span>1</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item renking-2 w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(83, 172, 255, 0.5) 20.43%, rgba(255, 255, 255, 0) 93.49%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <img src={badg2} alt="" className="padge" />
                      <span>2</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item renking-3 w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(83, 172, 255, 0.5) 20.43%, rgba(255, 255, 255, 0) 93.49%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <img src={badg3} alt="" className="padge" />
                      <span>3</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(255, 255, 255, 0.5) -6.63%, rgba(255, 255, 255, 0.487385) 30.6%, rgba(255, 255, 255, 0) 94%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <span>4</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(255, 255, 255, 0.5) -6.63%, rgba(255, 255, 255, 0.487385) 30.6%, rgba(255, 255, 255, 0) 94%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <span>5</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(255, 255, 255, 0.5) -6.63%, rgba(255, 255, 255, 0.487385) 30.6%, rgba(255, 255, 255, 0) 94%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <span>6</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(255, 255, 255, 0.5) -6.63%, rgba(255, 255, 255, 0.487385) 30.6%, rgba(255, 255, 255, 0) 94%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <span>7</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(255, 255, 255, 0.5) -6.63%, rgba(255, 255, 255, 0.487385) 30.6%, rgba(255, 255, 255, 0) 94%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <span>8</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-item w-full relative rounded-[--12px]">
                    <div
                      className=" absolute !top-[-0.5%] left-[-0.2%] rounded-[--12px] w-[102%] h-[102%] translate-y-0"
                      style={{
                        background:
                          "linear-gradient(110.76deg, rgba(255, 255, 255, 0.5) -6.63%, rgba(255, 255, 255, 0.487385) 30.6%, rgba(255, 255, 255, 0) 94%)",
                      }}
                    ></div>
                    <div className="collapse-header">
                      <span>9</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>

                      <div className="rank-details">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>$100</p>
                          <p>Profit</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>300 %</p>
                          <p>Gain %</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>96%</p>
                          <p>Trades</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p>256</p>
                          <p>Win Streak</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <p className="flex items-center gap-1 lg:gap-2">
                            2
                            <svg
                              width="15"
                              height="20"
                              viewBox="0 0 15 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z"
                                fill="#53ACFF"
                              />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* trader types on the side in leaderboard page */}
          <div className="side-trader w-full lg:w-[30%]">
            <div className="trader-types-wrapper relative rounded-[--11px] border-animate">
             
              <div
                className={`trader-types !rounded-[--11px] !p-[2px] !border-none !border-0 relative  ${
                  isSideFilterOpen ? "open" : ""
                } w-full`}
              >
                <div className=" relative z-[50] bg-[#202020] !rounded-[--11px] px-[--30px] py-[--sy-22px]">
                <button
                  className="toggle-side-fiter block lg:hidden"
                  onClick={() => setIsSideFilterOpen(!isSideFilterOpen)}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1554 0H0.84473C0.0952696 0 -0.282906 0.909351 0.248129 1.44039L6.74999 7.94324V15.1875C6.74999 15.4628 6.88433 15.7208 7.10989 15.8787L9.92239 17.8468C10.4773 18.2352 11.25 17.8415 11.25 17.1555V7.94324L17.752 1.44039C18.282 0.910406 17.9064 0 17.1554 0Z"
                      fill="#53ACFF"
                    />
                  </svg>
                </button>

                <h6>Trader Types</h6>

                <div className="check-trade-time">
                  <label htmlFor="Day">
                    {" "}
                    Day
                    <input type="radio" id="Day" name="trade-time" />
                  </label>
                  <label htmlFor="Swing">
                    Swing
                    <input type="radio" id="Swing" name="trade-time" />
                  </label>
                  <label htmlFor="Long">
                    Long
                    <input type="radio" id="Long" name="trade-time" />
                  </label>
                </div>

                <div className="check-trade-during">
                  <label htmlFor="1-M">
                    {" "}
                    1 M
                    <input type="radio" id="1-M" name="trade-during" />
                  </label>
                  <label htmlFor="6-M">
                    6 M
                    <input type="radio" id="6-M" name="trade-during" />
                  </label>
                  <label htmlFor="1-Y">
                    1 Y
                    <input type="radio" id="1-Y" name="trade-during" />
                  </label>
                  <label htmlFor="2-Y">
                    2 Y
                    <input type="radio" id="2-Y" name="trade-during" />
                  </label>
                  <label htmlFor="all-time">
                    All Time
                    <input type="radio" id="all-time" name="trade-during" />
                  </label>
                </div>

                <div className="leaderBoard-guid">
                  <h5>Leader Board</h5>
                  <p>
                    The leaderboard shows top traders based on their performance
                  </p>

                  <div className="check-leaderBoard-guid">
                    <label htmlFor="Profit">
                      {" "}
                      Profit
                      <input type="radio" id="Profit" name="leaderBoard-guid" />
                    </label>
                    <label htmlFor="Gain-Percentage">
                      Gain Percentage
                      <input
                        type="radio"
                        id="Gain-Percentage"
                        name="leaderBoard-guid"
                      />
                    </label>
                    <label htmlFor="Win-Streak">
                      Win Streak
                      <input
                        type="radio"
                        id="Win-Streak"
                        name="leaderBoard-guid"
                      />
                    </label>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* featured-stories section in leaderboard */}
            <div className="featuredStories relative rounded-[--11px] border-animate">
              
              <div className="featured-stories w-full relative z-[3] border-none border-0">
                <h5>Featured stories</h5>

                <div className="block lg:hidden">
                  <Slider {...settings}>
                    <div className="px-2">
                      <div className="story">
                        <div className="avatar flex flex-row items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisfcg
                          elit, sed do eiusmod tempor incididunt ut laore{" "}
                        </p>
                        <Link to="/blogs/specific-blog">Read more</Link>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="story">
                        <div className="avatar flex flex-row items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisfcg
                          elit, sed do eiusmod tempor incididunt ut laore{" "}
                        </p>
                        <Link to="/blogs/specific-blog">Read more</Link>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="story">
                        <div className="avatar flex flex-row items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisfcg
                          elit, sed do eiusmod tempor incididunt ut laore{" "}
                        </p>
                        <Link to="/blogs/specific-blog">Read more</Link>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="story">
                        <div className="avatar flex flex-row items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisfcg
                          elit, sed do eiusmod tempor incididunt ut laore{" "}
                        </p>
                        <Link to="/blogs/specific-blog">Read more</Link>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="story">
                        <div className="avatar flex flex-row items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisfcg
                          elit, sed do eiusmod tempor incididunt ut laore{" "}
                        </p>
                        <Link to="/blogs/specific-blog">Read more</Link>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="story">
                        <div className="avatar flex flex-row items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisfcg
                          elit, sed do eiusmod tempor incididunt ut laore{" "}
                        </p>
                        <Link to="/blogs/specific-blog">Read more</Link>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="hidden lg:block">
                  <div className="story">
                    <div className="avatar flex flex-row items-center">
                      <img src={avatar1} alt="" />
                      <div className="user-info flex flex-col">
                        <h6>Alex Horren</h6>
                        <p>@alexhorennnn</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisfcg elit,
                      sed do eiusmod tempor incididunt ut laore{" "}
                    </p>
                    <Link to="/blogs/specific-blog">Read more</Link>
                  </div>
                  <div className="story">
                    <div className="avatar flex flex-row items-center">
                      <img src={avatar1} alt="" />
                      <div className="user-info flex flex-col">
                        <h6>Alex Horren</h6>
                        <p>@alexhorennnn</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisfcg elit,
                      sed do eiusmod tempor incididunt ut laore{" "}
                    </p>
                    <Link to="/blogs/specific-blog">Read more</Link>
                  </div>
                  <div className="story">
                    <div className="avatar flex flex-row items-center">
                      <img src={avatar1} alt="" />
                      <div className="user-info flex flex-col">
                        <h6>Alex Horren</h6>
                        <p>@alexhorennnn</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisfcg elit,
                      sed do eiusmod tempor incididunt ut laore{" "}
                    </p>
                    <Link to="/blogs/specific-blog">Read more</Link>
                  </div>
                  <div className="story">
                    <div className="avatar flex flex-row items-center">
                      <img src={avatar1} alt="" />
                      <div className="user-info flex flex-col">
                        <h6>Alex Horren</h6>
                        <p>@alexhorennnn</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisfcg elit,
                      sed do eiusmod tempor incididunt ut laore{" "}
                    </p>
                    <Link to="/blogs/specific-blog">Read more</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* connect your broker section in leaderboard */}
            <div className="ConnectYourBrokerSec relative rounded-[--11px] border-animate">
              
              <div className="ConnectYourBroker w-full relative z-[3] border-0 border-none">
                <h6>Connect your broker to see yourself on our leaderboard </h6>

                <div className="brokers grid grid-cols-3">
                  <div className="gradient-border">
                    <div className="broker-box" onClick={openModal}>
                      <img src={brokerImg1} alt="" />
                    </div>
                  </div>
                  <div className="gradient-border">
                    <div className="broker-box" onClick={openModal}>
                      <img src={brokerImg2} alt="" />
                    </div>
                  </div>
                  <div className="gradient-border">
                    <div className="broker-box" onClick={openModal}>
                      <img src={brokerImg3} alt="" />
                    </div>
                  </div>
                </div>

                <p>
                  Can’t find your broker?{" "}
                  <Link to="/contact-us">Contact Us</Link>.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  connect to your broker modal  */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 interactiveBroker-modal"
            onClose={closeModal}
          >
            <div className="fixed inset-0 overlay" aria-hidden="true" />

            <div className="fixed inset-0 overflow-y-auto z-[30]">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="gradient-border interactiveBroker-modal w-[clamp(36vw,_36vw,_900px)]">
                    <Dialog.Panel className="modal-body w-full transform overflow-hidden align-middle shadow-xl transition-all relative rounded-[--15px]">
                      <svg
                        className=" absolute top-[--sy-32px] right-[--35px] w-[--15px] h-[--15px] cursor-pointer"
                        onClick={closeModal}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4931 0.506927C13.8172 -0.168976 12.7213 -0.168976 12.0455 0.506927L7.49997 5.05248L2.95449 0.506973C2.27857 -0.16893 1.18287 -0.16893 0.506945 0.506973C-0.168981 1.18288 -0.168981 2.27876 0.506945 2.95455L5.05219 7.50003L0.506945 12.0455C-0.168981 12.7212 -0.168981 13.8171 0.506945 14.4931C1.18287 15.169 2.2788 15.169 2.95473 14.4931L7.49997 9.94781L12.0452 14.4931C12.7212 15.169 13.8171 15.169 14.493 14.4931C15.1689 13.8171 15.1689 12.7214 14.493 12.0455L9.94752 7.50003L14.4931 2.95455C15.169 2.27871 15.169 1.18283 14.4931 0.506927Z"
                          fill="#979797"
                        />
                      </svg>

                      <div className="modal-header flex items-start justify-start">
                        <img src={brokerImg1} alt="" />
                        <div className="broker-info flex flex-col justify-start items-start">
                          <h4>Interactive Brokers</h4>
                          <div className="flex justify-start items-center gap-3">
                            <div className=" flex items-center gap-[--2px]">
                              <svg
                                className="w-[--18px] h-[--17px]"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.3644 16.5108C13.2232 16.5108 13.0817 16.4666 12.961 16.378L8.52191 13.1059L4.08282 16.3777C3.84223 16.5552 3.51658 16.5552 3.27578 16.3777C3.03518 16.2005 2.93474 15.8864 3.0265 15.5993L4.72201 10.3054L0.282878 7.03406C0.0422824 6.85656 -0.0581556 6.54248 0.0335963 6.25566C0.125348 5.96883 0.38884 5.77477 0.686317 5.77477H6.17351L7.86902 0.480882C7.96077 0.194055 8.22452 0 8.52174 0C8.81896 0 9.08271 0.194012 9.17446 0.480882L10.87 5.77477H16.3572C16.6546 5.77477 16.9181 5.96879 17.0099 6.25566C17.1016 6.54253 17.0012 6.85656 16.7606 7.03406L12.3219 10.3057L14.0175 15.5996C14.1092 15.8864 14.0087 16.2005 13.7682 16.378C13.6479 16.4666 13.5062 16.5108 13.3644 16.5108ZM8.52191 11.5495C8.66342 11.5495 8.80513 11.5937 8.92531 11.6824L12.0595 13.992L10.8621 10.2549C10.7703 9.96811 10.8708 9.65404 11.1114 9.47653L14.2455 7.16691H10.3715C10.0745 7.16691 9.81099 6.97289 9.71877 6.68602L8.52187 2.94847L7.32496 6.68602C7.23275 6.97285 6.96904 7.16691 6.67224 7.16691H2.79825L5.93241 9.47653C6.173 9.65404 6.27344 9.96811 6.18169 10.2549L4.98453 13.992L8.11868 11.6824C8.23869 11.5938 8.38066 11.5495 8.52191 11.5495Z"
                                  fill="#53ACFF"
                                />
                                <path
                                  d="M8.25662 1.86426L6.39249 6.39143H1.06641L5.59358 10.1197L3.99575 15.7121L8.78923 12.5164L13.0501 15.7121L11.4523 10.1197L15.9794 6.39143H10.3871L8.25662 1.86426Z"
                                  fill="#53ACFF"
                                />
                              </svg>
                              <svg
                                className="w-[--18px] h-[--17px]"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.3644 16.5108C13.2232 16.5108 13.0817 16.4666 12.961 16.378L8.52191 13.1059L4.08282 16.3777C3.84223 16.5552 3.51658 16.5552 3.27578 16.3777C3.03518 16.2005 2.93474 15.8864 3.0265 15.5993L4.72201 10.3054L0.282878 7.03406C0.0422824 6.85656 -0.0581556 6.54248 0.0335963 6.25566C0.125348 5.96883 0.38884 5.77477 0.686317 5.77477H6.17351L7.86902 0.480882C7.96077 0.194055 8.22452 0 8.52174 0C8.81896 0 9.08271 0.194012 9.17446 0.480882L10.87 5.77477H16.3572C16.6546 5.77477 16.9181 5.96879 17.0099 6.25566C17.1016 6.54253 17.0012 6.85656 16.7606 7.03406L12.3219 10.3057L14.0175 15.5996C14.1092 15.8864 14.0087 16.2005 13.7682 16.378C13.6479 16.4666 13.5062 16.5108 13.3644 16.5108ZM8.52191 11.5495C8.66342 11.5495 8.80513 11.5937 8.92531 11.6824L12.0595 13.992L10.8621 10.2549C10.7703 9.96811 10.8708 9.65404 11.1114 9.47653L14.2455 7.16691H10.3715C10.0745 7.16691 9.81099 6.97289 9.71877 6.68602L8.52187 2.94847L7.32496 6.68602C7.23275 6.97285 6.96904 7.16691 6.67224 7.16691H2.79825L5.93241 9.47653C6.173 9.65404 6.27344 9.96811 6.18169 10.2549L4.98453 13.992L8.11868 11.6824C8.23869 11.5938 8.38066 11.5495 8.52191 11.5495Z"
                                  fill="#53ACFF"
                                />
                                <path
                                  d="M8.25662 1.86426L6.39249 6.39143H1.06641L5.59358 10.1197L3.99575 15.7121L8.78923 12.5164L13.0501 15.7121L11.4523 10.1197L15.9794 6.39143H10.3871L8.25662 1.86426Z"
                                  fill="#53ACFF"
                                />
                              </svg>
                              <svg
                                className="w-[--18px] h-[--17px]"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.3644 16.5108C13.2232 16.5108 13.0817 16.4666 12.961 16.378L8.52191 13.1059L4.08282 16.3777C3.84223 16.5552 3.51658 16.5552 3.27578 16.3777C3.03518 16.2005 2.93474 15.8864 3.0265 15.5993L4.72201 10.3054L0.282878 7.03406C0.0422824 6.85656 -0.0581556 6.54248 0.0335963 6.25566C0.125348 5.96883 0.38884 5.77477 0.686317 5.77477H6.17351L7.86902 0.480882C7.96077 0.194055 8.22452 0 8.52174 0C8.81896 0 9.08271 0.194012 9.17446 0.480882L10.87 5.77477H16.3572C16.6546 5.77477 16.9181 5.96879 17.0099 6.25566C17.1016 6.54253 17.0012 6.85656 16.7606 7.03406L12.3219 10.3057L14.0175 15.5996C14.1092 15.8864 14.0087 16.2005 13.7682 16.378C13.6479 16.4666 13.5062 16.5108 13.3644 16.5108ZM8.52191 11.5495C8.66342 11.5495 8.80513 11.5937 8.92531 11.6824L12.0595 13.992L10.8621 10.2549C10.7703 9.96811 10.8708 9.65404 11.1114 9.47653L14.2455 7.16691H10.3715C10.0745 7.16691 9.81099 6.97289 9.71877 6.68602L8.52187 2.94847L7.32496 6.68602C7.23275 6.97285 6.96904 7.16691 6.67224 7.16691H2.79825L5.93241 9.47653C6.173 9.65404 6.27344 9.96811 6.18169 10.2549L4.98453 13.992L8.11868 11.6824C8.23869 11.5938 8.38066 11.5495 8.52191 11.5495Z"
                                  fill="#53ACFF"
                                />
                                <path
                                  d="M8.25662 1.86426L6.39249 6.39143H1.06641L5.59358 10.1197L3.99575 15.7121L8.78923 12.5164L13.0501 15.7121L11.4523 10.1197L15.9794 6.39143H10.3871L8.25662 1.86426Z"
                                  fill="#53ACFF"
                                />
                              </svg>
                              <svg
                                className="w-[--18px] h-[--17px]"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.3644 16.5108C13.2232 16.5108 13.0817 16.4666 12.961 16.378L8.52191 13.1059L4.08282 16.3777C3.84223 16.5552 3.51658 16.5552 3.27578 16.3777C3.03518 16.2005 2.93474 15.8864 3.0265 15.5993L4.72201 10.3054L0.282878 7.03406C0.0422824 6.85656 -0.0581556 6.54248 0.0335963 6.25566C0.125348 5.96883 0.38884 5.77477 0.686317 5.77477H6.17351L7.86902 0.480882C7.96077 0.194055 8.22452 0 8.52174 0C8.81896 0 9.08271 0.194012 9.17446 0.480882L10.87 5.77477H16.3572C16.6546 5.77477 16.9181 5.96879 17.0099 6.25566C17.1016 6.54253 17.0012 6.85656 16.7606 7.03406L12.3219 10.3057L14.0175 15.5996C14.1092 15.8864 14.0087 16.2005 13.7682 16.378C13.6479 16.4666 13.5062 16.5108 13.3644 16.5108ZM8.52191 11.5495C8.66342 11.5495 8.80513 11.5937 8.92531 11.6824L12.0595 13.992L10.8621 10.2549C10.7703 9.96811 10.8708 9.65404 11.1114 9.47653L14.2455 7.16691H10.3715C10.0745 7.16691 9.81099 6.97289 9.71877 6.68602L8.52187 2.94847L7.32496 6.68602C7.23275 6.97285 6.96904 7.16691 6.67224 7.16691H2.79825L5.93241 9.47653C6.173 9.65404 6.27344 9.96811 6.18169 10.2549L4.98453 13.992L8.11868 11.6824C8.23869 11.5938 8.38066 11.5495 8.52191 11.5495Z"
                                  fill="#53ACFF"
                                />
                                <path
                                  d="M8.25662 1.86426L6.39249 6.39143H1.06641L5.59358 10.1197L3.99575 15.7121L8.78923 12.5164L13.0501 15.7121L11.4523 10.1197L15.9794 6.39143H10.3871L8.25662 1.86426Z"
                                  fill="#53ACFF"
                                />
                              </svg>
                              <svg
                                className="w-[--18px] h-[--17px]"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.3215 16.5108C14.1802 16.5108 14.0387 16.4666 13.9181 16.378L9.47894 13.1059L5.03985 16.3777C4.79926 16.5552 4.47361 16.5552 4.23281 16.3777C3.99221 16.2005 3.89177 15.8864 3.98353 15.5993L5.67904 10.3054L1.23991 7.03406C0.999314 6.85656 0.898876 6.54248 0.990628 6.25566C1.08238 5.96883 1.34587 5.77477 1.64335 5.77477H7.13054L8.82605 0.480882C8.9178 0.194055 9.18155 0 9.47877 0C9.776 0 10.0397 0.194012 10.1315 0.480882L11.827 5.77477H17.3142C17.6116 5.77477 17.8752 5.96879 17.9669 6.25566C18.0587 6.54253 17.9582 6.85656 17.7176 7.03406L13.279 10.3057L14.9745 15.5996C15.0662 15.8864 14.9658 16.2005 14.7252 16.378C14.6049 16.4666 14.4632 16.5108 14.3215 16.5108ZM9.47894 11.5495C9.62045 11.5495 9.76217 11.5937 9.88234 11.6824L13.0165 13.992L11.8191 10.2549C11.7274 9.96811 11.8279 9.65404 12.0684 9.47653L15.2026 7.16691H11.3285C11.0315 7.16691 10.768 6.97289 10.6758 6.68602L9.4789 2.94847L8.28199 6.68602C8.18978 6.97285 7.92607 7.16691 7.62927 7.16691H3.75529L6.88944 9.47653C7.13003 9.65404 7.23047 9.96811 7.13872 10.2549L5.94156 13.992L9.07571 11.6824C9.19572 11.5938 9.33769 11.5495 9.47894 11.5495Z"
                                  fill="#53ACFF"
                                />
                              </svg>
                            </div>
                            <span>4.5</span>
                          </div>
                        </div>
                      </div>
                      <p>
                        <Link to="/top-brokers">Learn more</Link> about
                        Interactive Brokers or{" "}
                        <Link to="/top-brokers">compare</Link> it with other
                        brokers.
                      </p>
                      <div className="line"></div>
                      <div className="input-box flex flex-col items-start">
                        <label className="text-sm text-gray-500">
                          InteractiveBrokers.com Username
                        </label>
                        <input type="text" className="w-full" />
                      </div>
                      <div className="input-box flex flex-col items-start">
                        <label className="text-sm text-gray-500">
                          Password
                        </label>
                        <input type="password" className="w-full" />
                      </div>
                      <div class="form-group flex items-start justify-start">
                        <input type="checkbox" id="Remember-me" />
                        <label for="Remember-me">Remember me</label>
                      </div>
                      <p className="notic">
                        By clicking “Connect” I confirm that I have read the{" "}
                        <Link to="/disclaimer">disclaimer</Link> and the{" "}
                        <Link to="/terms&conditions">terms and conditions</Link>{" "}
                        and I accept.
                      </p>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="brokerConnect-btn"
                          onClick={closeModal}
                        >
                          Connect
                        </button>
                      </div>
                    </Dialog.Panel>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default LeaderBoardPage;
