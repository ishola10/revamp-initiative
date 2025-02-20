import React from 'react'
import Banner from './component/Banner'
import ImpactStories from './component/ImpactStories'
import WestfieldOutreach from './component/WestfieldOutreach'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='w-full'>
      <Banner />
      <ImpactStories />
      <WestfieldOutreach />
      <Footer />
    </div>
  )
}

export default page