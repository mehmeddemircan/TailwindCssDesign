import React from 'react'
import CTASection1 from '../components/CTASection/CTASection1'
import MainLayout from '../layouts/MainLayout'
import HeroSection1 from '../components/HeroSection/HeroSection1'
import CTASection2 from '../components/CTASection/CTASection2'
import TestimonialCard1 from '../components/TestimonialCard/TestimonialCard1'
import TestimonialCard2 from '../components/TestimonialCard/TestimonialCard2'
import TestimonialCard3 from '../components/TestimonialCard/TestimonialCard3'
import NewsLetter1 from '../components/NewsLetterSection/NewsLetter1'
import HeaderSection1 from '../components/HeaderSection/HeaderSection1'
import LogoBanner1 from '../components/LogoBanner/LogoBanner1'
import LogoBanner2 from '../components/LogoBanner/LogoBanner2'
import CategoryCard1 from '../components/CategoryCards/CategoryCard1'
import CTASection3 from '../components/CTASection/CTASection3'
import CTASection4 from '../components/CTASection/CTASection4'
import CTASection5 from '../components/CTASection/CTASection5'


const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection1 />
  
       <CTASection1 />
       <CTASection2 />
       <CTASection3 />
       <CTASection4 />
       <CTASection5 />
        <CategoryCard1 />
    
       <TestimonialCard1 />
       <TestimonialCard2 />
       <TestimonialCard3 />
       <NewsLetter1 />
       <HeaderSection1 />
       <LogoBanner1 />
       <LogoBanner2 />
    </MainLayout>
  )
}

export default HomePage