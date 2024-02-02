import Image from 'next/image'
import React from 'react'
import Banner1 from "../../../public/Banner.avif"
import Banner2 from "../../../public/Banner1.avif"
import Banner3 from "../../../public/Banner2.avif"
import Banner4 from "../../../public/Banner3.avif"
import Button from './Button'
import Card from './Card'
function Hero2() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-0'>
       <Card name={"Explore Marketing Automation"} image={Banner1} text={"Boost orders and customer  by dynamically personalizing emails based on browsing and purchase data."} color={"bg-yellow-300"}/>
       <Card name={"Explore AI Tool"} image={Banner2} text={"Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates."} color={"bg-white"}/>
       <Card name={"Explore Audience management"} image={Banner3} text={"Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes."} color={"bg-yellow-200"}/>
       <Card name={"Explore analytics & reporting"} image={Banner4} text={"Analyze performance with custom reports, funnel visualizations, and industry benchmarking."} color={"bg-white"}/>
       
    </div>
  )
}

export default Hero2