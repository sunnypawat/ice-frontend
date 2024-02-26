import React from 'react';
import Image from 'next/image';
import './CourseBanner.css'

export default function CourseBanner({title, description, level, access} ) {
  return (
    <div className='courseBanner'>
        {access == false ? 
          <div className='unlockedBanner'>
            <div className='unlockedPictureContainer'><Image src='/forgot.png' width={100} height={100}/></div>
          </div> 
          : 
          <></>
        }
        <div className='courseLevelContainer'>
            <p className='courseLevelText'>{level}</p>
        </div>
        <h1 className='courseTitle'>{title}</h1>
        <h2 className='courseDescription'>{description}</h2>
        <div className={'inputContainer'}>
            <input className={'courseButton'} type="button" value={ access == true ? 'Start' : 'Unlocked'} />
        </div>
    </div>
  );
};