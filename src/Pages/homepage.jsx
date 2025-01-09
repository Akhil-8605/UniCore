import {React, useEffect} from 'react'
import "./homepage.css"
import HeroSection from "./homepage/HeroSection"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OurRecruiters from "./homepage/OurRecruitersSection"
import LoginNow from './homepage/LoginNowSection'
import UpcomingEventsSection from './homepage/UpcomingEventsSection'
import QuickAccess from './homepage/QuickAccessSection'

function homepage() {

  return (
    <>
      {/* <Header setWhenAppears={700} setWhenDisappears={1996.800048828125}/> */}
      <Header setWhenAppears={700} setWhenDisappears={0}/>
      <HeroSection />
      <QuickAccess/>
      <UpcomingEventsSection />
      <OurRecruiters/>
      <LoginNow />
      <Footer/>
    </>
  )
}

export default homepage
