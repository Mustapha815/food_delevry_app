import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './ClientAccount.css'
const ClientAccount = () => {
  return (
   <>
   <Navbar/>
    <div className='accountcontent'>
      <h2>يرجى إنشاء حساب أولا</h2>
      <Link to={'/login'}><button> إنشاء حساب </button></Link>
    </div></>
  )
}

export default ClientAccount
