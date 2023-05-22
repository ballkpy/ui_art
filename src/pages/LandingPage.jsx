import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import HeroSection from '../components/landingpage/HeroSection';
import AboutUs from '../components/landingpage/AboutUs';
import Showcase from '../components/landingpage/Showcase';
import Howto from '../components/landingpage/Howto';
import ContactUs from '../components/landingpage/ContactUs';
import Footer from '../components/landingpage/Footer';
import Backtotop from '../components/landingpage/Backtotop';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Showcase />
      <Howto />
      <ContactUs />
      <Footer />
      <Backtotop />
    </>
  );
};

export default LandingPage;
