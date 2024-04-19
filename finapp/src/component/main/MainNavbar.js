'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import './MainNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export default function MainNavbar() {
  const [activeSection, setActiveSection] = useState('/');
  const router = useRouter()

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId)
    router.push(sectionId, { scroll: false })
  };

  const getButtonClass = (sectionId) => {
    return `button ${activeSection === sectionId ? 'active' : ''}`;
  };

  return (
    <div>
      <nav>
        <button className={getButtonClass('/home')} onClick={() => navigateTo('/home')}>Home</button>
        <button className={getButtonClass('/course')} onClick={() => navigateTo('/course')}>Course</button>
        <button className={getButtonClass('/chart')} onClick={() => navigateTo('/chart')}>Chart</button>
        <button className={getButtonClass('/market')} onClick={() => navigateTo('/market')}>Market</button>
        <button className={getButtonClass('/news')} onClick={() => navigateTo('/news')}>News</button>
        <button className={`${getButtonClass('/login')} loginButton`} onClick={() => navigateTo('/login')}>
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </button>
      </nav>
    </div>
  );
}

