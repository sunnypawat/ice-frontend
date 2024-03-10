import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import './Start.css'

export default function Start() {
  return (
    <div className='start'>
        <h1 className='startTitle'>Learning Investment</h1>
        <h2 className='startDescription'>The great opportunity for you to understand fundamental and technical technique for investing</h2>
        <div className={'inputContainer'}>
            <Link className={'getStartedButton'} href='/course'>Get Started</Link>
        </div>
    </div>
  );
};