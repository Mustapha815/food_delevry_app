import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
 export const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
      <h1 className='HH1'>order your favourite food here</h1>
        <p className='PP1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dicta eum placeat saepe quasi aliquid nemo corrupti esse, officia voluptates officiis neque, rem quod voluptate ratione quam temporibus libero atque!</p>
        <Link to={'/menu'}><button>View Menu</button></Link>
      </div>
      
    </div>
  )
}


