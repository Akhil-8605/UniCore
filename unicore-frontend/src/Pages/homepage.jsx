import {React, useEffect} from 'react'
import "./homepage.css"
import HeroSection from "./homepage/HeroSection"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OurRecruiters from "./homepage/OurRecruitersSection"
import LoginNow from './homepage/LoginNowSection'

function homepage() {

  return (
    <>
      <Header />
      <HeroSection />
      <OurRecruiters/>
      <LoginNow />
      {/* <Footer/> */}
    </>
  )
}

export default homepage
