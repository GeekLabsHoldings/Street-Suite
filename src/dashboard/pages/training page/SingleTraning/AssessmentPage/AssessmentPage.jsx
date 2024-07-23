import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";

import styles from "../SingleTraning.module.css";

import AssessmentChart from "./AssessmentChart";
import axios from "axios";
import { useParams } from "react-router-dom";

// assessment page
const AssessmentPage = () => {
  const { moduleId } = useParams();
  const [assessmentData, setAssessmentData] = useState({});

  // useEffect that fetch data from api
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}courses/assessment/${moduleId}`)
      .then((res) => {
        console.log(res.data[0]);
        setAssessmentData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={styles.assessment_wrapper + " w-full space-y-3 lg:space-y-8"}
    >
      {/* title of the page */}
      <h4>Assessment</h4>
      <p>{assessmentData.description}</p>

      {/* Instructions of assessment page */}
      <div className=" training_lison_collapse">
        <div
          className={
            styles.training_lison_collapse_header +
            " training_lison_collapse_header"
          }
        >
          <h6>Instructions</h6>
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
            <div className={styles.training_lison_content}>
              <p>{assessmentData.instructions}</p>
            </div>
          </div>
        </div>
      </div>

      {/* assessment view part */}
      <div className={styles.assessment_view}>
        {/* title of assessment */}
        <div className={styles.assessment_view_title}>
          <h6>
            Drag and drop the flags over 4 bull flag patterns in the live chart.
          </h6>

          {/* numbers of correct answer */}
          <span>0/4</span>
        </div>

        <div className="quistion-answers flex flex-col lg:flex-row items-stretch gap-[15px] lg:gap-[40px]">
          {/* assessment chart */}
          <div
            className={
              styles.assessment_view_question +
              " w-full lg:w-4/5 h-64 lg:h-auto relative"
            }
          >
            {/* <div className={styles.ChartOverlay}></div> */}

            {/* import assessment chart component  */}
            <AssessmentChart />
          </div>

          {/* assessment answers */}
          <div
            className={
              styles.assessment_view_answers +
              " w-full lg:w-1/5 flex space-x-1 lg:space-x-0 lg:space-y-3"
            }
          >
            {/* first answer */}
            <div className={styles.answer + " w-1/4 lg:w-full h-auto lg:h-1/4"}>
              {/* draggable component that make answer shape draggable imported from react-draggable */}
              <Draggable
                handle="svg"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                bounds="parent"
                // onStart={handleStart1}
                // onDrag={handleDrag1}
                // onStop={handleStop1}
              >
                <svg
                  width="57"
                  height="63"
                  viewBox="0 0 57 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 62L33.0831 11.9073M33.0831 11.9073L40.069 1H56L51.8276 11.9073H33.0831Z"
                    stroke="white"
                  />
                </svg>
              </Draggable>
            </div>

            {/* second answer */}
            <div className={styles.answer + " w-1/4 lg:w-full h-auto lg:h-1/4"}>
              {/* draggable component that make answer shape draggable imported from react-draggable */}
              <Draggable
                handle="svg"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                // onStart={handleStart2}
                // onDrag={handleDrag2}
                // onStop={handleStop2}
              >
                <svg
                  width="43"
                  height="68"
                  viewBox="0 0 43 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 67L18.9811 16.5M18.9811 16.5L24.5 1H41.5L38.5 16.5H18.9811Z"
                    stroke="white"
                  />
                </svg>
              </Draggable>
            </div>

            {/* third answer */}
            <div className={styles.answer + " w-1/4 lg:w-full h-auto lg:h-1/4"}>
              {/* draggable component that make answer shape draggable imported from react-draggable */}
              <Draggable
                handle="svg"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                // onStart={handleStart3}
                // onDrag={handleDrag3}
                // onStop={handleStop3}
              >
                <svg
                  width="107"
                  height="81"
                  viewBox="0 0 107 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 80L54.2595 25M54.2595 25L77.5 1H106L94.5 25H54.2595Z"
                    stroke="white"
                  />
                </svg>
              </Draggable>
            </div>

            {/* fourth */}
            <div className={styles.answer + " w-1/4 lg:w-full h-auto lg:h-1/4"}>
              {/* draggable component that make answer shape draggable imported from react-draggable */}
              <Draggable
                handle="svg"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                // onStart={handleStart4}
                // onDrag={handleDrag4}
                // onStop={handleStop4}
              >
                <svg
                  width="77"
                  height="68"
                  viewBox="0 0 77 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 67.5L43.6316 13.5M43.6316 13.5L53.5 1L75.5 13.5L66.5 25L43.6316 13.5Z"
                    stroke="white"
                  />
                </svg>
              </Draggable>
            </div>
          </div>
        </div>
      </div>

      {/* assessment score that will appear when user complete the assessment */}
      {assessmentData?.is_completed?.is_completed && (
        <div className={styles.assesment_score}>
          {/* title */}
          <h5>Assessment Score</h5>

          {/* score of assessment */}
          <span>88%</span>
        </div>
      )}
      <div className={styles.previous_assessment_btn}>
        {/* previous button that return user to lessons */}
        <button className={styles.previous_btn}>Previous</button>

        {/* complete button that complete assessment and show assessment score */}
        <button className={styles.assessment_btn} disabled>
          Mark As Complete
        </button>

        {/* return button that make user restart anouther assessmenr */}
        <button className={styles.assessment_btn + " d-none"}>Retry</button>
      </div>
    </div>
  );
};

export default AssessmentPage;
