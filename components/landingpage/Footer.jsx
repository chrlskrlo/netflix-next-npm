import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full py-24 px-4'>
                <div className='max-w-[1240px] mx-auto'>
                    <p className='text-white text-2xl'>Questions? Contact us.</p>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                        <div>
                            <ul className='text-gray-400 flex flex-col gap-4 mt-6 hover:cursor-pointer'>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>FAQ</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Media Center</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Redeem Gift Cards</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Terms of Use</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Corporate Information</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Legal Notices</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-400 sm:flex flex-col gap-4 mt-6 hover:cursor-pointer hidden'>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Help Center</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Investor Relations</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Buy Gift Cards</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Privacy</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Contact Us</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Only on Netflix</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-400 md:flex flex-col gap-4 mt-6 hover:cursor-pointer hidden'>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Account</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Jobs</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Ways to Watch</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Cookie Preferences</li>
                                <li className='transition duration-350 ease-in-out hover:scale-110 hover:text-red-600'>Speed Test</li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-gray-400 text-center justify-center items-center mx-auto mt-20 transition duration-350 ease-in-out hover:scale-110 hover:text-red-600 hover:cursor-pointer'>Netflix Clone © Charles Karlo Leguarda</p>
                </div>

            </div>
        </>
    )
}

export default Footer