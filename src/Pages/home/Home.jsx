import React from 'react'
import image from "../../assets/resumeai.png"
import Button from "../../components/Ui/Button"
import HeroSection from '../../components/Mainlayout/HeroSection'
import WhySection from '../../components/Mainlayout/WhySection'

const Home = () => {
  return (
<>
 <div className="min-h-screen">
 <HeroSection/>
  <WhySection/>
 </div>
  </>
  )
}

export default Home;