import Hero from "../components/Hero"
import WhyChoose from "../components/WhyChoose"
import TrainingPrograms from "../components/TrainingPrograms"
import ServicesSection from "../components/ServicesSection"
import WhatsAppFloat from "../components/WhatsappFloat"
import BackToTop from "../components/BackToTop"
import HowTrainingWorks from "../components/HowTrainingWorks"
import WhatYouGain from "../components/WhatYouGain"
import FAQ from "../components/FAQ"
import FinalCTA from "../components/FinalCTA"

function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <TrainingPrograms />
      <ServicesSection />
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