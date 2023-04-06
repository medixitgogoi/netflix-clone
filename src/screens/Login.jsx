import React, { useState } from 'react';
import logo from "../assets/netflix-logo.png";
import "./login.css";
import SignUpScreen from './SignUpScreen';

const Login = () => {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>

      <div className="login__background">
        <img src={logo} alt="" className="login__netflix-logo" />
        <button className='login__button' onClick={()=>setSignIn(true)}>Sign In</button>
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignUpScreen />
        ):(
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          
            <div className="login__input">
              <form>
                <input type="email" placeholder='Enter your email ...' />
                <button onClick={()=>setSignIn(true)}>Get started</button>
              </form>
            </div>
          </>
        )}
        
      </div>

    </div>
  );
}

export default Login;
