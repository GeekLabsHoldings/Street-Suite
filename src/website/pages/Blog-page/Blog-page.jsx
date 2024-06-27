import { Helmet } from "react-helmet-async";
import OneBlog from "../../components/OneBlog/OneBlog";
import BasicTabs from "../../components/Taps/Tabs";
import "./Blog-page.css";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Street Suite</title>
        <meta
          name="description"
          content="Dive into Street Suite’s blog about the exciting world of investing, stock trading, economics, finance, and more."
        />
      </Helmet>

      <div className="pageBG">
        <div className="md:w-1/3 sm:w-2/3  mx-auto flex flex-col md:gap-8 sm:gap-3 md:py-10 sm:py-5">
          <div className="flex justify-center ourName">
            <h1 className="highlight w-fit">Street Suite</h1>
          </div>
          <div className="descParagraph text-center">
            <p>
              Dive into our interactive quizzes designed to unravel your trading
              persona and unveil insights into your trading prowess.
            </p>
          </div>
        </div>
        <div className="md:w-10/12 sm:w-11/12 mx-auto ">
          {/* the page have a component for filter and component for its content */}
          <BasicTabs />
          <OneBlog />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
