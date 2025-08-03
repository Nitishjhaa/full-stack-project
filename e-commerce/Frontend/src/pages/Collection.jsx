import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t' >

      {/* filter tag */}
      <div className='min-w-60'>
        <p className='uppercase my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>Filter
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90 duration-300 " : "duration300"}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* catogery filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block `}>
          <p className='uppercase font-semibold text-sm mb-3'>Catogery</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Men'} />Men
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Women'} />Women
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Kids'} />Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block `}>
          <p className='uppercase font-semibold text-sm mb-3'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1 '>
        
      </div>

    </div >
  )
}

export default Collection
