import "./AuthPage.css";
import Image from "components/Image";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import apiRequest from "utils/apiRequest";
import useAuthStore from "utils/authStore";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post(
        `/users/auth/${isRegister ? "register" : "login"}`,
        data
      );
      setCurrentUser(res.data);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

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
          <form
            key='registerForm'
            onSubmit={handleSubmit}
          >
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
          <form
            key='loginForm'
            onSubmit={handleSubmit}
          >
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
