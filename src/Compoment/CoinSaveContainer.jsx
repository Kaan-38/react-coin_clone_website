import React, { useContext } from 'react'
import { MainContext } from '../CreateContext'
import './CoinSaveContainer.css'
import { FaWindowClose } from 'react-icons/fa'
const CoinSaveContainer = () => {
const {active, setActive} = useContext(MainContext)
  return (
    <div className={`CoinSaveContainerKapsam ${active === 'CoinSaveContainerActive' ? 'active' : ''} `} >
          <div className='CoinSaveContainer'> 
            <div className='close-icon-container'>
                <FaWindowClose className='icon' />
            </div>
               <h1>
               GEÇİÇİ SÜRE BAKIMA ALINMIŞTIR...
               </h1>
          </div>
    </div>
  )
}

export default CoinSaveContainer
