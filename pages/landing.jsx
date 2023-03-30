import React from 'react'
import { bgImage } from '@/util/constant'
import {MdOutlineArrowForwardIos} from 'react-icons/md'


const LandingPage = () => {
    return (
        <div className='w-full h-[700px] text-white'>
            <div className='w-full h-full'>

                {/*Overlay */}
                <div className='absolute w-full h-[700px] bg-gradient-to-r from-black'></div>

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
                    <div className='flex flex-row text-center justify-center gap-4'>
                        <input
                            className='py-1 px-2 w-96 bg-gray-900/90 rounded text-left'
                            type="email"
                            placeholder='Email address'
                            autoComplete='email' />
                           <button className='flex text-center justify-center items-center py-4 px-12 bg-red-600 rounded font-bold font-sans hover:bg-red-700/80'>
                            Get Started <MdOutlineArrowForwardIos size={20} className='ml-2'/>
                            </button>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default LandingPage