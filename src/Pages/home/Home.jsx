import React from 'react'
import image from "../../assets/resumeai.png"
import Button from "../../components/Ui/Button"
import HeroSection from '../../layout/MainLayout/HeroSection'
import WhySection from '../../layout/MainLayout/WhySection'
import ContactForm from '../../layout/MainLayout/ContactForm'

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