import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Compoment/Header'
import CoinCompoment from './Compoment/CoinCompoment'
import { MainContext } from './CreateContext'
import CoinCompoment2 from './Compoment/CoinCompoment2'
import Offline from './Compoment/Offline'
import { FaBitcoin } from 'react-icons/fa'
import CoinCompomentHome from './Compoment/CoinCompomentHome'
import Login from './Compoment/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import CoinSaveContainer from './Compoment/CoinSaveContainer'



const App = () => {
  const [loginactive, setLoginactive] = useState('')
  const [loading, setLoaing] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [active, setActive] = useState('')
  const [iconActive, setİconActive] = useState(false)
  const [count, setCount] = useState(0)
  const [skeletonloading, setSkeletonloading] = useState(false)

  const Veri = async () =>{
      const response = await axios.get ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      setData(response.data)
  }
  useEffect(() =>{
    setInterval(() => {
      Veri()
    },1000)
  },[])

  useEffect(() =>{
    setLoaing(!loading)
    setTimeout(() => {
       setLoaing(loading)
    },1500);
  },[])


  const skeletonActive = () => {
     setSkeletonloading(true)
     setTimeout(() => {
       setSkeletonloading(false)
     },1000);
  }

 

const dataa= {
    data,
    search,
    active,
    loginactive,
    iconActive,
    count,
    skeletonloading,
    setCount,
    setLoginactive,
    setİconActive,
}
 
return (
    <>
        
        <MainContext.Provider value={dataa}>
          <div className='ContainerOrtala'>
               <div className='ContainerKapsam' translate='no'>
                 <Offline />
                   <Header />
                     <div className='SearchInput'>
                        
                         <div className={`save-coin-count ${count == 0 ? 'hidden' : ''} `} onClick={(() => setActive('CoinSaveContainerActive'))}>
                          <span>
                             {count}
                          </span>
                         <FontAwesomeIcon icon={faStar} className='star-icon-save'  />
                        
                         </div>
                    
                        
                         <input type="text" placeholder='Search Coin...' onChange={((e) => setSearch(e.target.value.toUpperCase()))} />
                     </div>
                  {
                    loading ? (
                     
                      <>
                         
                       <div className='loadingg'>
                       <FaBitcoin className='loading-icon' />
                       <h2>
                         LOADİNG...
                       </h2>
                       </div>
                      </>
                    
                    ):(
                     <>
                
                    <CoinCompomentHome />

                    <div className={`CoinCompoment ${active == 'CoinCompoment1Active' ? 'active' : ''} `} >
                       {
                        data.filter(coin => coin.name.toUpperCase().includes(search)).map((coin,idx)  => (
                           <CoinCompoment
                            name={coin.name} 
                            image={coin.image} 
                            price={coin.current_price}
                            price_change={coin.price_change_percentage_24h}
                            id={coin.symbol}
                            key={idx}
                            />
                        ))
                       }
                    </div>
                  
                     <CoinCompoment2 />
                     
                     

                     <Login />
                  <ul>
                    <li onClick={(() => setActive('CoinCompomentHomeActive'))}></li>
                    <li onClick={(() => setActive('CoinCompoment1Active'))}></li>
                    <li onClick={(() => {
                      setActive('CoinCompoment2Active')
                     
                      skeletonActive()
                   
                    })}>

                    </li>
                  </ul>
                     </>
                    )

                  
                  }
              
             </div>
          
    </div>
    </MainContext.Provider>
          </>
   
  )
}

export default App
