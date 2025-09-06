import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';


const Product = () => {

  const { productId } = useParams();
  const { products, Indcurrency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState(null);
  const [openTab, setOpenTab] = useState("tab1")

  const fetchProductData = async () => {
    products.map((i) => {
      if (i._id === productId) {
        setProductData(i);
        setImage(i.image[0])
        return null;
      }
    })
  }


  useEffect(() => { fetchProductData() }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img src={item} alt={item} key={index} onMouseEnter={() => setImage(item)} onClick={() => setImage(item)} className='w-[100%] sm:mb-3 flex-shrink-0 cursor-pointer rounded-sm' />
              ))
            }
          </div>
          <div className='w-full sm:w-[100%] '>
            <img src={image} alt="" className='rounded-sm' />
          </div>
        </div>

        <div className='flex-2'>
          <h1 className='font-medium text-2xl '>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3' />
            <img src={assets.star_icon} alt="" className='w-3' />
            <img src={assets.star_icon} alt="" className='w-3' />
            <img src={assets.star_icon} alt="" className='w-3' />
            <img src={assets.star_dull_icon} alt="" className='w-3' />
            <p className='ml-2'>(122)</p>
          </div>
          <h1 className='mt-5 text-3xl font-medium'>
            {Indcurrency} {productData.price}
          </h1>
          <p className='mt-5 text-neutral-500 max-w-[500px] font-medium'>
            {productData.description}
          </p>
          <div className='mt-5'>
            <h2>Select Sizes</h2>
            <div className='flex gap-2 mt-3'>
              {productData.sizes.map((i) => (
                <div key={i} className={`w-10 h-10 flex justify-center items-center cursor-pointer ${size === i ? "bg-black text-white transition-colors duration-300" : "border border-transparent"} bg-[#F3F4F6]`} onClick={() => setSize(i)}>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <button className='mt-5 w-30 border h-10 bg-black rounded-sm text-white flex justify-center items-center hover:bg-white hover:text-black hover:border transition-colors duration-150 transition-border'>
            Add To Cart
          </button>
        </div>

      </div>
      {/* description */}
      <div className='mx-auto  mt-10'>
        {/* Tabs Header */}
        <div className="flex ">
          <button
            onClick={() => setOpenTab("tab1")}
            className={`px-4 py-2 w-1/6 text-center ${openTab === "tab1"
              ? "bg-gray-300 text-gray-600 font-semibold transition-colors duration-300"
              : "bg-gray-100 text-gray-700"
              }`}
          >
            Description
          </button>
          <button
            onClick={() => setOpenTab("tab2")}
            className={`px-4 py-2 w-1/6 text-center ${openTab === "tab2"
              ? "bg-gray-300 text-gray-600 font-semibold transition-colors duration-300"
              : "bg-gray-100 text-gray-700"
              }`}
          >
            Reviews
          </button>
        </div>

        {/* Tabs Content */}
        <div className="p-4 border border-gray-400">
          {openTab === "tab1"
            &&
            <div className='p-5'>
              <p className='text-neutral-600 text-sm'>
                An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                <br /><br />
                E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
              </p>
            </div>
          }
          {openTab === "tab2"
            &&
            <div>
              Review goes here
            </div>
          }
        </div>
      </div>

      <div className='mt-10'>
        <div className='text-center'>
          <Title text1={'Related'} text2={'Products'} />
          <div className='border h-[50vh]'>
            
          </div>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product