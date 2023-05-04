import React from 'react'
import './SignupScreen.css'

const SignupScreen = () => {
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign in</h1>
        <input type='email' placeholder='Email' className='signupScreen__email' />
        <input type='password' placeholder='Password' className='signupScreen__password' />
        <button type='submit' className='signupScreen__button'>Sign in</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span className='signupScreen__link'>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen