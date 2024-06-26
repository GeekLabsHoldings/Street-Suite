import React, { useEffect, useState,Fragment } from 'react'
import "./LeaderBoardPage.css"
import Hero from '../../components/home-page-sections/Hero/Hero'
import { Dialog, Transition } from '@headlessui/react'
import {Link} from 'react-router-dom'

import $ from 'jquery';

import avatar1 from "../../assets/leaderboardavatar.png"

import badg1 from "../../assets/1 top3.png"
import badg2 from "../../assets/2 top3.png"
import badg3 from "../../assets/3 top3.png"

import brokerImg1 from "../../assets/broker-img1.png"
import brokerImg2 from "../../assets/broker-img2.png"
import brokerImg3 from "../../assets/broker-img3.png"
import StarRatings from 'react-star-ratings'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet-async'


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
    setIsOpen(true)
  }



  useEffect(() => {


    // Show the first tab by default
    $('.ranking-tabs .tab').hide();
    $('.ranking-tabs .tab:first-child').show();
    $('.ranking-tabs .tabs-nav li:first').addClass('selected');

    // Change tab class and display content
    $('.ranking-tabs .tabs-nav a').on('click', function (event) {
      event.preventDefault();
      console.log("rerender");

      $('.ranking-tabs .tabs-nav li').removeClass('selected');
      $('.ranking-tabs .tabs-nav li').addClass('not-selected');
      $(this).parent().removeClass('not-selected');
      $(this).parent().addClass('selected');
      $('.ranking-tabs .tab').hide();
      $($(this).attr('href')).show();

      if ($(".Ranking").parent().hasClass("selected")) {
        $(".featured-stories").slideUp(300)
        $(".leaderBoard-guid").slideDown(300)
      }

      if ($(".Ranking").parent().hasClass("not-selected")) {
        $(".featured-stories").slideDown(300)
        $(".leaderBoard-guid").slideUp(300)
      }

    });

  }, [])


  return (

    <>
      <Helmet>
        <title>Leaderboard | Street Suite</title>
        <meta
          name="description"
          content="Street Suite’s competitive leaderboard ranks the biggest winners and losers in the world of stock trading."
        />
      </Helmet>


      <div className='leaderBoard-wrapper'>

        <div className={`overlay ${isSideFilterOpen ? 'open' : ''}`}></div>

        <Hero>
          <h1>Top 20 Traders on <br /><span> STREET SUITE </span></h1>
        </Hero>

        <div className="px-[10%]  flex flex-col lg:flex-row items-start  pb-16 gap-6 lg:gap-12">

          <div className="ranking-container w-full lg:w-2/3">
            <div className="ranking-tabs">
              <ul class="tabs-nav grid grid-cols-3 p-0 m-0 list-unstyled">
                {/* taps that show the appropriate content in leaderBoard page */}
                <li><a href="#tab-1" className='Biggest-Winners'>Biggest Winners</a></li>
                <li><a href="#tab-2" className='Biggest-Losers'>Biggest Losers</a></li>
                <li><a href="#tab-3" className='Ranking'>Ranking</a></li>
              </ul>
              <div class="tabs-stage tabs-content">

                {/* Biggest Winners content that show when user click on Biggest Winners tab in leaderBoard page */}
                <div id="tab-1" className='tab'>
                  <div className="collapse-item renking-1 w-full">
                    <div className="collapse-header">
                      <span>1</span>
                      <div className="avatar flex flex-row gap-:gap-4 items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <img src={badg1} alt="" className='padge' />
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>


                  <div className="collapse-item renking-2 w-full">
                    <div className="collapse-header">
                      <span>2</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <img src={badg2} alt="" className='padge' />
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>


                  <div className="collapse-item renking-3 w-full">
                    <div className="collapse-header">
                      <span>3</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <img src={badg3} alt="" className='padge' />
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>4</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>5</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>6</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>7</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>
                </div>

                {/* Biggest losers content that show when user click on Biggest losers tab in leaderBoard page */}
                <div id="tab-2" className='tab'>

                  <div className="collapse-item renking-1 w-full">
                    <div className="collapse-header">
                      <span>1</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <img src={badg1} alt="" className='padge' />
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>


                  <div className="collapse-item renking-2 w-full">
                    <div className="collapse-header">
                      <span>2</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <img src={badg2} alt="" className='padge' />
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>


                  <div className="collapse-item renking-3 w-full">
                    <div className="collapse-header">
                      <span>3</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <img src={badg3} alt="" className='padge' />
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>4</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>5</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>6</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>

                  <div className="collapse-item w-full">
                    <div className="collapse-header">
                      <span>7</span>
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-body">
                      <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                  </div>
                </div>

                {/* ranking content that show when user click on ranking tab in leaderBoard page */}
                <div id="tab-3" className='tab Ranking-tap'>
                  <div className="collapse-item renking-1 w-full">
                    <div className="collapse-header">
                      <img src={badg1} alt="" className='padge' />
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item renking-2 w-full">
                    <div className="collapse-header">
                      <img src={badg2} alt="" className='padge' />
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item renking-3 w-full">
                    <div className="collapse-header">
                      <img src={badg3} alt="" className='padge' />
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item w-full">
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item w-full">
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item w-full">
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item w-full">
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item w-full">
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
                            </svg>
                          </p>
                          <p>Day Streak</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="collapse-item w-full">
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
                          <p className='flex items-center gap-1 lg:gap-2'>2
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.75137 10.4692C7.61252 11.0592 7.28426 12.3437 7.43487 13.515C7.53477 14.0561 7.85908 14.5446 8.09523 15.0368C8.29203 15.4957 8.27834 15.9426 7.95055 16.3466C7.06375 17.5876 5.01701 16.7481 5.35468 15.1316C5.01145 15.1445 4.76989 15.3162 4.59226 15.5693C3.60836 16.7999 4.32402 18.4517 5.55112 19.2019C5.74877 19.3375 6.04052 19.5133 5.91383 19.7945C5.84382 19.9549 5.70821 20.012 5.53546 19.998C2.8975 19.7844 0.946791 18.1536 0.220137 15.5993C-0.375599 14.0052 0.243542 10.5146 2.00775 9.95648C2.35324 9.88728 2.63394 10.1374 2.58944 10.4883C2.55273 10.7775 2.45442 11.0618 2.35921 11.3399C2.01544 12.1787 2.85753 13.4579 3.75323 12.8784C3.98246 12.737 4.10515 12.5347 4.12222 12.2664C4.21574 10.6676 2.57406 10.0584 2.89224 8.2846C2.82908 7.48983 4.33543 5.10869 5.16429 5.67176C5.30659 5.7926 5.35307 5.95523 5.30072 6.12822C5.16014 6.59617 4.85956 7.02291 4.92268 7.53149C4.96433 8.2519 5.93242 8.79279 6.55707 8.42729C7.1513 8.07956 7.68269 7.37417 7.16086 6.4804C6.97457 6.1613 6.8045 5.83266 6.62078 5.51201C4.541 2.14488 9.5427 -1.29295 9.68492 0.484723C9.52706 1.30921 8.85196 1.95237 8.80002 2.81754C8.7466 3.1344 8.82422 3.42895 8.99082 3.70514C11.0112 6.58973 13.2667 6.16807 11.6758 10.5115C11.5654 10.8649 11.6945 11.2375 12.1296 11.0933C13.1637 10.7967 12.9248 9.55099 12.983 8.71862C12.9945 8.52987 13.0621 8.37564 13.2572 8.31486C13.4463 8.25595 13.5999 8.3364 13.6863 8.4928C13.8938 8.86858 14.1046 9.24565 14.2716 9.64036C15.2137 11.867 15.2501 14.1089 14.3332 16.3529C14.0122 17.1383 13.5203 17.8119 12.8661 18.3475C12.4315 18.7033 11.9684 19.0274 11.4965 19.3319C11.1961 19.5258 10.9375 19.4989 10.7974 19.3219C10.2753 18.8003 12.8779 16.2833 11.0025 14.7662C9.43493 13.6969 8.06873 12.6013 8.75137 10.4692Z" fill="#53ACFF" />
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
          <div className="side-trader w-full lg:w-1/3">

            <div className={`trader-types ${isSideFilterOpen ? 'open' : ''} w-full`}>

              <button className='toggle-side-fiter block lg:hidden' onClick={() => setIsSideFilterOpen(!isSideFilterOpen)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1554 0H0.84473C0.0952696 0 -0.282906 0.909351 0.248129 1.44039L6.74999 7.94324V15.1875C6.74999 15.4628 6.88433 15.7208 7.10989 15.8787L9.92239 17.8468C10.4773 18.2352 11.25 17.8415 11.25 17.1555V7.94324L17.752 1.44039C18.282 0.910406 17.9064 0 17.1554 0Z" fill="#53ACFF" />
                </svg>
              </button>

              <h6>Trader Types</h6>

              <div className="check-trade-time">
                <label htmlFor="Day"> Day
                  <input type="radio" id='Day' name='trade-time' />
                </label>
                <label htmlFor="Swing">Swing
                  <input type="radio" id='Swing' name='trade-time' />
                </label>
                <label htmlFor="Long">Long
                  <input type="radio" id='Long' name='trade-time' />
                </label>
              </div>

              <div className="check-trade-during">
                <label htmlFor="1-M"> 1 M
                  <input type="radio" id='1-M' name='trade-during' />
                </label>
                <label htmlFor="6-M">6 M
                  <input type="radio" id='6-M' name='trade-during' />
                </label>
                <label htmlFor="1-Y">1 Y
                  <input type="radio" id='1-Y' name='trade-during' />
                </label>
                <label htmlFor="2-Y">2 Y
                  <input type="radio" id='2-Y' name='trade-during' />
                </label>
                <label htmlFor="all-time">All Time
                  <input type="radio" id='all-time' name='trade-during' />
                </label>
              </div>



              <div className="leaderBoard-guid">
                <h5>Leader Board</h5>
                <p>The leaderboard shows top traders based on their performance</p>

                <div className="check-leaderBoard-guid">
                  <label htmlFor="Profit"> Profit
                    <input type="radio" id='Profit' name='leaderBoard-guid' />
                  </label>
                  <label htmlFor="Gain-Percentage">Gain Percentage
                    <input type="radio" id='Gain-Percentage' name='leaderBoard-guid' />
                  </label>
                  <label htmlFor="Win-Streak">Win Streak
                    <input type="radio" id='Win-Streak' name='leaderBoard-guid' />
                  </label>
                </div>
              </div>



            </div>

            {/* featured-stories section in leaderboard */}
            <div className="featured-stories w-full">
              <h5>Featured stories</h5>

              <div className="block lg:hidden">
                <Slider {...settings}>
                  <div className='px-2'>
                    <div className="story">
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
                      <Link to="/blogs/specific-blog">Read more</Link>
                    </div>
                  </div>
                  <div className='px-2'>
                    <div className="story">
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
                      <Link to="/blogs/specific-blog">Read more</Link>
                    </div>
                  </div>
                  <div className='px-2'>
                    <div className="story">
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
                      <Link to="/blogs/specific-blog">Read more</Link>
                    </div>
                  </div>
                  <div className='px-2'>
                    <div className="story">
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
                      <Link to="/blogs/specific-blog">Read more</Link>
                    </div>
                  </div>
                  <div className='px-2'>
                    <div className="story">
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
                      <Link to="/blogs/specific-blog">Read more</Link>
                    </div>
                  </div>
                  <div className='px-2'>
                    <div className="story">
                      <div className="avatar flex flex-row items-center">
                        <img src={avatar1} alt="" />
                        <div className="user-info flex flex-col">
                          <h6>Alex Horren</h6>
                          <p>@alexhorennnn</p>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
                      <Link to="/blogs/specific-blog">Read more</Link>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className='hidden lg:block'>
                <div className="story">
                  <div className="avatar flex flex-row items-center">
                    <img src={avatar1} alt="" />
                    <div className="user-info flex flex-col">
                      <h6>Alex Horren</h6>
                      <p>@alexhorennnn</p>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisfcg elit, sed do eiusmod tempor incididunt ut laore </p>
                  <Link to="/blogs/specific-blog">Read more</Link>
                </div>
              </div>
            </div>

            {/* connect your broker section in leaderboard */}
            <div className="ConnectYourBroker w-full">
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

              <p>Can’t find your broker? <Link to="/contact-us">Contact Us</Link>. </p>
            </div>

          </div>

        </div>





        {/*  connect to your broker modal  */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10 interactiveBroker-modal" onClose={closeModal}>
            <div className="fixed inset-0 overlay" aria-hidden="true" />


            <div className="fixed inset-0 overflow-y-auto">
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
                  <div className="gradient-border interactiveBroker-modal">
                    <Dialog.Panel className="modal-body w-full transform overflow-hidden align-middle shadow-xl transition-all">
                      <div className="modal-header flex items-start justify-start">
                        <img src={brokerImg1} alt="" />
                        <div className="broker-info flex flex-col justify-start items-start">
                          <h4>Interactive Brokers</h4>
                          <div className='flex justify-start items-center gap-3'>
                            <StarRatings
                              rating={4.5}
                              starRatedColor="#53ACFF"
                              numberOfStars={5}
                              name='rating'
                              starDimension="clamp(20px, calc( 1.8vw + 0.1rem ) , 700px)"
                              starSpacing="2px"
                            />
                            <span>4.5</span>
                          </div>
                        </div>
                      </div>
                      <p><Link to="/top-brokers">Learn more</Link> about Interactive Brokers or <Link to="/top-brokers">compare</Link> it with other brokers.</p>
                      <div className="line"></div>
                      <div className="input-box flex flex-col items-start">
                        <label className="text-sm text-gray-500">
                          InteractiveBrokers.com Username
                        </label>
                        <input type="text" className='w-full' />
                      </div>
                      <div className="input-box flex flex-col items-start">
                        <label className="text-sm text-gray-500">
                          Password
                        </label>
                        <input type="password" className='w-full' />
                      </div>
                      <div class="form-group flex items-start justify-start">
                        <input type="checkbox" id="Remember-me" />
                        <label for="Remember-me">Remember me</label>
                      </div>
                      <p className='notic'>By clicking “Connect” I confirm that I have read the <Link to="/disclaimer">disclaimer</Link> and the <Link to="/terms&conditions">terms and conditions</Link> and I accept.</p>
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

  )
}

export default LeaderBoardPage
