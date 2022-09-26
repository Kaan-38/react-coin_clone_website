import React, { useState } from 'react'
import './Offline.css'
const Offline = () => {
   const [offline_active, setOffline_active] = useState(false)
    window.addEventListener('offline', () => {
     setOffline_active(true)
    })
    window.addEventListener('online', () => {
    setOffline_active(false)  
    })
  return (
    <div className='containerOffline'>
         <div className={`containerOfflineEror ${offline_active ? 'active' : ''} `}>
             <h2>
            İNTERBET BAĞLANTINIZ DÜZENSİZ!
             </h2>
         </div>
    </div>
  )
}

export default Offline
