import React, { useContext } from 'react'
import { MainContext } from '../CreateContext'
import './CoinSaveContainer.css'

const CoinSaveContainer = () => {
const {active} = useContext(MainContext)
  return (
    <div className={`CoinSaveContainerKapsam ${active === 'CoinSaveContainerActive' ? 'active' : ''} `} >
          <div className='CoinSaveContainer'> 
              
          </div>
    </div>
  )
}

export default CoinSaveContainer
