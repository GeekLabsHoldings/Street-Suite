import { Link, useNavigate } from "react-router-dom";
import FirstAvatar from "../../assets/avatar1 with flag.svg";
import SecondAvatar from "../../assets/avatar2 with flag.svg";
import ThirdAvatar from "../../assets/avatar3 with flag.svg";
import Follow from "../../assets/followers.svg";
import HotStrip from "../../assets/hot strip gray.png";
import Like from "../../assets/like.svg";
import TheCup from "../../assets/the-cup.svg";
import OldArticle from "../OldArticle/OldArticle";
import OneWinner from "../OneWinnerOrLoser/OneWinnerOrLoser";
import TimeForRead from "../TimeForRead/TimeForRead";
import "./OneBlog.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const OneBlog = () => {
  // to enable navigation
  const navigate = useNavigate();

  // to navigate to leader board page
  const leaderboardNavigator = () => {
    navigate("/leaderboard");
  };

  // to navigate to training page
  const trainingNavigator = () => {
    navigate("/dashboard/training");
  };

  // to navigate to specific blog page
  const onClickHandler = () => {
    navigate("./");
  };

  function titleToSlug(title) {
    // Convert to lowercase
    title = title.toLowerCase();
    // Replace spaces with hyphens
    title = title.replace(/\s+/g, "-");
    // Remove any characters that are not alphanumeric or hyphens
    title = title.replace(/[^a-z0-9-]/g, "");
    return title;
  }

  const [blogsList, setBlogsList] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);

  async function getAllBlogs() {
    try {
      // window.scrollTo(0, 0);
      setPageLoading(true);
      const { data } = await axios.get(
        `https://abdulrahman.onrender.com/blogs/`
      );
      setBlogsList(data);
    } catch (e) {
      console.error(e);
    } finally {
      setPageLoading(false);
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  if (pageLoading) {
    return (
      <div className="h-[100vh] flex justify-center items-start">
        <Loader />
      </div>
    );
  }

  if (blogsList.length === 0) {
    return (
      <div className="h-[100vh] flex justify-center items-start">
        <p class="alert-message">No blogs found</p>
      </div>
    );
  }

  function timeAgo(dateString) {
    if (dateString) {
      const date = new Date(dateString);
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);

      const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
      ];

      for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
          return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
        }
      }
      return "just now";
    } else {
      return "n days ago";
    }
  }

  function timeReadDuration(timeString) {
    if (timeString) {
      // Split the time string into hours, minutes, and seconds
      const [hours, minutes, seconds] = timeString?.split(":").map(Number);

      // Convert the entire time to minutes
      const totalMinutes = hours * 60 + minutes + Math.round(seconds / 60);

      // Return the formatted string
      return `${totalMinutes} min read`;
    } else {
      return `n min read`;
    }
  }

  return (
    <div className="md:flex sm:my-2">
      <div className="md:w-3/5 verticalSeparator ">
        {blogsList.slice(0, 4).map((blog, idx) => {
          return (
            <div
              className="flex cursor-pointer firstBlog bottomBorder "
              key={idx}
            >
              <Link
                to={`/blogs/${titleToSlug(blog?.title)}`}
                target="_black"
                className="block sm:w-7/12 md:w-1/2"
              >
                <div className=" oneBlogCont">
                  <h3>{blog?.title}</h3>
                  <p>{blog?.description}</p>
                  <TimeForRead
                    datePosted={timeAgo(blog?.date_posted)}
                    timeRead={timeReadDuration(blog?.time_reading)}
                  />
                </div>
              </Link>

              <Link
                to={`/blogs/${titleToSlug(blog.title)}`}
                target="_black"
                className="sm:w-5/12 md:w-1/2"
              >
                <div className=" ">
                  <div className="md:w-10/12 sm:w-11/12 ">
                    <img
                      src={`https://abdulrahman.onrender.com/${blog.image_url}`}
                      alt={blog.title}
                      className="w-full"
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        {/* blog about our training */}
        <div
          className="flex justify-between secDivOnLeft bottomBorder cursor-pointer "
          onClick={trainingNavigator}
        >
          <div className="sm:w-4/12 md:w-4/12 flex align-items-center">
            <h2>Get Better with ST Suite Trainings</h2>
          </div>
          <div className="md:w-4/5 sm:w-8/12 flex justify-center parentDiv ">
            <div className=" md:w-10/12 babyblueDiv flex flex-col align-items-end relative">
              <div className="leftBG md:w-3/4 sm:w-full">
                <div className="md:w-3/4">
                  <h5 className="md:w-4/5 sm:w-1/2 stockMarket">
                    Stock Market 101 - Advanced
                  </h5>
                  <div className="flex justify-between align-items-center">
                    <div className="coloredTxt">
                      <h6 className=" py-1 w-fit darkerColor">30 Modules</h6>
                      <h6 className=" py-1 w-fit darkerColor">
                        5.1k People enrolled
                      </h6>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex txtspan">
                        <div className="imgSizeInSm">
                          <img
                            className="flex w-full"
                            alt="followers"
                            src={Follow}
                          />
                        </div>
                        <span>2.1k </span>
                      </div>
                      <div className="flex txtspan">
                        <div className="imgSizeInSm">
                          <img className="w-full flex" alt="cup" src={TheCup} />
                        </div>
                        <span>1025</span>
                      </div>
                      <div className="flex txtspan">
                        <div className="imgSizeInSm">
                          <img className="w-full flex" alt="likes" src={Like} />
                        </div>
                        <span>300 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topRight">
                  <img className="w-full" alt="hot badge" src={HotStrip} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="textDiv bottomBorder">
          <h6>Private Equity: </h6>
          <p>
            New Companies List On{" "}
            <span className="highlight">Street Suite</span>
          </p>
        </div>

        {/* ad section */}
        <div className="md:hidden sm:visible flex py-4 ">
          <div className=" w-full">
            <div className="divForImgLg h-44"></div>
          </div>
        </div>
        {/* alert about random old blogs */}
        <div className="sm:visible md:hidden blueContainer w-full py-3 px-4 text-center ">
          <h3>In Case You Missed It</h3>
        </div>
        {/* sample of old blogs */}
        <div className="md:hidden sm:visible">
          <OldArticle classname="pt-6" />
          <OldArticle classname="pt-6" />
          <OldArticle classname="pt-6" />
        </div>

        {/* feature */}
        <div className=" bottomBorder parentOfBlackBg ">
          <div
            className="flex divBg md:w-11/12 md:py-4 sm:py-3 cursor-pointer "
            onClick={onClickHandler}
          >
            <div className="md:w-1/3 sm:w-1/2 ps-3 sm:pt-1">
              <div className="w-10/12 ">
                <div className="divForBlackBg"></div>
              </div>
            </div>
            <div className="md:w-2/3 sm:w-1/2 flex flex-col justify-center md:gap-4 sm:gap-3 ">
              <div className="md:w-3/4 blackBGFonts mx-auto flex flex-col md:gap-4 sm:gap-3 sm:px-2">
                <div>
                  <h2>Here’s The Worlds Best Kept Secret</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>

                <TimeForRead />
              </div>
            </div>
          </div>
        </div>

        {blogsList.slice(4, 8).map((blog, idx) => {
          return (
            <div
              className="flex cursor-pointer firstBlog bottomBorder "
              key={idx}
            >
              <Link
                to={`/blogs/${titleToSlug(blog?.title)}`}
                target="_black"
                className="block sm:w-7/12 md:w-1/2"
              >
                <div className=" oneBlogCont">
                  <h3>{blog?.title}</h3>
                  <p>{blog?.description}</p>
                  <TimeForRead
                    datePosted={timeAgo(blog?.date_posted)}
                    timeRead={timeReadDuration(blog?.time_reading)}
                  />
                </div>
              </Link>

              <Link
                to={`/blogs/${titleToSlug(blog.title)}`}
                target="_black"
                className="sm:w-5/12 md:w-1/2"
              >
                <div className=" ">
                  <div className="md:w-10/12 sm:w-11/12 ">
                    <img
                      src={`https://abdulrahman.onrender.com/${blog.image_url}`}
                      alt={blog.title}
                      className="w-full"
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="md:w-2/5 sm:w-full mx-auto flex flex-col align-items-center ">
        {/* one blog appear in large screen and appear in another form and position in small screens */}
        <div
          className="md:visible sm:hidden w-9/12 flex md:pe-3 py-4 bottomBorder cursor-pointer"
          onClick={onClickHandler}
        >
          <div className="w-11/12">
            <div className="md:py-7">
              <div className="divForImgSm h-52"></div>
            </div>
            <div className="w-full gap-3 px-2 flex flex-col justify-center pb-8">
              <div className=" flex flex-col align-items-center md:gap-4 oneBlogCont">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <TimeForRead />
            </div>
          </div>
        </div>

        {/* about our leader board */}
        <div
          className="md:visible sm:hidden w-9/12 flex justify-center pe-3 py-5 bottomBorder cursor-pointer"
          onClick={leaderboardNavigator}
        >
          <div className=" w-11/12 forGradBG winnerAndLoserBorder">
            <div className="formPart flex flex-col align-items-center forGradBG">
              <div className="w-5/6 flex justify-center bottomBorder pt-10 pb-8">
                <div className="w-4/5 text-center flex flex-col gap-3 winnerFont">
                  <h5>Biggest Winners</h5>
                  <OneWinner imgUrl={FirstAvatar} num={1} winner={true} />
                  <OneWinner imgUrl={SecondAvatar} num={2} winner={true} />
                  <OneWinner imgUrl={ThirdAvatar} num={3} winner={true} />
                </div>
              </div>
              <div className="w-5/6 flex justify-center pt-10 pb-8">
                <div className="w-4/5 text-center flex flex-col gap-3 winnerFont">
                  <h5>Biggest Losers</h5>
                  <OneWinner imgUrl={FirstAvatar} num={1} winner={false} />
                  <OneWinner imgUrl={SecondAvatar} num={2} winner={false} />
                  <OneWinner imgUrl={ThirdAvatar} num={3} winner={false} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-9/12 sm:w-full">
          {/* ad section appear in large screens and appear in different form and position in small screen */}
          <div className="md:visible sm:hidden flex justify-end py-7 ">
            <div className="w-11/12">
              <div className="divForImgSm h-52"></div>
            </div>
          </div>
          {/* alert appear in large screens and appear in different form and position in small screen */}
          <div className="md:visible sm:hidden blueContainer w-full py-3 px-4 text-center">
            <h3>In Case You Missed It</h3>
          </div>
          {/* old blogs appear in large screens and appear in different form and position in small screen */}
          <div className="md:visible sm:hidden">
            <OldArticle classname="pt-7 " />
            <OldArticle classname="pt-7 " />
            <OldArticle classname="pt-7 " />
          </div>

          {/* one blog */}
          <div
            className="md:visible sm:hidden flex justify-between bottomBorder py-8 cursor-pointer "
            onClick={onClickHandler}
          >
            <div className="w-5/12">
              <div className="w-11/12">
                <div className=" chinaImgDiv h-28"></div>
              </div>
            </div>

            <div className="w-6/12 flex flex-col gap-3 ">
              <div className="w-8/12 flex flex-col gap-3">
                <div className="blogTitle">
                  <h6>China Kicks U.S Butt In The Latest Whatever</h6>
                </div>
                <div className="oldBlogs">
                  <p>25 MINS AGO</p>
                </div>
              </div>
            </div>
          </div>
          {/* one blog */}
          <div className="md:visible sm:hidden py-8 ">
            <div
              className="w-11/12 mx-auto flex flex-col gap-3 cursor-pointer"
              onClick={onClickHandler}
            >
              <div className="lastInRight">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
              </div>
              <TimeForRead />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OneBlog;
