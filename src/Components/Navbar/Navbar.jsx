import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons' 
import './nav.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/"> Shop </Link>
            <Link to='/cart'> <FontAwesomeIcon icon={faCartFlatbed} /></Link>
        </div>
    </div>
  )
}

export default Navbar