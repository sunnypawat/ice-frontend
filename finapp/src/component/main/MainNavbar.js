'use client'
import Course from '@/page/Course/Course';
import Home from '@/page/Home/Home';
import Chart from '@/page/Chart'
import Market from '@/page/Market'
import News from '@/page/News'
import Login from '@/page/Login/Login';
import React, { useState } from 'react';
import './MainNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export default function MainNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
  };

  const getButtonClass = (sectionId) => {
    return `button ${activeSection === sectionId ? 'active' : ''}`;
  };


  const renderSection = (activeSection) => {
    switch (activeSection) {
      case 'home':
        return (
          <Home/>
        );
      case 'course':
        return (
          <Course/>
        );
      case 'chart':
        return (
          <Chart/>
        );
      case 'market':
        return (
          <Market/>
        );
      case 'news':
        return (
          <News/>
        );
      case 'login':
        return (
          <Login/>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button className={getButtonClass('home')} onClick={() => navigateTo('home')}>Home</button>
        <button className={getButtonClass('course')} onClick={() => navigateTo('course')}>Course</button>
        <button className={getButtonClass('chart')} onClick={() => navigateTo('chart')}>Chart</button>
        <button className={getButtonClass('market')} onClick={() => navigateTo('market')}>Market</button>
        <button className={getButtonClass('news')} onClick={() => navigateTo('news')}>News</button>
        <button className={`${getButtonClass('login')} loginButton`} onClick={() => navigateTo('login')}>
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </button>
      </nav>

      <main>
        {renderSection(activeSection)}
      </main>
    </div>
  );
}

