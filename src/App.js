import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import all sections as components from components folder
import Footer from './website/components/home-page-sections/Footer/Footer';
import HomePage from './website/pages/home-page/HomePage';
import QuezzesPage from './website/pages/Quizzes/quezzes-page/QuezzesPage';
import LeaderBoardPage from './website/pages/leaderboard/LeaderBoardBage';
import FaqPage from './website/pages/FAQ-page/FaqPage';
import PricingPage from './website/pages/pricing-page/PricingPage';
import FeaturesPage from './website/pages/features-page/FeaturesPage';
import QuizPage from './website/pages/Quizzes/quiz-page/QuizPage';
import QuizzesFiltersPage from './website/pages/Quizzes/quizzesFilters-page/QuizzesFiltersPage';
import QuizResultsPage from './website/pages/Quizzes/quizResults-page/QuizResultsPage';
import CheckOutPage from './website/pages/pricing-page/checkout-page/CheckOutPage';
import CompleteCheckout from './website/pages/pricing-page/checkout-page/complete-checkout-page/CompleteCheckout';
import APIPage from './website/pages/API-page/APIPage';
import AboutUsPage from './website/pages/AboutUs-page/AboutUsPage';
import SignupPage from './website/pages/signup/SignupPage';
import ContactPage from './website/pages/ContactPage/ContactPage';
import ChangeLogs from './website/pages/ChangeLog-page/changeLog';
import DashboardLayout from './dashboard/layouts/DashboardLayout';
import WebsiteLayout from './website/layouts/WebsiteLayout';
import AlertsPage from './dashboard/pages/alerts page/alertsPage';
import TrainingPage from './dashboard/pages/training page/TrainingPage';
import TradingFlowPage from './dashboard/pages/tradingFlow page/TradingFlowPage';

import TopBroker from './website/pages/TopBrokerPage/TopBroker';
import YourPortfolioPage from './dashboard/pages/tradingFlow page/YourPotfolioPage/YourPortfolioPage';
import PrivateEquityPage from './dashboard/pages/tradingFlow page/PrivateEquityPage/PrivateEquityPage';
import CareersPage from './website/pages/Careers-page/Careers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsiteLayout />} >

              <Route index  element={<HomePage />} />
              {/* quizzes page route  */}
              <Route path='quezzes'  element={<QuezzesPage />} >
                <Route index element={<QuizzesFiltersPage/>}/>
                <Route path="quiz" element={<QuizPage/>}/>
                <Route path="quiz-result" element={<QuizResultsPage/>}/>
              </Route>

              <Route path='leaderboard'  element={<LeaderBoardPage />} />
              <Route path='faq'  element={<FaqPage />} />
              <Route path='pricing'  element={<PricingPage />} />
              <Route path='checkout' element={<CheckOutPage />} />
              <Route path='complete-checkout' element={<CompleteCheckout />} />
              <Route path='features'  element={<FeaturesPage />} />
              <Route path='api'  element={<APIPage />} />
              <Route path='about-us'  element={<AboutUsPage />} />
              <Route path='signup'  element={< SignupPage/>} />
              <Route path='contactus'  element={<ContactPage />} />
              <Route path='change-logs'  element={<ChangeLogs />} />
              <Route path='top-brokers'  element={<TopBroker/>} />
              <Route path='careers'  element={<CareersPage/>} />


          </Route>


          <Route path='/dashboard' element={<DashboardLayout />}>

            <Route index element={<AlertsPage />} />
            <Route path="alerts" element={<AlertsPage />} />
            <Route path="training" element={<TrainingPage />} />
            <Route path="trading" element={<TradingFlowPage />} >
              <Route index element={<YourPortfolioPage/>} />
              <Route path='private-equity' element={<PrivateEquityPage />} />
            </Route>

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
