import React from 'react'
import MainLayout from '../layouts/MainLayout'
import BlogSection1 from '../components/BlogSection/BlogSection1'
import BlogSection2 from '../components/BlogSection/BlogSection2'
import BlogSection3 from '../components/BlogSection/BlogSection3'

const BlogsPage = () => {
  return (
    <MainLayout>
        <BlogSection1 />
        <BlogSection2 />
        <BlogSection3 />
    </MainLayout>
  )
}

export default BlogsPage