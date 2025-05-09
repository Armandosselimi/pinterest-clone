import "./AuthPage.css";
import Image from "components/Image";
import React, { useState } from "react";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className='authPage'>
      <div className='authContainer'>
        <Image
          path='/general/logo.png'
          w={36}
          h={36}
        />
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key='registerForm'>
            <div className='formGroup'>
              <label htmlFor='username'>Username</label>
              <input
                required
                id='username'
                type='username'
                name='username'
                placeholder='Username'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='displayName'>Name</label>
              <input
                required
                id='displayName'
                type='displayName'
                name='displayName'
                placeholder='Name'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input
                required
                id='email'
                type='email'
                name='email'
                placeholder='Email'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                required
                id='password'
                type='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <button type='submit'>Register</button>
            <p onClick={() => setIsRegister(false)}>
              Already have an account? Go to <b>Login</b>
            </p>
            {error && <p className='error'>{error}</p>}
          </form>
        ) : (
          <form key='loginForm'>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input
                required
                id='email'
                type='email'
                name='email'
                placeholder='Email'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                required
                id='password'
                type='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <button type='submit'>Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don't have an account? <b>Register</b>
            </p>
            {error && <p className='error'>{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
