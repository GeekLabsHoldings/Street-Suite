import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import all sections as components from components folder
import AnnoncmentSlider from './components/Annoncment-Slider/AnnoncmentSlider';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/home-page/HomePage';
import QuezzesPage from './pages/quezzes-page/QuezzesPage';
import LeaderBoardPage from './pages/leaderboard/LeaderBoardBage';
import FaqPage from './pages/FAQ-page/FaqPage';
import PricingPage from './pages/pricing-page/PricingPage';
import FeaturesPage from './pages/features-page/FeaturesPage';
import QuizPage from './pages/quiz-page/QuizPage';

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
                <Route to="quiz" element={<QuizPage/>}/>
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
