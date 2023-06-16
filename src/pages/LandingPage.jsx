import React from 'react';
import {
  Navbar,
  HeroSection,
  AboutUs,
  Showcase,
  Howto,
  ContactUs,
  Footer,
  Backtotop,
} from '../components/landingpage/index';

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
