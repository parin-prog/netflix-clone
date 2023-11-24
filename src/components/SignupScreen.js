import React, { useRef } from 'react'
import './SignupScreen.css'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const SignupScreen = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userCredential)=>{console.log(userCredential)})
    .catch((err)=>{alert(err.message)})
  
  }
  const signIn = (e) =>{
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userCredential)=>{console.log(userCredential)})
    .catch((err)=>{alert(err.message)})
  
    e.preventDefault();
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} type='email' placeholder='Email' className='signupScreen__email' />
        <input ref={passwordRef} type='password' placeholder='Password' className='signupScreen__password' />
        <button type='submit' className='signupScreen__button' onClick={signIn}>Sign in</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span className='signupScreen__link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen