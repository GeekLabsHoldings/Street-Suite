import './App.css';

// import all sections as components from components folder
import AcrossGlobal from './components/AcrossGlobal/AcrossGlobal';
import AlertsSection from './components/AlertsSection/AlertsSection';
import AnnoncmentSlider from './components/Annoncment-Slider/AnnoncmentSlider';
import CompaniesCarousel from './components/CompaniesCarousel/CompaniesCarousel';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Plans from './components/Plans/Plans';
import Testmonial from './components/Testmonial/Testmonial';
import TradingSction from './components/TradingSection/TradingSction';
import TrainingsSection from './components/TrainingsSection/TrainingsSection';
import ClientsFavFeature from './components/ClientsFavFeature/ClientsFavFeature';
import CommingSoon from './components/CommingSoon/CommingSoon';
import GetStarted from './components/GetStarted/GetStarted';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AnnoncmentSlider/>
      <NavBar/>
      <Hero/>
      <AlertsSection/>
      <TradingSction />
      <TrainingsSection/>
      <CompaniesCarousel/>
      <Testmonial/>
      <Plans/>
      <AcrossGlobal/>
      <ClientsFavFeature/>
      <CommingSoon/>
      <GetStarted/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
