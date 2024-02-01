'use client'
import React, { useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderSection = (activeSection) => {
    switch (activeSection) {
      case 'home':
        return (
          <section id="home">
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
          </section>
        );
      case 'course':
        return (
          <section id="course">
            <h1>Course Selection</h1>
            <p>Select some trading and investment courses</p>
          </section>
        );
      case 'chart':
        return (
          <section id="chart">
            <h1>Stock Graph</h1>
            <p>Some stock graph pics.</p>
          </section>
        );
      case 'market':
        return (
          <section id="market">
            <h1>Overall Stock Market</h1>
            <p>See some market trends</p>
          </section>
        );
      case 'news':
        return (
          <section id="news">
            <h1>News</h1>
            <p>See some up-to-date news</p>
          </section>
        );
      case 'login':
        return (
          <section id="login">
            <h1>Login</h1>
            <p>Enter your username and password</p>
          </section>
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

export default Navbar;
