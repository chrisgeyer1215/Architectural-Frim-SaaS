import Header from '@/components/sections/header'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <Header/>
        <div className=' bg-gradient-to-tr from-slate-600 to-slate-50 text-gray-900 min-h-screen w-screen'>
        <div className='mx-20'>
        <h1 className='text-4xl font-bold pt-[10rem] pb-10'>Contact</h1>
        <h2 className='text-lg font-semibold mb-5'>Lets Build Together</h2>
        <p className='font-light text-md pb-5'>Ready to turn your architectural dreams into reality? Reach out to us today. Whether you have questions, project inquiries, or just want to discuss your ideas, we are here to listen and provide expert guidance. </p>
        <p>Contact [Firm Name] and let us build a better tomorrow together. Email: contact@firmname.com | Phone: (123) 456-7890 | Office: [Office Address]</p>
        </div>
        </div>
    </div>
    
  )
}

export default Contact