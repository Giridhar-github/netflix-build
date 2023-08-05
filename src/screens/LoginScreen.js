import React from 'react'
import './LoginScreen.css'

const LoginScreen = () => {    
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo' src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt='' />
            <button className='loginScreen_button'>
                Sign In
            </button>
            <div className='loginScreen__gradient'></div>
            <div className='loginScreen__body'>
                <>
                    <h1>Unlimited films, TV programmes and more</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </>
            </div>

        </div>
    </div>
  )
}

export default LoginScreen