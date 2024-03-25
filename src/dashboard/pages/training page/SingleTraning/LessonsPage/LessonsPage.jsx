import React from 'react'
import $ from 'jquery';

import styles from '../SingleTraning.module.css';

import introImg from "../../../../assets/single training intro img.png"
import lesonImg from "../../../../assets/single training leson img.png"

const LessonsPage = () => {



    // function that open & close collaps 
    const openCollaps = (e) => {

        console.log($(e.target).parentsUntil(".training_lison_collapse"));
        $(e.target).parents(".training_lison_collapse").toggleClass("open");


        // toggle slide collaps by click
        $(e.target).parents(".training_lison_collapse").children(".training_lison_collapse_body").slideToggle(300);

    }



    return (
        <div className=" w-full space-y-8">

            <div className={styles.intro_step}>
                <p>In the world of stock trading, understanding technical analysis patterns can provide valuable insights into potential price movements. One such pattern that traders often utilize is the bull flag pattern. <br />
                    This article aims to provide a comprehensive overview of the bull flag pattern, including its characteristics, significance, and how traders can effectively identify and capitalize on it. </p>

                <img src={introImg} alt="" />
            </div>

            <div className=" training_lison_collapse completed">
                <div className={styles.training_lison_collapse_header + " training_lison_collapse_header"} onClick={(e) => { openCollaps(e) }}>
                    <h6>What is a bull flag?</h6>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                    </svg>
                </div>
                <div className={styles.training_lison_collapse_body + " training_lison_collapse_body"}>
                    <div className='flex items-start gap-[50px]'>
                        <div className={styles.training_lison_content} >
                            <p>The bull flag pattern is a continuation pattern commonly observed in financial markets, indicating a temporary pause or consolidation within an uptrend.  It typically consists of two main components: a sharp upward price movement (the flagpole) followed by a period of consolidation characterized by a slight retracement in price and sideways movement (the flag).</p>
                        </div>
                    </div>
                    <button className={styles.makeCompleteBtn} disabled>Mark As Complete</button>
                </div>
            </div>

            <div className=" training_lison_collapse current">
                <div className={styles.training_lison_collapse_header + " training_lison_collapse_header"} onClick={(e) => { openCollaps(e) }}>
                    <h6>Key Characteristics of a Bull Flag</h6>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                    </svg>
                </div>
                <div className={styles.training_lison_collapse_body + " training_lison_collapse_body"}>
                    <div className='flex items-start gap-[50px]'>
                        <img src={lesonImg} alt="" />
                        <div className={styles.training_lison_content} >
                            <p>Upward Trend: The bull flag pattern occurs within the context of an established upward trend, signaling a temporary pause in the price's ascent..</p>
                            <p>Flagpole: The flagpole represents the initial sharp upward movement in price, often accompanied by high trading volume, indicating strong buying pressure.</p>
                            <p>Flag Formation: Following the flagpole, the price undergoes a period of consolidation, forming a rectangular or pennant-shaped pattern as traders take profits or enter new positions.</p>
                            <p>Volume: During the consolidation phase, trading volume tends to diminish, reflecting decreased market participation.</p>
                        </div>
                    </div>
                    <button className={styles.makeCompleteBtn}>Mark As Complete</button>
                </div>
            </div>

            <div className=" training_lison_collapse">
                <div className={styles.training_lison_collapse_header + " training_lison_collapse_header"} onClick={(e) => { openCollaps(e) }}>
                    <h6>Significance of the Bull Flag Pattern</h6>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                    </svg>
                </div>
                <div className={styles.training_lison_collapse_body + " training_lison_collapse_body"}>
                    <div className='flex items-start gap-[50px]'>
                        <img src={lesonImg} alt="" />
                        <div className={styles.training_lison_content} >
                            <p>Upward Trend: The bull flag pattern occurs within the context of an established upward trend, signaling a temporary pause in the price's ascent..</p>
                            <p>Flagpole: The flagpole represents the initial sharp upward movement in price, often accompanied by high trading volume, indicating strong buying pressure.</p>
                            <p>Flag Formation: Following the flagpole, the price undergoes a period of consolidation, forming a rectangular or pennant-shaped pattern as traders take profits or enter new positions.</p>
                            <p>Volume: During the consolidation phase, trading volume tends to diminish, reflecting decreased market participation.</p>
                        </div>
                    </div>
                    <button className={styles.makeCompleteBtn} disabled>Mark As Complete</button>
                </div>
            </div>

            <div className=" training_lison_collapse">
                <div className={styles.training_lison_collapse_header + " training_lison_collapse_header"} onClick={(e) => { openCollaps(e) }}>
                    <h6>How to Identify and Trade the Bull Flag Pattern</h6>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                    </svg>
                </div>
                <div className={styles.training_lison_collapse_body + " training_lison_collapse_body"}>
                    <div className='flex items-start gap-[50px]'>
                        <img src={lesonImg} alt="" />
                        <div className={styles.training_lison_content} >
                            <p>Upward Trend: The bull flag pattern occurs within the context of an established upward trend, signaling a temporary pause in the price's ascent..</p>
                            <p>Flagpole: The flagpole represents the initial sharp upward movement in price, often accompanied by high trading volume, indicating strong buying pressure.</p>
                            <p>Flag Formation: Following the flagpole, the price undergoes a period of consolidation, forming a rectangular or pennant-shaped pattern as traders take profits or enter new positions.</p>
                            <p>Volume: During the consolidation phase, trading volume tends to diminish, reflecting decreased market participation.</p>
                        </div>
                    </div>
                    <button className={styles.makeCompleteBtn} disabled>Mark As Complete</button>
                </div>
            </div>
            <div className=" training_lison_collapse">
                <div className={styles.training_lison_collapse_header + " training_lison_collapse_header"} onClick={(e) => { openCollaps(e) }}>
                    <h6>Successful VS Failed bull flag patterns</h6>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                    </svg>
                </div>
                <div className={styles.training_lison_collapse_body + " training_lison_collapse_body"}>
                    <div className='flex items-start gap-[50px]'>
                        <img src={lesonImg} alt="" />
                        <div className={styles.training_lison_content} >
                            <p>Upward Trend: The bull flag pattern occurs within the context of an established upward trend, signaling a temporary pause in the price's ascent..</p>
                            <p>Flagpole: The flagpole represents the initial sharp upward movement in price, often accompanied by high trading volume, indicating strong buying pressure.</p>
                            <p>Flag Formation: Following the flagpole, the price undergoes a period of consolidation, forming a rectangular or pennant-shaped pattern as traders take profits or enter new positions.</p>
                            <p>Volume: During the consolidation phase, trading volume tends to diminish, reflecting decreased market participation.</p>
                        </div>
                    </div>
                    <button className={styles.makeCompleteBtn} disabled>Mark As Complete</button>
                </div>
            </div>
            <div className=" training_lison_collapse">
                <div className={styles.training_lison_collapse_header + " training_lison_collapse_header"} onClick={(e) => { openCollaps(e) }}>
                    <h6>Summary</h6>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                    </svg>
                </div>
                <div className={styles.training_lison_collapse_body + " training_lison_collapse_body"}>
                    <div className='flex items-start gap-[50px]'>
                        <img src={lesonImg} alt="" />
                        <div className={styles.training_lison_content} >
                            <p>Upward Trend: The bull flag pattern occurs within the context of an established upward trend, signaling a temporary pause in the price's ascent..</p>
                            <p>Flagpole: The flagpole represents the initial sharp upward movement in price, often accompanied by high trading volume, indicating strong buying pressure.</p>
                            <p>Flag Formation: Following the flagpole, the price undergoes a period of consolidation, forming a rectangular or pennant-shaped pattern as traders take profits or enter new positions.</p>
                            <p>Volume: During the consolidation phase, trading volume tends to diminish, reflecting decreased market participation.</p>
                        </div>
                    </div>
                    <button className={styles.makeCompleteBtn} disabled>Mark As Complete</button>
                </div>
            </div>

            <button className={styles.assessment_btn} disabled>Assessment</button>

        </div>
    )
}

export default LessonsPage
