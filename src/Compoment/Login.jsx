import React, { useContext } from 'react'
import './Login.css'
import { MainContext } from '../CreateContext'
import { FaWindowClose } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'

const Login = () => {
   const { setLoginactive, loginactive } = useContext(MainContext)
   const [ınput_username, setInput_username] = useState('')
   const [active_username, setActive_username] = useState('')
   const [ınput_password, setInput_password] = useState('')
   const [active_password, setActive_password] = useState('')
   useEffect(() => {
      if(ınput_username.length == 0){
         setActive_username('ınput-container none')
      }
      if(ınput_username.length > 0 && ınput_username.length < 5){
         setActive_username('ınput-container visble-eror-length-small')
      }
      if(ınput_username.length > 4 && ınput_username.length < 10){
         setActive_username('ınput-container visble')
      }
      if(ınput_username.length > 9){
         setActive_username('ınput-container visble-eror-length-big')
      }

      if(ınput_password.length == 0){
         setActive_password('ınput-container none')
      }
      if(ınput_password.length > 0 && ınput_password.length < 5){
         setActive_password('ınput-container visble-eror-length-small')
      }
      if(ınput_password.length > 4 && ınput_password.length < 10){
         setActive_password('ınput-container visble')
      }
      if(ınput_password.length > 9){
         setActive_password('ınput-container visble-eror-length-big')
      }
      
      
   },[ınput_username, ınput_password])
 
    const LoginContainer = document.querySelector('.LoginContainer')
    document.addEventListener('click', (e) =>{
       if(e.composedPath().includes(LoginContainer)){
         console.log('içi')
       }else{
         console.log('dış')
       }
    })

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
                     <input type="text" placeholder=' ' onChange={((e) => setInput_username(e.target.value))} />
                     <h4>
                       USERNAME
                     </h4>
                     <div className={active_username}>
                         <h6 className='ınput-username-container-h6 small-length-eror'>
                         Please enter more than 4 characters
                         </h6>
                         <h6 className='ınput-username-container-h6 visible'>
                          Entered Username is Valid
                         </h6>
                         <h6 className='ınput-username-container-h6 big-length-eror'>
                         Please Enter less than 10 characters
                         </h6>
                     </div>
               </label>
              

               <label>
                     <input type="password" placeholder=' ' onChange={((e) => setInput_password(e.target.value))} />
                      <h4>
                         PASSWORD
                      </h4>

                   <div className={active_password}>
                      <h6 className='ınput-password-container-h6 small-length-eror'>
                      Password must be greater than 4 characters
                      </h6>
                      <h6 className='ınput-password-container-h6 visible'>
                      Entered Password is Valid
                      </h6>
                      <h6 className='ınput-password-container-h6 big-length-eror'>
                      Please Enter less than 10 characters
                      </h6>
                   </div>
                      
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
