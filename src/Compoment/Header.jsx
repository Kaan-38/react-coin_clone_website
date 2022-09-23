import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { FaBitcoin } from 'react-icons/fa';
import { MainContext } from '../CreateContext';
const Header = () => {
    const { setLoginactive } = useContext(MainContext) 
 
    useEffect(() => {
        const header_active_h2 = document.querySelectorAll('h2')
        function activeClass (){
            header_active_h2.forEach((item) => 
            item.classList.remove('active'))
            this.classList.add('active')
        }
        header_active_h2.forEach((item) => 
        item.addEventListener('click', activeClass))
    },[])
  return (
    <>
        <header>
           <div className='HeaderRight'>
               <FaBitcoin className='Headerİcon' />
                <h2>
                    CRYPTO ŞAHİN
                </h2>
           </div>

           <div className='HeaderLeft'>
                <h2 className='NavBar active'>
                     ABOUT
                </h2>
                <h2 className='NavBar'>
                    PRICING
                </h2>
                <h2 className='NavBar'>
                    CONTACT US
                </h2>
                <h2 className='NavBar' onClick={(() => setLoginactive(true))}>
                    SIGN UP
                </h2>
           </div>
      </header>
    </>
  )
}

export default Header
