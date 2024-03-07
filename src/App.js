import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import all sections as components from components folder
import AnnoncmentSlider from './components/Annoncment-Slider/AnnoncmentSlider';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/home-page/HomePage';
import QuezzesPage from './pages/Quizzes/quezzes-page/QuezzesPage';
import LeaderBoardPage from './pages/leaderboard/LeaderBoardBage';
import FaqPage from './pages/FAQ-page/FaqPage';
import PricingPage from './pages/pricing-page/PricingPage';
import FeaturesPage from './pages/features-page/FeaturesPage';
import QuizPage from './pages/Quizzes/quiz-page/QuizPage';
import QuizzesFiltersPage from './pages/Quizzes/quizzesFilters-page/QuizzesFiltersPage';
import QuizResultsPage from './pages/Quizzes/quizResults-page/QuizResultsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnnoncmentSlider/>
        <NavBar/>

          <Routes>
            <Route path="/" >
              <Route index  element={<HomePage />} />
              <Route path='quezzes'  element={<QuezzesPage />} >
                <Route index element={<QuizzesFiltersPage/>}/>
                <Route path="quiz" element={<QuizPage/>}/>
                <Route path="quiz-result" element={<QuizResultsPage/>}/>
              </Route>
              <Route path='leaderboard'  element={<LeaderBoardPage />} />
              <Route path='faq'  element={<FaqPage />} />
              <Route path='pricing'  element={<PricingPage />} />
              <Route path='features'  element={<FeaturesPage />} />
            </Route>
          </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
