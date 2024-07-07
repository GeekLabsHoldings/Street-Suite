import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import QuizzesCards from "../../../UI-components/quizzesCards/QuizzesCards";
import "./QuizPage.css";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QuizPage() {
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
    navigate("/quizzes/quiz-result");
  }

  function openModal() {
    setIsOpen(true);
  }

  const quizData = [
    {
      title: "which of those is a musical movie ?",
      answer: [
        {
          answer_text: "black panther",
          is_right: false,
        },
        {
          answer_text: "scarface",
          is_right: false,
        },
        {
          answer_text: "spiderman",
          is_right: false,
        },
        {
          answer_text: "back again",
          is_right: true,
        },
      ],
    },
    {
      title: "who is the director of Batman the dark knight",
      answer: [
        {
          answer_text: "Ben afleck",
          is_right: false,
        },
        {
          answer_text: "christopher nolan",
          is_right: true,
        },
        {
          answer_text: "David yates",
          is_right: false,
        },
        {
          answer_text: "Chris Columbus",
          is_right: false,
        },
      ],
    },
    {
      title: "who played Captain America's role ?",
      answer: [
        {
          answer_text: "Chris Hermesworth",
          is_right: false,
        },
        {
          answer_text: "Chris Evans",
          is_right: true,
        },
        {
          answer_text: "Robert Downey Jr",
          is_right: false,
        },
        {
          answer_text: "Samuel L Jackson",
          is_right: false,
        },
      ],
    },
    {
      title: "who is the actor of the matrix",
      answer: [
        {
          answer_text: "Chris Evans",
          is_right: false,
        },
        {
          answer_text: "Robert Deniro",
          is_right: false,
        },
        {
          answer_text: "Ben Afleck",
          is_right: false,
        },
        {
          answer_text: "Keanu Reeves",
          is_right: true,
        },
      ],
    },
    {
      title: "which of those is a superhero",
      answer: [
        {
          answer_text: "spiderman",
          is_right: false,
        },
        {
          answer_text: "superman",
          is_right: false,
        },
        {
          answer_text: "batman",
          is_right: false,
        },
        {
          answer_text: "all of these",
          is_right: true,
        },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(120); // time in seconds
  const [highestScore, setHighestScore] = useState(100);
  const totalQuestions = quizData.length;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] =
    useState(null);

  const handleAnswerChange = (event, isRight) => {
    setSelectedAnswer(event.target.value);
    setSelectedAnswerCorrectness(isRight);
    setTimeout(() => {
      handleNextQuestion();
    }, 500); // Delay for user to see the selection
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setSelectedAnswerCorrectness(null);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (timeRemaining <= 0 && currentQuestionIndex <= totalQuestions - 1) {
      setIsOpen(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return (
    <div className="quiz-wrapper">
      <h4>
        Day Trading, Swing Trading, Position Trading: Which Style Suits You
        Best?
      </h4>

      <div className="quiz-view gap-12 mb-4">
        <div className="quiz-score-sheet flex h-full gap-[5px] lg:gap-[1rem] mb-[20px] lg:mb-10">
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Timer</p>
              <span>{formatTime(timeRemaining)}</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Questions</p>
              <span>
                {currentQuestionIndex + 1}/{totalQuestions}
              </span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="quiz-score-sheet-card">
              <p>Highest Score</p>
              <span>{highestScore}</span>
            </div>
          </div>
          <button onClick={openModal} className="w-1/4">
            Results
          </button>
        </div>

        <div className="quiz-questions">
          <div className="quiz-question-view mb-[20px] lg:mb-10">
            <h5>{quizData[currentQuestionIndex].title}</h5>
          </div>
          <div className="quiz-answers grid grid-cols-2 gap-[10px] lg:gap-6">
            {quizData[currentQuestionIndex].answer.map((ans, index) => (
              <label
                key={index}
                htmlFor={`answer-${index}`}
                className={
                  selectedAnswer === ans.answer_text
                    ? selectedAnswerCorrectness
                      ? "bg-green-500"
                      : "bg-red-500"
                    : ""
                }
              >
                {ans.answer_text}
                <input
                  type="radio"
                  id={`answer-${index}`}
                  name="quiz-answer"
                  onChange={(e) => handleAnswerChange(e, ans.is_right)}
                  checked={selectedAnswer === ans.answer_text}
                  value={ans.answer_text}
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* more quizzes in quiz page */}
      <QuizzesCards />

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
                  <Dialog.Panel className="modal-body w-[40vw] transform overflow-hidden rounded-2xl p-10 align-middle shadow-xl transition-all">
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
                      <input type="text" className="w-full" />
                      <span>
                        Rest assured, by signing up with your email, we promise
                        to never inundate your inbox with spam or unwanted
                        messages.
                      </span>
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
  );
}

export default QuizPage;
