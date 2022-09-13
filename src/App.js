import React, { useEffect,  useState } from 'react'
import './App.css';
import axios from 'axios';
import Coin from './Compoment/Coin';
import Header from './Compoment/Header';
const App = () => {
  const [data, setData] = useState([])
  const [searccoin, setSearchcoin] = useState('')
  const coin  = async () =>{
      const response = await axios.get ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      setData(response.data)
  }
  useEffect(() => {
       coin()
  },[])
  
  return (
       <>
           
             <div className='CoinContainerKapsamOrtala'>
             <div className='CoinContainerKapsam' translate='no'>
              <Header />
              <div className='CoinSearchİnput'>
                  
                  <span>
                  <input type="text" placeholder=' ' onChange={((e) => setSearchcoin(e.target.value.toUpperCase()))} />
                  <h3>
                     SEARCH COİN...
                  </h3>
                  </span>
                  
               </div>            
                
                    <Coin data={data} SearchCoin={searccoin} />
  
              </div>
           
             </div>
          
           
       </>
  )
}

export default App
