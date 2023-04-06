import React, { useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./SignUpScreen.css";

const SignUpScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    }catch(error){
      alert(error.message);
    }
  }

  const signIn = async (e) => {
    e.preventDefault();

    try{
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    }catch(error){
      alert(error.message);
    }
  }

  return (
    <div className='signUp'>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email ...' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Password ...' onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className='signUp__gray'>New to Netflix?</span>
          <span className='signUp__link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
