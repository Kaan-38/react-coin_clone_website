import React, { useContext } from 'react'
import './CoinSaveContainer.css'

const CoinSaveContainer = () => {

  return (
    <div className={`CoinSaveContainerKapsam ${active === 'CoinSaveContainerActive' ? 'active' : ''} `} >
          <div className='CoinSaveContainer'> 
              
          </div>
    </div>
  )
}

export default CoinSaveContainer
