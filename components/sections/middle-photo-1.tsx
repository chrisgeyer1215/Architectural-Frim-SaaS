import Image from 'next/image'
import React from 'react'

const Middle1 = () => {
  return (
    <div className='flex flex-col'>
        <div className='relative h-[480px]'>
        <Image
            quality={100}
            className='absolute pointer-events-none select-none'
            fill
            style={{ objectFit: 'cover'}}
            src='/middle-img.png'
            alt='why'
        />
        </div>
       
    </div>
  )
}

export default Middle1