import React from 'react';
import './NextButton.css';

const NextButton = ({ onClick }) => {
  return (
    <div className="next-button-container">
      <button className="next-button" onClick={onClick}>
        Next &gt;
      </button>
    </div>
  );
};

export default NextButton;
