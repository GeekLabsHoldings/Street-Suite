import { useState } from "react";
import BlogForm from "../../components/BlogForm/BlogForm";
import "./SpecificBlog.css";
import { useParams } from "react-router-dom/dist";
import axios from "axios";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const SpecificBlog = () => {
  const { id } = useParams();
  const [pageLoading, setPageLoading] = useState(false);
  const [blogDetails, setBlogDetails] = useState(null);

  async function getBlogDetails() {
    try {
      // window.scrollTo(0, 0);
      setPageLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}blogs/post/${id}/`
      );
      setBlogDetails(data);
    } catch (e) {
      console.error(e);
    } finally {
      setPageLoading(false);
    }
  }

  useEffect(() => {
    getBlogDetails();
  }, []);

  if (pageLoading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (blogDetails === null) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <p class="alert-message">No blog found</p>
      </div>
    );
  }

  return (
    // page to show one blog and its all details
    <div className="pageBG">
      <div className="w-3/4 mx-auto pb-5 pt-32">
        <div className="md:pb-10">
          {/* blog title */}
          <div className="largeHeader">
            <h1 className=" !text-[--60px]">{blogDetails?.title}</h1>
          </div>
          {/* big image about it */}
          <div className="divForImgLg md:h-96 sm:h-40 md:my-5 sm:mt-2 sm:mb-5 rounded-xl overflow-hidden">
            <img
              src={blogDetails?.image}
              alt={blogDetails?.title}
              className="w-full h-full"
            />
          </div>
        </div>
        {/* blog title */}
        <div className="headerFotTxtSec">
          <h3 className="!text-[--40px]">{blogDetails?.description}</h3>
        </div>
        {/* blog description */}
        <div className="md:flex">
          <div className="md:w-2/3">
            <div className="txtSection w-11/12">
              <p className=" !text-[--13px]">{blogDetails?.content ? blogDetails.content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip

 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.LoremLorem ipsum dolor sit amet, consectetur adip

iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in

 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`}</p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="md:visible sm:hidden bottomBorder pb-[--sy-26px]">
              <div className="divForImgSm md:h-28 sm:h-20 w-full"></div>
            </div>
            {/* similar blogs to read */}
            <BlogForm />
            <BlogForm />
            <BlogForm classname="lastExample" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificBlog;
