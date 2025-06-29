import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row border border-gray-400 h-130'>
      <div className='w-1/2 flex h-full justify-center items-center flex-col max-md:w-full'>
        <div className='flex gap-2 mr-37 mb-4'>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141] mt-3 '></p>
          <p className='font-medium text-sm md:text-base uppercase'>Our bestseller</p>
        </div>
        <div className='text-5xl prata-regular text-[#414141]'>
          Latest Arrivals
        </div>
        <div className='flex gap-2 mr-48 text-sherif mt-4'>
          <p className='font-medium text-sm md:text-base uppercase'>Shop Now</p>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141] mt-3'></p>
        </div>
      </div>
      <div className='w-1/2 h-full max-md:w-full '>
        <img src={assets.hero_img} alt="" className='h-full object-cover max-md:w-full'/>
      </div>
    </div>
  )
}

export default Hero
