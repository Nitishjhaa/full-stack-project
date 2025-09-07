import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItems from './ProductItems'

const RelatedProducts = ({ category, subCategory }) => {

  const { products } = useContext(ShopContext)

  const [relatedProduct, setRelatedProduct] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.filter((p) => p.category === category && p.subCategory === subCategory).slice(0, 5)
      setRelatedProduct(productCopy)
    }
  }, [products, category, subCategory])

  return (
    <div className='grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        relatedProduct.map((i, index) => (
          <div key={i._id} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >
            <ProductItems id={i._id} image={i.image} name={i.name} price={i.price} />
          </div>
        ))
      }
    </div>
  )
}

export default RelatedProducts
