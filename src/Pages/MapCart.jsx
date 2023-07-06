import React from 'react'
import { Product } from '../Products'

const MapCart = (props) => {
    const {id, title, description, price, image } = props.data


  return (
    <div class="card" style={{width: '18rem'}}>
        <img src={image} class="card-img-top" alt="..." />
    <div class="card-body">
        <p class="card-text">{title}</p>
        <p>${price}</p>
    </div>
    <div className='items'>
    <button> - </button>
    <input className='input'/>
    <button> + </button>
    </div>
    </div>
  )
}

export default MapCart