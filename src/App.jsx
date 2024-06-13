import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import AboutUs from './components/AboutUs'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <LandingPage />
      <Marquee />
      <AboutUs />
      <Eyes />
      <Featured />
    </>
  )
}

export default App
