import React from 'react'
import QuizCard from '../../../UI-components/quizCard/QuizCard'
import quizImg from "../../../assets/quiz-img.png"

const QuizResultsPage = () => {
  return (
    <div className='quiz-wrapper'>
        <div className="gradient-border">
        <div className="quiz-view gap-12">

          <div className="quiz-questions">
            <h4>Day Trading, Swing Trading, Position Trading: 
Which Style Suits You Best?</h4>
            <div className="quiz-question-view mb-6">
              <img src={quizImg} alt="" />
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
                <p>Correct Answered</p>
                <span>9/10</span>
              </div>
            </div>
            <div className="gradient-border w-full">
              <div className="card my-score">
                <p>My Score</p>
                <span>100</span>
              </div>
            </div>
            <button className='try-again'>try again</button>
          </div>
        </div>
      </div>
      
      <div className="more-quizzes space-y-6">
        <h6>More Quizzes</h6>
        <QuizCard/>
        <QuizCard/>
        <QuizCard/>
        <QuizCard/>
        <QuizCard/>
        <QuizCard/>
      </div>
    </div>
  )
}

export default QuizResultsPage
