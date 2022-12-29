import React from 'react'

import { google, signup } from "../assets";

export default function SignUp() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={signup} alt="" />
        </div>

        <div className='bg-White flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-[#E899E4] p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-white py-2'>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-[#3E0969]   text-white font-semibold rounded-lg'>SIGNUP</button>
                <div className='flex justify-center text-white py-2'>
                    <p>connect with Google</p>
                </div>

                <div className='flex justify-center text-white py-2'>
                <img className='w-10 h-10 rounded-full' src={google} alt="" />
                </div>
            </form>
        </div>
    </div>
  )
}