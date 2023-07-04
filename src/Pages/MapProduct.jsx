import React from 'react'
import './pages.css'

const MapProduct = (props) => {
  const {id, title, description, price, image } = props.data
    return (
    <div className='product-map'>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
    </div>
  )
}

export default MapProduct