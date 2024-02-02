import Image from 'next/image'
import React from 'react'
import Canva from "../../../public/Canva.avif"
import Sales from "../../../public/Salesforce__1_.avif"
import Instagram from "../../../public/Instagram__1_.avif"
function Hero5() {
  return (
    <div className='py-16 px-8'>
        <h1 className='text-4xl font-bold'>Bring in more data, drive more<br/> growth with our integrations</h1>
        <div className='lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-2 py-8 px-6'>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Canva} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Canva</h2>
                    <p className='tetx-sm font-light leading-4'>Create  compiling visuals for your marketing. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Sales} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Mailchimp for Salesforce</h2>
                    <p className='tetx-sm font-light leading-4'>Sync your Mailchimp subscribes  and Salesforce leads across platforms. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Instagram} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Instagram</h2>
                    <p className='tetx-sm font-light leading-4'>Create  compiling visuals for your marketing. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Canva} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Canva</h2>
                    <p className='tetx-sm font-light leading-4'>Create  compiling visuals for your marketing. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Canva} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Canva</h2>
                    <p className='tetx-sm font-light leading-4'>Create  compiling visuals for your marketing. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Sales} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Mailchimp for Salesforce</h2>
                    <p className='tetx-sm font-light leading-4'>Sync your Mailchimp subscribes  and Salesforce leads across platforms. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Instagram} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Instagram</h2>
                    <p className='tetx-sm font-light leading-4'>Create  compiling visuals for your marketing. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Canva} width={100} height={90}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Canva</h2>
                    <p className='tetx-sm font-light leading-4'>Create  compiling visuals for your marketing. </p>
                </div>
            </div>
            <div className='flex gap-5 hover:bg-slate-600/50 box-border px-10 py-5 transition duration-500'>
                <Image src={Canva} width={100} height={100}/>
                <div className='flex items-start justify-center flex-col'>
                    <h2 className='text-xl font-normal '>Canva</h2>
                    <p className='tetx-sm font-light leading-4'>Create  compiling visuals for your marketing. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero5