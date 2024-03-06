import React from 'react'
import AcrossGlobal from '../../components/AcrossGlobal/AcrossGlobal';
import AlertsSection from '../../components/AlertsSection/AlertsSection';
import CompaniesCarousel from '../../components/CompaniesCarousel/CompaniesCarousel';
import Hero from '../../components/Hero/Hero';
import Plans from '../../components/Plans/Plans';
import Testmonial from '../../components/Testmonial/Testmonial';
import TradingSction from '../../components/TradingSection/TradingSction';
import TrainingsSection from '../../components/TrainingsSection/TrainingsSection';
import ClientsFavFeature from '../../components/ClientsFavFeature/ClientsFavFeature';
import CommingSoon from '../../components/CommingSoon/CommingSoon';
import GetStarted from '../../components/GetStarted/GetStarted';
import FAQ from '../../components/FAQ/FAQ';

import heroImg from "../../assets/hero-Img.png"

const HomePage = () => {
  return (
    <>
        <Hero>
            <h1>Trading Opportunities<br/> with<span> STREET SUITE’s </span>Alerts</h1>
            <p className='sm:container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button>Get Started</button>
            <img src={heroImg} alt="" />
        </Hero>
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
    </>
  )
}

export default HomePage
