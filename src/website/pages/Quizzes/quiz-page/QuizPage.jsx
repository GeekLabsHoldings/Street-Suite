import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import "./QuizPage.css"

import quizImg from "../../../assets/quiz-img.png"
import QuizCard from '../../../UI-components/quizCard/QuizCard'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

function QuizPage() {

  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  
  function closeModal() {
    setIsOpen(false);
    navigate("/quezzes/quiz-result")
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='quiz-wrapper'>
      <h4>
        Day Trading, Swing Trading, Position Trading: Which Style Suits You Best?
      </h4>
      <div className="gradient-border">
        <div className="quiz-view gap-12">
          <div className="quiz-questions">
            <div className="quiz-question-view mb-6">
              <img src={quizImg} alt="" />
            </div>
            <h6>What is the primary goal of most day traders?</h6>
            <div className="quiz-answers grid grid-cols-2 gap-6">
              <div className="gradient-border">
                <label htmlFor="Latest"> Latest
                  <input type="radio" id='Latest' name='check-Filter' />
                </label>
              </div>
              <div className="gradient-border">
                <label htmlFor="Trading-Styles"> Trading Styles
                  <input type="radio" id='Trading-Styles' name='check-Filter' />
                </label>
              </div>
              <div className="gradient-border">
                <label htmlFor="Risk-Management"> Risk Management
                  <input type="radio" id='Risk-Management' name='check-Filter' />
                </label>
              </div>
              <div className="gradient-border">
                <label htmlFor="Market-Analysis"> Market Analysis
                  <input type="radio" id='Market-Analysis' name='check-Filter' />
                </label>
              </div>
            </div>
          </div>
          <div className="quiz-score-sheet flex flex-col space-y-6 h-full items-center">
            <div className="gradient-border w-full">
              <div className="card">
                <p>Quiz Duration</p>
                <span>12:25</span>
              </div>
            </div>
            <div className="gradient-border w-full">
              <div className="card">
                <p>Questions Answered</p>
                <span>9/10</span>
              </div>
            </div>
            <div className="gradient-border w-full">
              <div className="card">
                <p>Highest Score</p>
                <span>100</span>
              </div>
            </div>
            <button onClick={openModal}>Results</button>
          </div>
        </div>
      </div>

      {/* more quizzes in quiz page */}
      <div className="more-quizzes space-y-6">
        <h6>More Quizzes</h6>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>



        {/* add email modal in quiz page to show resalt of quiz */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />


          <div className="fixed inset-0 overflow-y-auto">
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
                      <input type="text" className='w-full'/>
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
