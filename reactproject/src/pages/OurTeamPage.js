import React from 'react'
import MainLayout from '../layouts/MainLayout'
import OurTeamSection1 from '../components/OurTeamSection/OurTeamSection1'
import OurTeamSection2 from '../components/OurTeamSection/OurTeamSection2'

const OurTeamPage = () => {
  return (
    <MainLayout>
        <OurTeamSection1 />
        <OurTeamSection2 />
    </MainLayout>
  )
}

export default OurTeamPage