import React from 'react'

import Image from 'next/image'

import { cardnetflixImage } from '@/util/constant'

const Card2 = () => {
  return (
    <>
    <div className='w-full py-16 px-4 border-b-8 border-gray-600'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div>
            <Image className='w-[500px] py-8' 
            src={cardnetflixImage} 
            unoptimized={true} 
            />
          </div>
          <div className='flex flex-col justify-center text-white'>
     <h1 className='md:text-5xl text-4xl font-bold font-sans'>Download your shows to watch offline.</h1>
     <p className='md:text-2xl text-xl mt-4'>Save your favorites easily and always have something to watch</p>
          </div>

        </div>

    </div>
    </>
  )
}

export default Card2