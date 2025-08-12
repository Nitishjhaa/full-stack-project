import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import ProductItems from '../components/ProductItems'
import Title from '../components/Title'

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevent')

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubcategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
    }

    setAllProducts(productsCopy);
  }

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subcategory])

  useEffect(() => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
    }

    switch (sortType) {
      case 'low-high':
        productsCopy = productsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productsCopy = productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setAllProducts(productsCopy);
  }, [category, subcategory, sortType, products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t' >

      {/* filter tag */}
      <div className='min-w-60 mt-5'>
        <p className='uppercase my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>Filter
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90 duration-300 " : "duration300"}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block `}>
          <p className='uppercase font-semibold text-sm mb-3'>category</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Men'} onChange={togglecategory} />Men
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Women'} onChange={togglecategory} />Women
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Kids'} onChange={togglecategory} />Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block `}>
          <p className='uppercase font-semibold text-sm mb-3'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Topwear'} onChange={toggleSubcategory} />Topwear
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Bottomwear'} onChange={toggleSubcategory} />Bottomwear
            </p>
            <p className='flex gap-2 font-semibold'>
              <input type="checkbox" name="" id="" className='w-3' value={'Winterwear'} onChange={toggleSubcategory} />Winterwear
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
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 py-3'>
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
