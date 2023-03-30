import Link from 'next/link'
import React from 'react'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { user, logOut } = UserAuth();
  //console.log(user)

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch(error) {
       console.log(error)
    }
  }
  return (
    <div className='flex items-center justify-around p-4 z-[100] absolute w-full'>
      <Link href="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link href="/account">
            <button className='text-white pr-4'>Account</button>
          </Link>
         
            <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Logout</button>
          
        </div>
       ) : (
        <div>
          <Link href="/login">
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link href="/signup">
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-700/80'>Sign Up</button>
          </Link>
        </div>)}
    </div>
  )
}

export default Navbar