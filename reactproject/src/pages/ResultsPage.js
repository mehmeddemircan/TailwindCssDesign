import React from 'react'
import MainLayout from '../layouts/MainLayout'
import NotFound1 from '../components/ResultSection/NotFound/NotFound1'
import EmptyResult1 from '../components/ResultSection/EmptyResult/EmptyResult1'
import EmptyResult2 from '../components/ResultSection/EmptyResult/EmptyResult2'

const ResultsPage = () => {
  return (
   <MainLayout>
    <NotFound1 />
    <EmptyResult1 />
    <EmptyResult2 />
   </MainLayout>
  )
}

export default ResultsPage