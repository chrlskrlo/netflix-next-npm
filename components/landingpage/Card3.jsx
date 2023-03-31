import React from 'react'
import Image from 'next/image'

import { cardnetflixkidsImage } from '@/util/constant'

const Card3 = () => {
  return (
    <>
    <div className='w-full py-16 px-4 border-b-8 border-gray-600'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl md:text-5xl font-bold font-sans'>Create profile for kids.</h1>
            <p className='text-xl md:text-2xl mt-4'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
        <div>
           <Image className='w-[500px] py-8 rounded-lg mx-auto' src={cardnetflixkidsImage} alt="/" unoptimized={true} />
        </div>

     </div>

    </div>
    </>
  )
}

export default Card3