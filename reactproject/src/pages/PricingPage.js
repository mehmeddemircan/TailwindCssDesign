import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PricingSection1 from '../components/PricingSection/PricingSection1'
import PricingSection2 from '../components/PricingSection/PricingSection2'
import PricingSection3 from '../components/PricingSection/PricingSection3'

const PricingPage = () => {
  return (
    <MainLayout>
        <PricingSection1 />
        <PricingSection2 />
        <PricingSection3 />
    </MainLayout>
  )
}

export default PricingPage