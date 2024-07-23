import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import QuizzesCards from "../../../UI-components/quizzesCards/QuizzesCards";
import "./QuizPage.css";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import customAlert from "../../../utils/customAlert";
import { duration } from "@mui/material";
import { Check } from "@mui/icons-material";

function QuizPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { quizId } = useParams();

  function closeModal() {
    axios
      .post(`${process.env.REACT_APP_API_URL}quizzes/send_result/`, {
        email: email,
        result: score,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          `quiz-${quizId}`,
          JSON.stringify({
            ...JSON.parse(localStorage.getItem(`quiz-${quizId}`)),
            totalUserScore: res.data.result,
          })
        );

        customAlert(res.data.response);
      })
      .then(() => {
        navigate(`/quizzes/${quizId}/quiz-result`);
      })
      .catch((err) => {
        console.log(email);
        console.log(err);
      })
      .finally(() => {
        setIsOpen(false);
      });
  }

  function openModal() {
    setIsOpen(true);
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0); // time in seconds
  const [highestScore, setHighestScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] =
    useState(null);
  const [score, setScore] = useState(0);
  const [scorePerQuestion, setScorePerQuestion] = useState(0);
  const [toggleSetScore, setToggleSetScore] = useState(false);

  const handleAnswerChange = (event, isRight) => {
    setSelectedAnswer(event.target.value);
    setSelectedAnswerCorrectness(isRight);
    if (isRight) {
      setScore((prevScore) => prevScore + scorePerQuestion);

      localStorage.setItem(
        `quiz-${quizId}`,
        JSON.stringify({
          ...JSON.parse(localStorage.getItem(`quiz-${quizId}`)),
          totalRightAnswers:
            JSON.parse(localStorage.getItem(`quiz-${quizId}`))
              .totalRightAnswers + 1,
        })
      );
    }
    setToggleSetScore(true);
    setTimeout(() => {
      handleNextQuestion();
    }, 500); // Delay for user to see the selection
  };

  useEffect(() => {
    if (localStorage.getItem(`quiz-${quizId}`) && toggleSetScore) {
      localStorage.setItem(
        `quiz-${quizId}`,
        JSON.stringify({
          ...JSON.parse(localStorage.getItem(`quiz-${quizId}`)),
          score: score,
        })
      );
    }
  }, [score, toggleSetScore]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      // Save the current question index and start time to local storage
      localStorage.setItem(
        `quiz-${quizId}`,
        JSON.stringify({
          ...JSON.parse(localStorage.getItem(`quiz-${quizId}`)),
          currentQuestionIndex: currentQuestionIndex + 1,
        })
      );

      setSelectedAnswer(null);
      setSelectedAnswerCorrectness(null);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}quizzes/${quizId}/`)
      .then((res) => {
        console.log(res.data);
        if (!localStorage.getItem(`quiz-${quizId}`)) {
          localStorage.setItem(
            `quiz-${quizId}`,
            JSON.stringify({
              currentQuestionIndex: 0,
              score: 0,
              startTimestamp: Date.now(),
              duration: res.data.duration * 60,
              totalRightAnswers: 0,
              totalQuizScore: res.data.result,
            })
          );
          console.log(res.data.duration * 60);
          setTimeRemaining(res.data.duration);
        } else {
          const { currentQuestionIndex, startTimestamp, score, duration } =
            JSON.parse(localStorage.getItem(`quiz-${quizId}`));
          console.log(score);
          setScore(score);
          setCurrentQuestionIndex(currentQuestionIndex);
          setTimeRemaining(
            Math.max(
              0,
              duration - Math.floor((Date.now() - startTimestamp) / 1000)
            )
          );
        }

        setScorePerQuestion(res.data.result);
        return res;
      })
      .then((res) => {
        // Check if questions exists in local storage
        if (!JSON.parse(localStorage.getItem(`quiz-${quizId}`)).questions) {
          axios
            .get(`${process.env.REACT_APP_API_URL}quizzes/${quizId}/questions/`)
            .then(({ data }) => {
              localStorage.setItem(
                `quiz-${quizId}`,
                JSON.stringify({
                  ...JSON.parse(localStorage.getItem(`quiz-${quizId}`)),
                  questions: data,
                })
              );
              console.log(data);
              setQuestions(data);
              setTotalQuestions(data.length);
              setHighestScore(res.data.result * data.length);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          const { questions } = JSON.parse(
            localStorage.getItem(`quiz-${quizId}`)
          );
          setQuestions(questions);
          setTotalQuestions(questions.length);
          setHighestScore(res.data.result * questions.length);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    const minutes = Math.floor(seconds / 60) > 0 ? Math.floor(seconds / 60) : 0;
    const remainingSeconds = seconds % 60 > 0 ? seconds % 60 : 0;
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
                {currentQuestionIndex + 1}/{questions.length}
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
            <h5>{questions[currentQuestionIndex]?.title}</h5>
          </div>
          <div className="quiz-answers grid grid-cols-2 gap-[10px] lg:gap-6">
            {questions[currentQuestionIndex]?.answer.map((ans, index) => (
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
                      <input
                        type="email"
                        className="w-full"
                        onChange={(e) => setEmail(e.target.value)}
                      />
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
