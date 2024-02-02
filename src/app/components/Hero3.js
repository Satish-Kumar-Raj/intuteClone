import Image from 'next/image'
import React from 'react'
import Banner from "../../../public/Computer.avif"
function Hero3() {
  return (
    <div className='py-16 flex px-16 items-center flex-col md:flex-row'>
        <div className='  flex-1 '>
            <h2 className='text-4xl font-normal'>Get started easily with a personalized product tour</h2>
            <p className='text-sm w-[80%] md:w-full py-5'>An onboarding specialist is here to help you get started with confidence—it’s included with a paid plan.*</p>
            <button className='hover:bg-yellow-500 rounded-full p-1 transition duration-500 '>Learn more about onboarding <span className=' bg-yellow-500 p-1 rounded-full text-sm'>💨</span></button>
        </div>
        <div className='flex-1 w-full'>
        <Image 
        src={Banner} height={200} width={200} className='w-full '/>
        </div>
    </div>
  )
}

export default Hero3