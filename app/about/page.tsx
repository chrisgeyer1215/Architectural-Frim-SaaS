import Header from '@/components/sections/header'
import React from 'react'

const About = () => {
  return (
    <div>
        <Header/>
        <div className=' bg-gradient-to-tr from-slate-600 to-slate-50 text-gray-900 min-h-screen w-screen'>
        <div className='mx-20'>
        <h1 className='text-4xl font-bold pt-[10rem] pb-10'>About</h1>
        <h2 className='text-lg font-semibold mb-5'>We are a Company that Cares</h2>
        <p className='font-light text-md pb-5'>At [Firm Name], we are passionate about shaping spaces that inspire, innovate, and endure. With a deep commitment to design excellence and sustainability, our team of creative architects and visionaries crafts unique solutions that seamlessly blend aesthetics with functionality. From concept to construction, we transform ideas into captivating structures that stand as testaments to our dedication. Discover the art of architecture with us.</p>
        </div>
        

        </div>
    </div>

  )
}

export default About