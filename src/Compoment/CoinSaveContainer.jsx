import React, { useContext } from 'react'
import { MainContext } from '../CreateContext'
import './CoinSaveContainer.css'

const CoinSaveContainer = () => {
const {active, setActive} = useContext(MainContext)
  return (
    <div className={`CoinSaveContainerKapsam ${active === 'CoinSaveContainerActive' ? 'active' : ''} `} >
          <div className='CoinSaveContainer' onClick={((e) => {
             if(e.target.className = 'icon-save-container'){
               
             }
          })}> 
            
          </div>
    </div>
  )
}

export default CoinSaveContainer
