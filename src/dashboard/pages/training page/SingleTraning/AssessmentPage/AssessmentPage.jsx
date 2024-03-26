import React from 'react'
import $ from 'jquery';

import styles from '../SingleTraning.module.css';

import assessmentImg from "../../../../assets/assessment img.png"

const AssessmentPage = () => {


    return (

        <div className={styles.assessment_wrapper + " w-full space-y-8"}>
            <h4>Assessment</h4>
            <p>Welcome to the post-course assessment on the Bull Flag Pattern! Congratulations on completing the course and gaining valuable insights into this powerful technical analysis pattern. Now, it's time to put your knowledge to the test and demonstrate your proficiency in identifying bull flag patterns in live stock charts</p>
            <div className=" training_lison_collapse">
                <div className={styles.training_lison_collapse_header + " training_lison_collapse_header"}>
                    <h6>Instructions</h6>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                    </svg>
                </div>
                <div className={styles.training_lison_collapse_body + " training_lison_collapse_body"}>
                    <div className='flex items-start gap-[50px]'>
                        <div className={styles.training_lison_content} >
                            <p>1. Scroll through the live stock chart and carefully analyze the price movements.</p>
                            <p>2. Look for instances where the price exhibits a sharp upward movement followed by a period of consolidation, resembling a flagpole and flag formation.</p>
                            <p>3. Once you've identified a potential bull flag pattern, select one of the provided bull flag pattern overlays from the options provided.</p>
                            <p>4. Drag the selected overlay and place it over the detected bull flag pattern in the live chart, ensuring it aligns accurately with the flagpole and flag formation.</p>
                            <p>5. Confirm your selection and proceed to the next assessment question.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.assessment_view}>
                <div className={styles.assessment_view_title}>
                    <h6>Drag and drop the flags over 4  bull flag patterns in the live chart.</h6>
                    <span>0/4</span>
                </div>

                <div className='flex items-stretch gap-[40px]'>
                    <div className={styles.assessment_view_question + " w-4/5"}>
                        <img src={assessmentImg} alt="" className='w-full'/>
                    </div>
                    <div className={styles.assessment_view_answers + " w-1/5 flex flex-col space-y-3"}>
                    <div className={styles.border_animate + " w-full h-1/4"}>
                        <div className={styles.answer}>
                            <svg width="57" height="63" viewBox="0 0 57 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 62L33.0831 11.9073M33.0831 11.9073L40.069 1H56L51.8276 11.9073H33.0831Z" stroke="white" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.border_animate + " w-full h-1/4"}>
                        <div className={styles.answer}>
                            <svg width="57" height="63" viewBox="0 0 57 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 62L33.0831 11.9073M33.0831 11.9073L40.069 1H56L51.8276 11.9073H33.0831Z" stroke="white" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.border_animate + " w-full h-1/4"}>
                        <div className={styles.answer}>
                            <svg width="57" height="63" viewBox="0 0 57 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 62L33.0831 11.9073M33.0831 11.9073L40.069 1H56L51.8276 11.9073H33.0831Z" stroke="white" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.border_animate + " w-full h-1/4"}>
                        <div className={styles.answer}>
                            <svg width="57" height="63" viewBox="0 0 57 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 62L33.0831 11.9073M33.0831 11.9073L40.069 1H56L51.8276 11.9073H33.0831Z" stroke="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            <div className={styles.previous_assessment_btn}>
                <button className={styles.previous_btn}>Previous</button>
                <button className={styles.assessment_btn} disabled>Assessment</button>
            </div>
        </div>

    )
}

export default AssessmentPage
