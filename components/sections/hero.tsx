import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section>
    <div className='relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center'>
        <Image
            priority
            quality={100}
            className='absolute hidden md:block pointer-events-none select-none'
            fill
            style={{ objectFit: 'cover', objectPosition: '75%'}}
            src='/hero-img.png'
            alt='company background image'
        />
        <Image
            priority
            quality={100}
            className='absolute block md:hidden pointer-events-none select-none'
            fill
            style={{ objectFit: 'cover', objectPosition: '75%'}}
            src='/hero-img-2.png'
            alt='company background image'
        />
        <div className='relative flex z-10 pt-32 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto '>
        <div className='max-w-2xl px-4 flex flex-col gap-8 md:max-xl:bg-white/30 bg-white/30'>
            <h1 className='-ml-1 text-5xl md:text-7xl font-semibold'>Company</h1>
            <p className='text-gray-700 text-lg max-w-xl'>
            We have cultivated a great community here and a wonderful customer base, and we want to keep it that way!
            </p>
        </div>

    </div>
    </div>
    
    </section>
  )
}
