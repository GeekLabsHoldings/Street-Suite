import "./BlogForm.css";

const BlogForm = ({ classname }) => {
  return (
    // repeated part for every old blog
    <div
      className={`flex justify-between items-center md:gap-[--22px] sm:gap-2 md:py-[--36px] sm:py-3 bottomBorder ${classname}`}
    >
      <div className="md:w-1/2 sm:w-2/5 flex-grow">
        <div className="divForImgSm md:h-28 sm:h-20 w-full"></div>
      </div>
      {/* blog name and date of publish  */}
      <div className="md:w-1/2 sm:w-3/5 ">
        <div className="similarBlogs flex flex-col md:gap-3 sm:gap-2">
          <h5>China Kicks U.S Butt In The Latest Whatever</h5>
          <div className="bluecolor">
            <span>25 MINS AGO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
