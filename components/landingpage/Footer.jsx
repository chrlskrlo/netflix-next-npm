import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full py-24 px-4'>
                <div className='max-w-[1240px] mx-auto'>
                    <p className='text-white'>Questions? Contact us.</p>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                        <div>
                            <ul className='text-gray-400 flex flex-col gap-4 mt-6 hover:cursor-pointer'>
                                <li>FAQ</li>
                                <li>Media Center</li>
                                <li>Redeem Gift Cards</li>
                                <li>Terms of Use</li>
                                <li>Corporate Information</li>
                                <li>Legal Notices</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-400 sm:flex flex-col gap-4 mt-6 hover:cursor-pointer hidden'>
                                <li>Help Center</li>
                                <li>Investor Relations</li>
                                <li>Buy Gift Cards</li>
                                <li>Privacy</li>
                                <li>Contact Us</li>
                                <li>Only on Netflix</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-400 md:flex flex-col gap-4 mt-6 hover:cursor-pointer hidden'>
                                <li>Account</li>
                                <li>Jobs</li>
                                <li>Ways to Watch</li>
                                <li>Cookie Preferences</li>
                                <li>Speed Test</li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-gray-400 text-center justify-center items-center mx-auto mt-20'>Netflix Clone © Charles Karlo Leguarda</p>
                </div>

            </div>
        </>
    )
}

export default Footer