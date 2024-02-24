import React from 'react';
import Image from 'next/image';
import './Start.css'

export default function Start() {
  return (
    <div className='start'>
        <h1>Learning Investment</h1>
        <h2>The great opportunity for you to understand fundamental and technical technique for investing</h2>
        <div className={'inputContainer'}>
            <input className={'getStartedButton'} type="button" value={'Get Started'} />
        </div>
    </div>
  );
};