import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Coin.css'
const Coin = ( {data, SearchCoin} ) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1500);
},[])

  return (
    <div className={`CoinCompoment2`} >
   {
    data.filter(coin => coin.name.toUpperCase().includes(SearchCoin)).map((coin) => (
     <div className='CoinCompoment2Container'>
        
        {
          loading  ? (
            <>
                <label>
      
            <img src={coin.image}  alt="" id='yükşeliş' />
            <h2 id='yükşeliş'>{coin.name}</h2>
            <h2 id='yükşeliş'>USD{coin.current_price}$</h2>
          
      
            
        
     </label>
     <span>
   
    { coin.price_change_percentage_24h > 0 ? (
           <h4 className='green'>24H</h4>
        ) : (
           <h4 className='red'>24H</h4>
        )
       }
        {
          coin.price_change_percentage_24h > 0 ?(
             <p className='analiz-yükşeliş-cubuk'></p>
          ):(
            <p className='analiz-düşüş-cubuk'></p>
          )
        }

{
          coin.price_change_percentage_24h > 0 ?(
             <h3 className='yükseliş'>+{coin.price_change_percentage_24h.toFixed(2)}%</h3>
          ):(
             <h3 className='düşüş'>{coin.price_change_percentage_24h.toFixed(2)}%</h3>
          )
        }
     </span>
            </>
          ) : (
          <>
                <div className='SkeletonLeft'>
                 <div className='Skeletonİmg  loading'></div>
                 <div className='SkeletonName loading'></div>
                 <div className='SkeletonPrice  loading'></div>
              </div>
              
              
              <div className='SkeletonRight'>
                   <div className='SkeletonTime loading'></div>
                   <div className='SkeletonAnalizÇizgi loading'></div>
                   <div className='SkeletonAnalizYüzdelik loading'></div>
              </div>
          </>
          )
        }
        
     </div>
    ))}
</div>
  )
}

export default Coin
