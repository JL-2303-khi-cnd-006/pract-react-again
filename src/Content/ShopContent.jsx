import React, {createContext, useState} from 'react'
import { Product } from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i =1; i< Product.length +1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContent = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    }
    
    const contentValue = {cartItems, addToCart, removeFromCart}
    
    return (
    <ShopContext.Provider value={contentValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContent