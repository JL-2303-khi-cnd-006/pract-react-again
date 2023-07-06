import React, { useContext } from 'react'
import './pages.css'
import { ShopContext } from '../Content/ShopContent'

const MapProduct = (props) => {
  
  const {id, title, description, price, image } = props.data
    const {addToCart, cartItems} = useContext(ShopContext)
    const value = cartItems[id]
    
    
    
    return (

        <div class="card" style={{width: '18rem'}} key={id}>
             <img src={image} class="card-img-top" alt="..." />
    <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <p>${price}</p>
            <button class="btn btn-primary" onClick={() => addToCart(id)}>
              Add to Cart {value > 0 && <> ({value}) </>}
              </button>
        </div>
    </div>
  )
}

export default MapProduct