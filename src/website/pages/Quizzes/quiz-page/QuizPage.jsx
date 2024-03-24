import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import "./QuizPage.css"

import quizImg from "../../../assets/quiz-img.png"
import QuizCard from '../../../UI-components/quizCard/QuizCard'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'



const CustomArrow = (props) => {
  const { className, style, onClick } = props;

  return (

    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="31" height="41" viewBox="0 0 31 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.72503e-06 2.05123L2.11204e-06 38.9523C0.00118656 39.3259 0.10525 39.6921 0.300989 40.0115C0.496727 40.3309 0.77673 40.5914 1.11086 40.7649C1.44499 40.9385 1.82059 41.0185 2.19724 40.9964C2.57389 40.9743 2.93731 40.8509 3.2484 40.6395L30.1631 22.189C31.279 21.4243 31.279 19.5833 30.1631 18.8166L3.2484 0.366085C2.93796 0.15252 2.57435 0.0272807 2.19708 0.00397365C1.81981 -0.0193334 1.4433 0.0601835 1.10846 0.233885C0.773622 0.407587 0.493259 0.668829 0.297838 0.989229C0.102417 1.30963 -0.000591351 1.67693 3.72503e-06 2.05123Z" fill="#53ACFF" fill-opacity="1" />
      </svg>

    </div>
  )
}



function QuizPage() {

  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "50px",

    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
};

  function closeModal() {
    setIsOpen(false);
    navigate("/quizzes/quiz-result")
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='quiz-wrapper'>
      <h4>
        Day Trading, Swing Trading, Position Trading: Which Style Suits You Best?
      </h4>

      <div className="quiz-view gap-12 mb-4">
        <div className="quiz-score-sheet flex h-full gap-1 lg:gap-4 mb-[20px] lg:mb-10">
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Questions</p>
              <span>12:25</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Timer</p>
              <span>9/10</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Highest Score</p>
              <span>100</span>
            </div>
          </div>
          <button onClick={openModal} className='w-1/4'>Results</button>
        </div>
        <div className="quiz-questions">
          <div className="quiz-question-view mb-[20px] lg:mb-10">
            <img src={quizImg} alt="" /> 
          </div>
          <div className="quiz-answers grid grid-cols-2 gap-[10px] lg:gap-6">

            <label htmlFor="Latest"> Latest
              <input type="radio" id='Latest' name='check-Filter' />
            </label>

            <label htmlFor="Trading-Styles"> Trading Styles
              <input type="radio" id='Trading-Styles' name='check-Filter' />
            </label>


            <label htmlFor="Risk-Management"> Risk Management
              <input type="radio" id='Risk-Management' name='check-Filter' />
            </label>


            <label htmlFor="Market-Analysis"> Market Analysis
              <input type="radio" id='Market-Analysis' name='check-Filter' />
            </label>

          </div>
        </div>

      </div>



      {/* more quizzes in quiz page */}
      <div className="quizzes-cards space-y-6">

        <div className='title flex items-center justify-between'>
          <h6>More Quizzes</h6>
          <Link to="">See More <svg width="10" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
          </svg></Link>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            <div style={{ width: 220 }}>
              <QuizCard />
            </div>
            <div style={{ width: 220 }}>
              <QuizCard />
            </div>
            <div style={{ width: 220 }}>
              <QuizCard />
            </div>
            <div style={{ width: 220 }}>
              <QuizCard />
            </div>
            <div style={{ width: 220 }}>
              <QuizCard />
            </div>
            <div style={{ width: 220 }}>
              <QuizCard />
            </div>
          </Slider>
        </div>
      </div>



      {/* add email modal in quiz page to show resalt of quiz */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* <div className="fixed inset-0 " aria-hidden="true" /> */}


          <div className="fixed inset-0 overflow-y-auto bg-neutral-900 bg-opacity-45">
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
                <div className="gradient-border add-email-modal">
                  <Dialog.Panel className="modal-body w-full max-w-xl transform overflow-hidden rounded-2xl p-10 align-middle shadow-xl transition-all">
                    <h6 className=" text-white">
                      You Are One Step Away From Getting Your Results!
                    </h6>
                    <div className="line"></div>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Enter your Email for Results Link
                      </p>
                    </div>
                    <div className="input-text flex flex-col items-start">
                      <input type="text" className='w-full' />
                      <span>Rest assured, by signing up with your email, we promise to never inundate your inbox with spam or unwanted messages.</span>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex"
                        onClick={closeModal}
                      >
                        Sign Up
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
  )
}

export default QuizPage
