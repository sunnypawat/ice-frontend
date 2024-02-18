import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container-out'>
        <div className='container'>
          <h2>Community</h2>
          <h3>Facebook</h3>
          <h3>Instagram</h3>
          <h3>Twitter</h3>
        </div>
        <div className='container'>
          <h2>More</h2>
          <h3>About</h3>
          <h3>Customer support</h3>
        </div>
      </div>
      <p>&copy; 2024 Ice-project. All rights reserved.</p>
    </div>
  );
};