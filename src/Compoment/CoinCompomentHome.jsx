import React from 'react'
import './CoinCompomentHome.css'
import { MainContext } from '../CreateContext'
import { useContext } from 'react'
import { FaBitcoin} from 'react-icons/fa'
const CoinCompomentHome = () => {
  const { active } = useContext(MainContext)
  return (
    <div className={`CoinCompomentHome`} >
           <div className='ContainerLeft'>
               <div className='Container'>
               <label>
               <div className='icon'>
               <FaBitcoin className='ContainerLeftİcon' />
               
               </div>
               </label>
              
                <label> 
                  <h2>
                   Make your Crypto Transaction
                  </h2>
                </label>

                <label className='h3'>
                   <h3>
                   Buy and Sales 100+ Cryptocurrencies with 20+ flat currencies market using bank transfers or your credit/debit card in your exchange type bitcoin establshed token area.
                   </h3>
                </label>
                <label>
                   <h4>
                   GET STARTED
                   </h4>
                </label>
               </div>
           </div>

           <div className='ContainerRightKapsam'>
                
                 <div className='ContainerRight'>
                         <div className='ContainerRightİcon'>
                                  <FaBitcoin className='icon' />
                         </div>
                         <div className='ContainerRightToken'>
                              <span>
                                      <FaBitcoin className='icon' />
                              </span>
                              <label>
                              <h3>
                                54M+
                              </h3>
                              <h3>
                                 SOLİD TOKEN
                              </h3>
                              </label>
                         </div>
                 </div>
               
           </div>
   
   
   
   
     </div>
  )
}

export default CoinCompomentHome
