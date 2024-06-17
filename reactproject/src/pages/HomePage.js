import React from 'react'
import CTASection1 from '../components/CTASection/CTASection1'
import MainLayout from '../layouts/MainLayout'
import HeroSection1 from '../components/HeroSection/HeroSection1'
import CTASection2 from '../components/CTASection/CTASection2'
import TestimonialCard1 from '../components/TestimonialCard/TestimonialCard1'
import TestimonialCard2 from '../components/TestimonialCard/TestimonialCard2'

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection1 />
  
       <CTASection1 />
   
       <CTASection2 />
       <TestimonialCard1 />
       <TestimonialCard2 />
    </MainLayout>
  )
}

export default HomePage