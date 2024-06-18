import React from 'react'
import MainLayout from '../layouts/MainLayout'
import AboutUsSection1 from '../components/AboutUsSection/AboutUsSection1'
import AboutUsSection2 from '../components/AboutUsSection/AboutUsSection2'
import AboutUsSection3 from '../components/AboutUsSection/AboutUsSection3'
import AboutUsSection4 from '../components/AboutUsSection/AboutUsSection4'
import AboutUsSection5 from '../components/AboutUsSection/AboutUsSection5'

const AboutUsPage = () => {
  return (
    <MainLayout>
        <AboutUsSection3 />
        <AboutUsSection1 />
        <AboutUsSection2 />
        <AboutUsSection4 />
        <AboutUsSection5 />
    </MainLayout>
  )
}

export default AboutUsPage