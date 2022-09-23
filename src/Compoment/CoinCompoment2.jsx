import React from 'react'
import './CoinCompoment2.css'
import { MainContext } from '../CreateContext'
import { useContext } from 'react'

const CoinCompoment2 = () => {
  const {data, search, active, skeletonloading} = useContext(MainContext)
  
 
  return (
    <div className={`CoinCompoment2 ${active == 'CoinCompoment2Active' ? 'active' : ''} `} >
           {data.filter(coin => coin.name.toUpperCase().includes(search)).map((coin, idx) => (
            <div className='CoinCompoment2Container' key={idx}>
               {
                  skeletonloading === false ? (
                       <>
                         
                <label>
               <img src={coin.image} alt="" />
               <h2>{coin.name}</h2>
               <h2>USD{coin.current_price}$</h2>
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
                  ):(
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

export default CoinCompoment2
