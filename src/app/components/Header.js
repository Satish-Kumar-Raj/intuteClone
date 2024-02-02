import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logo.png'
import Button from './Button'
function Header() {
  return (
    <div className='sticky top-0 left-0 z-50'>
        <header>
            <nav className='flex text-sm bg-white '>
                <section className='px-5 py-2 flex flex-1 '>
                        <div className='md:flex items-center gap-5 text-sm '>
                                <div className=''>
                                <Image src={Logo} width={120} height={150} />
                                </div>
                                <div className='md:flex gap-5 hidden'>
                                <select >
                                    <option>Solution and Service</option>
                                </select>
                                <select>
                                    <option>Resource</option>
                                </select>
                                <div className='text-sm flex gap-4'>
                                <p>Switch to mailchips</p>
                                <p>Pricing</p>
                                </div>
                                </div>

                        </div>
                </section>
                <section className='pr-5 flex items-center text-sm justify-center'>
                    <div className='md:flex gap-5 items-center flex-1 px-5 py-2  hidden '>
                        <p>Search</p>
                        <p>Language</p>
                        <p>Sales : +1(800) 315-5939</p>
                        <div className='flex items-center gap-2'>
                            <Button  name={"Login"} className="border-black " />
                            <Button name="sign Up" color="bg-yellow-400"/>
                        </div>
                    </div>
                    <div className='  flex items-center box-border  justify-center gap-6 md:hidden'>
                        <Button name={"Start for Free"} color={"bg-yellow-400"}/>
                        <span>Humberger</span>
                    </div>
                </section>
            </nav>
        </header>
    </div>
  )
}

export default Header