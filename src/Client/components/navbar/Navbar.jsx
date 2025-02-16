import React, { useEffect, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";
import { BiFoodMenu } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
export const Navbar = () => {
  const [cart_amount,setCartamount]=useState()
    const location = useLocation();
    
    const cartAmount=useSelector(state=>state.client.cartAmount)
   useEffect(()=>{
       setCartamount(cartAmount)
   },[cartAmount])

    return (
      <div className={`navbar `}>
      {/* Top Logo and Menu */}
      <Link to='/'>
            <img className='gustologo' src={assets.gusto_logo} alt="Logo"  />
      </Link>
     
    
      {/* Bottom Navbar for Mobile */}
      <div className="mobileVersion">
      <div  id="navbar-icon" className={location.pathname=='/shoupingCart' ? 'active' : ''}>
        <Link to="/shoupingCart">
        <i><BsCart4 size="40px" /> 
        <span style={{marginTop:'10px',textAlign:'center'}} >
          <strong style={{fontWeight:'900'}}>{cartAmount}</strong></span></i>
                    <p>السلة</p> 
        </Link>
        </div>
       
        <div className={location.pathname=='/menu' ? 'active' : ''}>
          <Link to="/menu">
          <BiFoodMenu  size="40px" />
        <p>القائمة</p>
          </Link>
        </div>
       
        <div className={location.pathname=='/' ? 'active' : ''}>
          <Link to="/">
          <i className="pi pi-shop" style={{ fontSize: '2.5rem' }}></i>
          <p>الرئيسية</p>
          </Link>
        </div>
          
        <div className={location.pathname=='/favorite' ? 'active' : ''}>
          <Link to="/favorite">
          <GrFavorite size="40px" />
            <p>مفضل</p>
          </Link>
        </div>
         <div className={location.pathname=='/myaccount' ? 'active' : ''}>
              <Link to="/myaccount">
              <VscAccount size="40px" />
               <p>حساب</p> 
              </Link>
          </div>
           
        </div>
       
            <ul>
                <Link to="/">
                    <li className={location.pathname === '/' ? 'active' : ''}>Home</li>
                </Link>
                <Link to="/menu">
                    <li className={location.pathname === '/menu' ? 'active' : ''}>Menu</li>
                </Link>
                <Link to="/Favorite">
                    <li className={location.pathname === '/Favorite' ? 'active' : ''}>Favorite</li>
                </Link>
                <Link to="/myaccount">
                    <li className={location.pathname === '/myaccount' ? 'active' : ''}>myaccount</li>
                </Link>
            </ul>
         
            
            <div className='navbar-right'>
            <div  id="navbar-icon" className="navbar-bag">
                  <Link to="/shoupingCart">
                  <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                  </svg></i>
                  <span>{cart_amount}</span>
                  </Link>
                </div>
                <img src={assets.search_icon} alt="Search" />
                
                <Link to="/login">
                    <Button label="Login" severity="warning" rounded />
                </Link>
               
              
            </div>
       
        </div>
    );
};
