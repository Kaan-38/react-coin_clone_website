
import './Header.css'
import { FaBitcoin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
const Header = () => {
    
  return (
    <>
        <header>
           <div className='HeaderRight'>
               <FaBitcoin className='Headerİcon' />
                <h2>
                    CRYPTO ŞAHİN
                </h2>
           </div>

           <div className='HeaderLeft'>
             <NavLink to='./About' > 
                     ABOUT
                 </NavLink>
                 <NavLink to='./Pricing' >
                    PRICING
                 </NavLink>
                <NavLink to='./Concat_Us' >
                    CONCAT US
                </NavLink>
                <NavLink to='./Sign_Up' >
                    SİGN UP
                </NavLink>
               
           </div>
      </header>
    </>
  )
}

export default Header
