import { useContext, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const [cartProduct, setCartProduct] = useState([])

  const { products, Indcurrency, cartItems } = useContext(ShopContext);

  const cartProducts = () => {
    const CartProducts = products.filter((e)=> e._id === cartItems)
    setCartProduct(cartProducts)
  }
  

  return (
    <div className='flex w-full h-[85vh] '>
      <div className='flex-1 my-20 p-5'>
        <Title text1={"Your"} text2={"Cart"} />
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
