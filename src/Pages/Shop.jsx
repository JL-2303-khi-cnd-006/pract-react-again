import React from 'react'
import { Product } from '../Products'
import MapProduct from './MapProduct'

const Shop = () => {
  return (
    <div className='items-shop'>
      
        {Product.map((items) => (
          <MapProduct data={items}/>
        ))}
    </div>
  )
}

export default Shop