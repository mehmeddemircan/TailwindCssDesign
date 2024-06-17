import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ImageGallery1 from '../components/ImageGallery/ImageGallery1'
import ImageGallery3 from '../components/ImageGallery/ImageGallery3'




const ImageGalleryPage = () => {
  return (
   <MainLayout>
    <ImageGallery1 />
    <ImageGallery3 />
   </MainLayout>
  )
}

export default ImageGalleryPage