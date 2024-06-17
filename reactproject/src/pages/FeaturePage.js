import React from 'react'
import MainLayout from '../layouts/MainLayout'
import FeatureSection1 from '../components/FeatureSection/FeatureSection1'
import FeatureSection2 from '../components/FeatureSection/FeatureSection2'

const FeaturePage = () => {
  return (
   <MainLayout>
    <FeatureSection1 />
    <FeatureSection2 />
   </MainLayout>
  )
}

export default FeaturePage