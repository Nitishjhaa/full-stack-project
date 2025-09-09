import { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const { products, Indcurrency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          const productData = products.find((p) => p._id === productId);
          console.log(productData)

          if (productData) {
            tempData.push({
              _id: productId,
              size,
              quantity: cartItems[productId][size],
              product: productData,
            });
          }
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className='flex w-full h-[85vh] '>
      <div className='flex-1 my-20 p-5'>
        <Title text1={"Your"} text2={"Cart"} />
        <div>
          {
            cartData.map((item, idx) => {

              return (
                <div key={idx} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_o.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='flex-1 my-20 border border-gray-300 p-5'>
        <Title text1={"Cart"} text2={"Total"} />
        <div className="my-3">
          <div className="flex justify-between items-center h-fit border-b border-gray-300 pb-1">
            <p>Subtotal: </p>
            <span className="">
              {Indcurrency} 100
            </span>
          </div>
          <div className="flex justify-between items-center h-fit pt-2 border-b-2 border-gray-300 pb-1">
            <p>Shipping Fee: </p>
            <span className="">
              {Indcurrency} 10
            </span>
          </div>
          <div className="flex justify-between items-center h-fit pt-2 pb-1">
            <p>Total: </p>
            <span className="">
              {Indcurrency} 10
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart
