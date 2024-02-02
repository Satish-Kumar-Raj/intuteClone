import React from 'react'
import Button from './Button'
import Link from 'next/link'

function Hero() {
  return (
    <div className='py-16 flex flex-col items-center'>
        <h1 className='text-center text-4xl font-bold'>Turn Emails into Revenue</h1>
        <p className='text-center text-xl pt-3 leading-6'>Win new customers with the #1 email marketing and automations brand* <br/>that recommends ways to get more opens, clicks, and sales.</p>
       <div className='flex items-center gap-5 pt-6'>
       <Button name={"sign Up"} color="bg-yellow-400 "></Button>
       <Link href={"#"} className='underline hover:bg-yellow-200 text-sm'>Talk to sales</Link>
       </div>
    </div>
  )
}

export default Hero