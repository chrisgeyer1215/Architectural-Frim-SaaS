import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import Middle1 from '@/components/sections/middle-photo-1'
import Parallax from '@/components/sections/middle-parallax'
import ListSection from '@/components/sections/middle-list'
import Features from '@/components/sections/middle-features'
import SocialProof from '@/components/sections/middle-social'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Parallax/>
      <ListSection/>
      <Middle1/>
      <Features/>
      <SocialProof/>
      <Footer/>
    </div>
  )
}

export default LandingPage
