import React, { createContext, useContext } from 'react'
import './CoinCompoment.css'
import { MainContext } from '../CreateContext'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'

import { useEffect } from 'react';

const CoinCompoment = ( { name, image, price, price_change, id } ) => {
    const {setCount, count} = useContext(MainContext)
    
    const [activee, setActivee] = useState(false)
    const click = () =>{
        setActivee(!activee)
    }

    useEffect(() => {
      const CoinContainer = document.querySelectorAll('.CoinContainer')
  
      function active_class_compomentCoin(){
        CoinContainer.forEach((item) => 
        item.classList.remove('active'))
        this.classList.add('active')
     }
     CoinContainer.forEach((item) => 
     item.addEventListener('click', active_class_compomentCoin))
     },[])

  return (
        
    
    <div className='CoinContainer'>

    <div className='Row name'>
        <label>
          <img src={image} alt="" />
          <h2>
               {name}
          </h2>
        </label>
    </div>

    <div className='Row price'>
         <h2>
             ${price}
         </h2>
    </div>


     <div className='Row analiz'>
         <h2>
             {
                price_change > 0 ? (
                  <h2 className='yükşeliş'>
                     +{price_change.toFixed(2)}%
                  </h2>
                ):(
                  <h2 className='düşüş'>
                     {price_change.toFixed(2)}%
                  </h2>
                )
             }
         </h2>
    </div>

    <div className='Row symbol'>
    {
                price_change > 0 ? (
                   <h3 className='yükşeliş-çizgi'>

                   </h3>
                ):(
                  <h3 className='düşüş-çizgi'>

                  </h3>
                )
             }
        <h2>
        {id}
        </h2>
      
    </div>
     

 
       
   <div className='icon-save-container' onClick={((e) => {
      click()
      const parent = e.target.parentNode
     
     
      if(activee === false){
       setCount(count + 1)
      }
      else if(activee === true){
       setCount(count - 1)
      }
    })}>
       
       <FontAwesomeIcon icon={faStar} className={`save-icon ${activee ? 'active' : ''} `}  />
            
   
    
         
   
        </div>


      

</div>
 
       
          
          
            
          
   
  )
}

export default CoinCompoment
