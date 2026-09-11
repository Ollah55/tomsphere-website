import Hero from "../components/Hero"
import HomeProducts from "../components/HomeProducts"
import WhyChoose from "../components/WhyChoose"
import TrainingPrograms from "../components/TrainingPrograms"
import ServicesSection from "../components/ServicesSection"
import WhatsAppFloat from "../components/WhatsappFloat"
import BackToTop from "../components/BackToTop"
import HowTrainingWorks from "../components/HowTrainingWorks"
import WhatYouGain from "../components/WhatYouGain"
import FAQ from "../components/FAQ"
import FinalCTA from "../components/FinalCTA"
import { Helmet } from "react-helmet"

function Home() {
  return (
    <>
    <Helmet>
        <title>Tomsphere Globaltech | Tech Training & Digital Solutions</title>

        <meta
        name="description"
        content="Tomsphere Globaltech offers hands-on tech training in Frontend, Backend, Cybersecurity, UI/UX and Data Analytics. Start your tech career today."
        />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Ikeja, Lagos" />
    </Helmet>
      <Hero />
      <WhyChoose />
      <TrainingPrograms />
      <ServicesSection />
      <HomeProducts />
      <HowTrainingWorks />
      <WhatYouGain />
      <FAQ />
      <FinalCTA />
      <WhatsAppFloat />
      <BackToTop />
    </>
  )
}

export default Home
