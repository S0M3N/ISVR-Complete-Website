import React from 'react'
import Aboutpg from '../components/Aboutpg'
import Advisory from '../components/Advisory'
import BrandCarousel from '../components/BrandCarousel'
import Team from '../components/Team'
import WhoWeAre from '../components/WhoWeAre'

export default function About() {
  return (
    <div>
        <Aboutpg />
        <WhoWeAre />
        <Advisory />
        <Team />
        <BrandCarousel />
    </div>
  )
}
