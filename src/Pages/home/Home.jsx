import React from 'react'
import image from "../../assets/resumeai.png"
import Button from "../../components/Ui/Button"
import HeroSection from '../../components/MainLayout/HeroSection'
import WhySection from '../../components/MainLayout/WhySection'
import ContactForm from '../../components/MainLayout/ContactForm'

const Home = () => {
  return (
<>
 <div className="min-h-screen">
 <HeroSection/>
  <WhySection/>
  <ContactForm/>
 </div>
  </>
  )
}

export default Home;