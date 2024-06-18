import React from 'react'
import MainLayout from '../layouts/MainLayout'
import FAQSection1 from '../components/FAQSection/FAQSection1'
import FAQSection2 from '../components/FAQSection/FAQSection2'

const FAQPage = () => {
  return (
   <MainLayout>
    <FAQSection1 />
    <FAQSection2 />
   </MainLayout>
  )
}

export default FAQPage