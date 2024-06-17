import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PricingSection1 from '../components/PricingSection/PricingSection1'
import PricingSection2 from '../components/PricingSection/PricingSection2'
import PricingSection3 from '../components/PricingSection/PricingSection3'
import PricingSection4 from '../components/PricingSection/PricingSection4'

const PricingPage = () => {
  return (
    <MainLayout>
        <PricingSection1 />
        <PricingSection2 />
        <PricingSection3 />
        <PricingSection4 />
    </MainLayout>
  )
}

export default PricingPage