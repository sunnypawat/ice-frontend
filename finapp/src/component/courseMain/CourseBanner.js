import React from 'react';
import Image from 'next/image';
import './CourseBanner.css'

export default function CourseBanner({title, description, level, access} ) {
  return (
    <div className='courseBanner'>
        <div className='courseLevelContainer'>
            <p>{level}</p>
        </div>
        <h1 className='courseTitle'>{title}</h1>
        <h2 className='courseDescription'>{description}</h2>
        <div className={'inputContainer'}>
            <input className={'courseButton'} type="button" value={'Start'} />
        </div>
    </div>
  );
};