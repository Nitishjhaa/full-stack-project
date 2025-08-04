import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import ProductItems from '../components/ProductItems'
import Title from '../components/Title'

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [catogery, setCatogery] = useState([]);
  const [subCatogery, setSubCatogery] = useState([])

  const toggleCatogery = (e) => {
    if (catogery.includes(e.target.value)) {
      setCatogery(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCatogery(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    setAllProducts(products)
  }, [])

  const toggleSubCatogery = (e) => {
    if (subCatogery.includes(e.target.value)) {
      setSubCatogery(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCatogery(prev => [...prev, e.target.value])
    }
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t' >

      {/* filter tag */}
      <div className='min-w-60 mt-5'>
        <p className='uppercase my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>Filter
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90 duration-300 " : "duration300"}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* catogery filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block `}>
          <p className='uppercase font-semibold text-sm mb-3'>Catogery</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Men'} onChange={toggleCatogery} />Men
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Women'} onChange={toggleCatogery} />Women
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Kids'} onChange={toggleCatogery} />Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block `}>
          <p className='uppercase font-semibold text-sm mb-3'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Topwear'} onChange={toggleSubCatogery} />Topwear
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Bottomwear'} onChange={toggleSubCatogery} />Bottomwear
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Winterwear'} onChange={toggleSubCatogery} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl my-5'>
          <Title text1={"All"} text2={"Collection"} />
          {/* product sort */}
          <div>
            <select className='border-2 border-gray-300 text-sm px-2 py-3'>
              <option value="relevent">Sort by : Relevent</option>
              <option value="low-high">Sort by : Low-high</option>
              <option value="high-low">Sort by : High-low</option>
            </select>
          </div>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 mb-40'>
          {allProducts.map((item, index) => (
            <ProductItems key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
          ))
          }
        </div>
      </div>

    </div >
  )
}

export default Collection
