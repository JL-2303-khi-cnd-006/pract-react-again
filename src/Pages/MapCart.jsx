import React, { useContext } from 'react'
import { ShopContext } from '../Content/ShopContent'

const MapCart = (props) => {
    const {id, title, description, price, image } = props.data
    const {addToCart, removeFromCart, cartItems} = useContext(ShopContext)
    const value = cartItems[id]

  return (
    <div class="card" style={{width: '18rem'}}>
        <img src={image} class="card-img-top" alt="..." />
    <div class="card-body">
        <p class="card-text">{title}</p>
        <p>${price}</p>
    </div>
    <div className='items'>
    <button onClick={(e) => removeFromCart(id)}> - </button>
    <input className='input' value={value}/>
    <button onClick={(e) => addToCart(id)}> + </button>
    </div>
    </div>
  )
}

export default MapCart