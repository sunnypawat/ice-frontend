"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  const onButtonClick = async () => {
    setUsernameError('');
    setPasswordError('');

    if ('' === username) {
      setUsernameError('Username is required');
      return;
    }

    if ('' === password) {
      setPasswordError('Password is required');
      return;
    }

    // Attempt to log in
    try {
      console.log(process.env);
      console.log(apiUrl + '/api/login');
      const response = await axios.post(apiUrl+ '/api/login', { username, password }, {
      withCredentials: true});
      console.log('Login successful', response.data);
      // Here you could redirect the user or save the login state
    } catch (error) {
      console.error('Login error', error);
      // More robust error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        if (error.response.status === 401) {
          // Handle specific status code errors (e.g., invalid credentials)
          setPasswordError('Invalid username or password');
        } else {
          // Handle other statuses
          setPasswordError('Login failed. Please try again.');
        }
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error('No response received');
        setPasswordError('Server did not respond. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
        setPasswordError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login" id="login">
      <div className='banner'>
        <h1 className='bannerHeader'>Welcome To Our Website</h1>
        <h2 className='bannerDescription'>A global online learning platform that offers    anyone, anywhere, access to online courses and degrees from leading universities and companies.</h2>
      </div>
      <div className='loginContainer'>
        <h1 className='loginTitle'>USER LOGIN</h1>
        <div className={'inputContainer'}>
          <FontAwesomeIcon />
          <input
            value={username}
            placeholder="Enter username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{usernameError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <FontAwesomeIcon />
          <input
            value={password}
            placeholder="Enter password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input className={'loginLoginButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div>

        <div className='resetPasswordContainer'>
          forget password ?
        </div>

        <hr></hr>

        <div className={'inputContainer'}>
          <input className={'accountButton'} type="button" onClick={onButtonClick} value={'Create account'} />
        </div>
      </div>

    </div>
  )
}