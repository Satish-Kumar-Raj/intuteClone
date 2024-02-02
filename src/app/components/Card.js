import React from 'react'
import Button from './Button'
import Image from 'next/image'


function Card({color,text,image,name}) {
  return (
    <div>
    <div className='flex flex-col   '>
    <div className='overflow-hidden w-full'>
    <Image src={image} width={200} height={200} className='md:w-[20rem] w-full  hover:scale-110 transition duration-1000 overflow-hidden hover:rounded-sm z-0'/>
    </div>
    <div className={`${color} flex flex-col items-center py-7 justify-center z-10`}>
        <p className='w-fit px-10 pt-10 pb-5'>{text}</p>
        <Button name={name}/>
    </div>
</div>
    </div>
  )
}

export default Card