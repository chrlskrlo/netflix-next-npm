import React, { useState } from 'react'

import { faqData } from '@/util/constant'

import { FiPlus } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(-1);


    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index)
    }


    return (
        <>
            <div className='w-full py-32 px-4 border-b-8 border-gray-600'>
                <div className='max-w-[1240px] mx-auto items-center text-center justify-center text-white'>
                    <h1 className='text-4xl md:text-6xl font-extrabold font-sans'>Frequently Asked Questions</h1>

                    <div className="grid grid-cols-1 gap-4 mt-10">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-gray-600 rounded shadow p-4 hover:bg-gray-500">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl md:text-3xl font-sans">{item.question}</h3>

                                    <button onClick={() => toggleAnswer(index)}>
                                        {activeIndex === index ? <AiOutlineClose size={40} /> : <FiPlus className='transition duration-500 ease-in-out hover:-translate-y-3 hover:scale-110' size={40} />}
                                    </button>
                                </div>
                                {activeIndex === index && (
                                    <p className="mt-2 transition-all duration-500 max-h-[200px]">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className='text-2xl mt-10'>Ready to watch? Enter your email to create or restart your membership.</p>

                    <div className='flex flex-col sm:flex-row text-center justify-center gap-2 mt-4'>
                        <input
                            className='p-3 w-96 bg-gray-900/90 rounded'
                            type="email"
                            placeholder='Email address'
                            autoComplete='email' />
                        <button className='flex flex-row md:flex text-center justify-center items-center py-4 px-12 bg-red-600 rounded font-bold font-sans hover:bg-red-700/80 md:py-2 md:px-8 md:text-sm transition duration-500 ease-in-out hover:scale-110'>
                            Get Started <MdOutlineArrowForwardIos size={20} className='ml-2' />
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Faq