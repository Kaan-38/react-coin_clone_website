import React, { useContext } from 'react'
import './Login.css'
import { MainContext } from '../CreateContext'
import {  FaWindowClose } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import { useEffect } from 'react'


const Login = () => {
   const { setLoginactive, loginactive } = useContext(MainContext)
   const [ınput_username, setInput_username] = useState('')
   const [active_username, setActive_username] = useState('')
   const [ınput_password, setInput_password] = useState('')
   const [active_password, setActive_password] = useState('')
   const [username_password_erorr, setUsername_password_erorr] = useState(false)
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
        
       }else{
         
       }
    })

   
 
  return (
    <div className='LoginContainerOrtala'>
         <div className={`ContainerLoginEror ${username_password_erorr == true ? 'active' : ''} `}>
              
              <div className='container-close' onClick={(() => {
                 setUsername_password_erorr(false)
              })}>
                <MdClose className='icon'  onClick={(() => {
                       setInput_username('')
                       setInput_password('')
                    })} />
              </div>

              <span>
                 <div className='icon-contaier'>
                    <MdClose className='icon' />
                 </div>
         
                 <h4>
                   THE LOGIN INFORMATION IS INCORRECT
                 </h4>
              </span>
         </div>

         <div className={`LoginContainer ${loginactive == true ? 'active' : ''} `} >
              
              <div className='icon-container'>
                 <FaWindowClose className='icon-close' onClick={(() => {
                  setLoginactive(false)
                  setInput_username('')
                  setInput_password('')
                  setActive_username('ınput-container none')
                  setActive_password('ınput-container none')
                 })} />
               </div>
              
              
               <div className='LoginContainerGap'>
                 

               <span>
                    <h1>
                       SİGN IN
                    </h1>
                </span>
               
               <label>
                     <input type="text" placeholder=' ' value={ınput_username} onChange={((e) => setInput_username(e.target.value))} />
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
                     <input type="password" placeholder=' ' value={ınput_password} onChange={((e) => setInput_password(e.target.value))} />
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
                   <h3 onClick={(() => {
                      if(ınput_username.length > 4 && ınput_password.length > 4){
                        setUsername_password_erorr(true)
                      }
                      if(ınput_username.length == 0 && ınput_password.length == 0) {
                        setActive_username('ınput-container visble-eror-length-small')
                        setActive_password('ınput-container visble-eror-length-small')
                      }
                   })}>
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
