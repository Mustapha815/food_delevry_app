import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import FoodDesplay from '../../components/FoodDesplay/FoodDesplay'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Footer from '../../components/Footer/Footer'

export const Menu = () => {
  return (
    <div>
      <Navbar/>
      <ExploreMenu/>
      <FoodDesplay/>
      <Footer/>
    </div>
  )
}

