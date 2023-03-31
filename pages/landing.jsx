import React from 'react'

import { bgImage } from '@/util/constant'

import { MdOutlineArrowForwardIos } from 'react-icons/md'

import Card1 from '@/components/landingpage/Card1'
import Card2 from '@/components/landingpage/Card2'
import Card3 from '@/components/landingpage/Card3'
import Faq from '@/components/landingpage/Faq'
import Footer from '@/components/landingpage/Footer'


const LandingPage = () => {
    return (
        <>
            <div className='w-full h-[700px] text-white border-b-8 border-gray-600'>
                <div className='w-full h-full'>

                    {/*Overlay */}
                    <div className='absolute w-full h-[700px] bg-gradient-to-r from-black'>

                    </div>

                    <img className='w-full h-full object-cover'
                        src={bgImage}
                        alt="/"
                    
                    />

                    <div className='absolute w-full items-center justify-center text-center top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'></h1>
                        <div className='my-4'>
                            <h1 className='text-5xl font-bold font-sans'>Unlimited movies, TV shows, and more.</h1>
                            <p className='text-2xl mt-6'>Watch Anywhere. Cancel anytime</p>
                            <p className='text-xl mt-6'>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className='flex flex-col sm:flex-row text-center justify-center gap-2'>
                            <input
                                className='p-3 w-96 bg-gray-900/90 rounded'
                                type="email"
                                placeholder='Email address'
                                autoComplete='email' />
                            <button className='flex flex-row md:flex text-center justify-center items-center py-4 px-12 bg-red-600 rounded font-bold font-sans hover:bg-red-700/80 md:py-2 md:px-8 md:text-sm'>
                                Get Started <MdOutlineArrowForwardIos size={20} className='ml-2' />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <Card1 />
            <Card2 />
            <Card3 />
            <Faq />
            <Footer />
        </>
    )
}

export default LandingPage