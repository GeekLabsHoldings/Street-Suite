import React from 'react'
import AcrossGlobal from '../../components/home-page-sections/AcrossGlobal/AcrossGlobal';
import AlertsSection from '../../components/home-page-sections/AlertsSection/AlertsSection';
import CompaniesCarousel from '../../components/home-page-sections/CompaniesCarousel/CompaniesCarousel';
import Hero from '../../components/home-page-sections/Hero/Hero';
import Plans from '../../components/home-page-sections/Plans/Plans';
import Testmonial from '../../components/home-page-sections/Testmonial/Testmonial';
import TradingSction from '../../components/home-page-sections/TradingSection/TradingSection';
import TrainingsSection from '../../components/home-page-sections/TrainingsSection/TrainingsSection';
import ClientsFavFeature from '../../components/home-page-sections/ClientsFavFeature/ClientsFavFeature';
import CommingSoon from '../../components/home-page-sections/CommingSoon/CommingSoon';
import GetStarted from '../../components/home-page-sections/GetStarted/GetStarted';
import FAQ from '../../components/home-page-sections/FAQ/FAQ';

import heroImg from "../../assets/hero-Img.png"
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>

      <Helmet>
        <title>Street Suite</title>
        <meta
          name="description"
          content="Join Street Suite – a trading tool which will provide you with daily trading alerts and insights you can trust, with all the information to back it up."
        />
      </Helmet>

      <Hero>
        <h1>Trading Opportunities<br /> with <span> STREET SUITE’s </span>Alerts</h1>
        <p className='sm:container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <button>Get Started</button>
        <img src={heroImg} alt="" className='hidden md:block' />
      </Hero>
      <AlertsSection />
      <TradingSction />
      <TrainingsSection />
      <CompaniesCarousel />
      <Testmonial />
      <Plans />
      <AcrossGlobal />
      <ClientsFavFeature />
      <CommingSoon />
      <GetStarted />
      <FAQ />
    </>
  )
}

export default HomePage
