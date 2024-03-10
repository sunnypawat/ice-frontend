"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onButtonClick = () => {
    setUsernameError('')
    setPasswordError('')

    if ('' === username) {
      setUsernameError('*')
      return
    }

    if ('' === password) {
      setPasswordError('*')
      return
    }

    if (password.length < 7) {
      setPasswordError('*')
      return
    }
  }

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