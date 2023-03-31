import React from 'react'
import Image from 'next/image'

import { cardImage } from '@/util/constant'

const Card1 = () => {
    return (
        <>
            <div className='w-full py-36 px-4 border-b-8 border-gray-600'>
                <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-4xl text-white font-bold font-sans mt-4 md:text-5xl'>Enjoy on your TV.</h1>
                        <p className='text-white text-xl md:text-2xl mt-4'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className='rounded'>
                    <Image className='w-[500px] mx-auto py-8' src={cardImage} unoptimized={true} />
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Card1