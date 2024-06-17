import React from 'react'
import MainHeader from '../components/Header/MainHeader'
import MainFooter from '../components/Footer/MainFooter'
import SecondaryFooter from '../components/Footer/SecondaryFooter'

const MainLayout = (props) => {
  return (
       <>
        <MainHeader />
        <div className="bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        {props.children}  
        </div>
        <MainFooter />
        <SecondaryFooter />
       
       </>
  )
}

export default MainLayout