import React, { useEffect } from 'react';
import './homepage.css';
import HeroSection from './homepage/HeroSection';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import OurRecruiters from './homepage/OurRecruitersSection';
import LoginNow from './homepage/LoginNowSection';
import UpcomingEventsSection from './homepage/UpcomingEventsSection';
import QuickAccess from './homepage/QuickAccessSection';
import HiUser from './homepage/HiUser';
import { useLocation } from 'react-router-dom';

const Homepage = () => { // Ensure the component starts with an uppercase letter
  const location = useLocation(); // useLocation must be inside the component

  useEffect(() => {
    if (location.hash === '#events') {
      const element = document.getElementById('events');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Ensure location is a dependency of useEffect

  return (
    <>
      <Header setWhenAppears={700} setWhenDisappears={0} />
      <HeroSection />
      <HiUser />
      <QuickAccess />
      <UpcomingEventsSection />
      <OurRecruiters />
      <LoginNow />
      <Footer />
    </>
  );
};

export default Homepage;
