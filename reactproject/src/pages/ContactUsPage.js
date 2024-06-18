import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ContactUsForm1 from '../components/ContactUsSection/ContactUsForm1'
import ContactUsForm2 from '../components/ContactUsSection/ContactUsForm2'

const ContactUsPage = () => {
  return (
   <MainLayout>
    <ContactUsForm1 />
    <ContactUsForm2 />
   </MainLayout>
  )
}

export default ContactUsPage