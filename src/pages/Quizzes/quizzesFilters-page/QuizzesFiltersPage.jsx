import React from 'react'
import QuizCard from '../../../UI-components/quizCard/QuizCard'

const QuizzesFiltersPage = () => {
    return (
        <>

            <div className="search-input">
                <div className="input-box">
                    <input type="text" placeholder='Search by...' />
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.187 17.1826C15.8253 15.5195 17.5212 10.9988 15.975 7.08547C14.4288 3.1721 10.2259 1.34793 6.58765 3.01107C2.94939 4.67422 1.25346 9.19488 2.79968 13.1082C4.34591 17.0216 8.54876 18.8458 12.187 17.1826Z" stroke="white" stroke-width="2.3301" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.4492 15.541L20.0007 21.5131" stroke="white" stroke-width="2.3301" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <button>Search</button>
            </div>

            <div className="check-Filter">
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
                <label htmlFor="Trading-Psychology"> Trading Psychology
                    <input type="radio" id='Trading-Psychology' name='check-Filter' />
                </label>
                <label htmlFor="Trading-Strategies"> Trading-Strategies
                    <input type="radio" id='Trading-Strategies' name='check-Filter' />
                </label>
                <label htmlFor="Market-Instruments"> Market-Instruments
                    <input type="radio" id='Market-Instruments' name='check-Filter' />
                </label>
            </div>

            <div className="quezzes-cards space-y-6">
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>

        </>
    )
}

export default QuizzesFiltersPage
