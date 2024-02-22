'use client'
import Course from '@/page/Course';
import Home from '@/page/Home';
import Chart from '@/page/Course'
import Market from '@/page/Market'
import News from '@/page/News'
import Login from '@/page/Login/Login';
import React, { useState } from 'react';

export default function MainNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
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
        <button onClick={() => navigateTo('home')}>Home</button>
        <button onClick={() => navigateTo('course')}>Course</button>
        <button onClick={() => navigateTo('chart')}>Chart</button>
        <button onClick={() => navigateTo('market')}>Market</button>
        <button onClick={() => navigateTo('news')}>News</button>
        <button onClick={() => navigateTo('login')}>Login</button>
      </nav>

      <main>
        {renderSection(activeSection)}
      </main>
    </div>
  );
}

