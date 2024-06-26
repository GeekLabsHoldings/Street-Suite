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
        `https://abdulrahman.onrender.com/blogs/post/${id}/`
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
      <div className="w-3/4 mx-auto py-5">
        <div className="md:pb-10">
          {/* blog title */}
          <div className="largeHeader">
            <h1>{blogDetails?.title}</h1>
          </div>
          {/* big image about it */}
          <div className="divForImgLg md:h-96 sm:h-40 md:my-5 sm:mt-2 sm:mb-5">
            <img
              src={blogDetails?.image}
              alt={blogDetails?.title}
              className="w-full h-full"
            />
          </div>
        </div>
        {/* blog title */}
        <div className="headerFotTxtSec">
          <h3>{blogDetails?.description}</h3>
        </div>
        {/* blog description */}
        <div className="md:flex">
          <div className="md:w-2/3">
            <div className="txtSection w-11/12">
              <p>{blogDetails?.content}</p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="md:visible sm:hidden bottomBorder py-4">
              <div className="divForImgSm "></div>
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
