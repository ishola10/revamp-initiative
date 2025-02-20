import React from 'react'
import Banner from './component/Banner'
import Volunteer from './component/Volunteer'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='w-full'>
      <Banner />
      <Volunteer />
      <Footer />
    </div>
  )
}

export default page