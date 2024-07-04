import React, { useContext, useEffect } from "react";
import $ from "jquery";

import styles from "../SingleTraning.module.css";

import introImg from "../../../../assets/single training intro img.png";
import lesonImg from "../../../../assets/single training leson img.png";
import { Link } from "react-router-dom";
import { courseContext } from "../../context/coursesContext";
import getCurrent from "../../utils/getCurrent";
import axios from "axios";

const LessonsPage = () => {
  const { currentModule } = useContext(courseContext);

  useEffect(() => {
    console.log(currentModule);
  }, [currentModule]);

  // function that open & close collaps
  const openCollaps = (e) => {
    console.log($(e.target).parentsUntil(".training_lison_collapse"));
    $(e.target).parents(".training_lison_collapse").toggleClass("open");

    // toggle slide collaps by click
    $(e.target)
      .parents(".training_lison_collapse")
      .children(".training_lison_collapse_body")
      .slideToggle(300);
  };

  async function makeComplete(e) {
    axios
      .post(
        `https://abdulrahman.onrender.com/courses/section/complete/${e.target.id}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className=" w-full space-y-8">
      {/* introduction part in lessons page */}
      <div className={styles.intro_step}>
        <p>{currentModule?.description}</p>

        <img src={introImg} alt="" />
      </div>

      {/* lesson part in lessons page */}
      {currentModule?.section_set?.map((section, index) => (
        <div
          key={index}
          className={`training_lison_collapse ${
            section.is_completed
              ? "completed"
              : getCurrent(currentModule.section_set).id === section.id
              ? "current"
              : ""
          }`}
        >
          <div
            className={
              styles.training_lison_collapse_header +
              " training_lison_collapse_header"
            }
            onClick={(e) => {
              openCollaps(e);
            }}
          >
            <h6>{section.title}</h6>

            <svg
              width="30"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className={
              styles.training_lison_collapse_body +
              " training_lison_collapse_body"
            }
          >
            <div className="flex items-start gap-[50px]">
              <div className="w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-[15px] lg:gap-[50px]">
                  <div className={styles.training_lison_content}>
                    <p>{section.article}</p>
                  </div>
                  <img src={section.image} alt="" />
                </div>
              </div>
            </div>
            <button
              className={styles.makeCompleteBtn}
              disabled={section.is_completed}
              onClick={makeComplete}
            >
              {section.is_completed ? "Completed" : "Mark as complete"}
            </button>
          </div>
        </div>
      ))}

      {/* button that redirect to assessment page */}
      <Link
        to="/dashboard/training/single-training/assessment"
        className={styles.assessment_btn}
      >
        Assessment
      </Link>
    </div>
  );
};

export default LessonsPage;
