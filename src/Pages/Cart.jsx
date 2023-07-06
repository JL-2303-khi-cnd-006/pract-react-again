import React, { useContext } from 'react'
import { ShopContext } from '../Content/ShopContent'
import { Product } from '../Products'
import MapCart from './MapCart'

const Cart = () => {
  const { cartItems} = useContext(ShopContext)
  return (
    <div className='cart'>
      <h2> Your Cart's items </h2>
      <div>
        {Product.map((product) => {
          if(cartItems[product.id]){
              return <MapCart data={product} />
          }
})}
      </div>
    </div>
  )
}

export default Cart