import React from 'react'
import CTASection1 from '../components/CTASection/CTASection1'
import MainLayout from '../layouts/MainLayout'
import HeroSection1 from '../components/HeroSection/HeroSection1'

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection1 />
       <CTASection1 />
    </MainLayout>
  )
}

export default HomePage