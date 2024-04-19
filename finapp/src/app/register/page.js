"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css'

export default function Login() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordagain, setPasswordAgain] = useState('')


  const [nameError, setNameError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordAgainError, setPasswordAgainError] = useState('')

  const onButtonClick = () => {
    setNameError('')
    setUsernameError('')
    setPasswordError('')
    setPasswordAgainError('')

    if ('' === firstName) {
      setNameError('*')
      return
    }

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

    if(passwordagain != password) {
        setPasswordAgainError('*')
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
      <h1 className='loginTitle'>Register</h1>
        <div className={'inputContainer'}>
          <FontAwesomeIcon />
          <input
            value={firstName}
            placeholder="Enter First Name"
            onChange={(ev) => setFirstName(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{nameError}</label>
        </div>
        <div className={'inputContainer'}>
          <FontAwesomeIcon />
          <input
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(ev) => setLastName(ev.target.value)}
            className={'inputBox'}
          />
        </div>
        <br/>
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
        <div className={'inputContainer'}>
          <FontAwesomeIcon />
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <div className={'inputContainer'}>
          <FontAwesomeIcon />
          <input
            type="password"
            value={passwordagain}
            placeholder="Enter password again"
            onChange={(ev) => setPasswordAgain(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{passwordAgainError}</label>
        </div>
        <div className={'inputContainer'}>
          <button className={'loginLoginButton'} onClick={onButtonClick}>Register</button>
        </div>
      </div>
    </div>
  )
}