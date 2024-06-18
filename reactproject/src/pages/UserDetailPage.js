import React from 'react'
import MainLayout from '../layouts/MainLayout'
import UserDetail1 from '../components/DescriptionListSection/UserDetail1'
import PageHeader1 from '../components/PageHeadingSection/PageHeader1'

const UserDetailPage = () => {
  return (
   <MainLayout>
    <PageHeader1 />
    <UserDetail1 />
   </MainLayout>
  )
}

export default UserDetailPage