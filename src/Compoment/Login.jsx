import React, { useContext } from 'react'
import './Login.css'
import { MainContext } from '../CreateContext'
import { FaWindowClose } from 'react-icons/fa'

const Login = () => {
   const { setLoginactive, loginactive } = useContext(MainContext)
   
     

  return (
    <div className='LoginContainerOrtala'>
         <div className={`LoginContainer ${loginactive == true ? 'active' : ''} `} >
              
              <div className='icon-container'>
                 <FaWindowClose className='icon-close' onClick={(() => setLoginactive(false))} />
               </div>
              
              
               <div className='LoginContainerGap'>
                 

               <span>
                    <h1>
                       SİGN IN
                    </h1>
                </span>
               
               <label>
                     <input type="text" placeholder=' ' />
                     <h4>
                       USERNAME
                     </h4>
                    
               </label>
              

               <label>
                     <input type="password" placeholder=' ' />
                      <h4>
                         PASSWORD
                      </h4>
                     
               </label>

               <span>
                   <h3>
                      LOGİN
                   </h3>
               </span>

               <span>
                  <h5>
                     Forgot Password?
                  </h5>
               </span>
               </div>
         </div>
    </div>
  )
}

export default Login
