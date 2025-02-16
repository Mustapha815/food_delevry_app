import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Footer from '../../components/Footer/Footer';
import FoodDisplay from '../../components/FoodDesplay/FoodDesplay';
import ContactForm from '../../components/ProductPage/ProductPage';
const Home = () => { 
//  const [isMobile,setIsMobile]=useState(window.innerWidth<=576)
//  useEffect(()=>{
//   const handelResize=()=>{
//     setIsMobile(window.innerWidth<=576)
//   }
//   window.addEventListener('resize',handelResize)

    
//     return ()=>{
//       window.removeEventListener('resize',handelResize)

//     }


  
//  },[])

  return (
    <div>
      <Navbar/>
      <Header/>
       <ExploreMenu/>
       <FoodDisplay/>
       {/* <ContactForm/> */}
      <Footer/>
    </div>
  )
}

export default Home
