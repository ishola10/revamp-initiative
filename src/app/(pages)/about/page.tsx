import React from 'react'
import Banner from './component/Banner'
import Values from './component/Values'
import MissionGoal from './component/MissionGoal'
import RelentlessHope from './component/RelentlessHope'
import Team from './component/Team'
import AdvisoryBoard from './component/AdvisoryBoard'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <div className='w-full'>
      <Banner />
      <Values />
      <MissionGoal />
      <RelentlessHope />
      <Team />
      <AdvisoryBoard />
      <Footer />
    </div>
  )
}

export default About