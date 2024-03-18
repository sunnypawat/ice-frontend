import React from 'react';
import './PreviousButton.css';

const PreviousButton = ({ onClick }) => {
  return (
    <button className="previous-button" onClick={onClick}>
      &lt; Previous
    </button>
  );
};

export default PreviousButton;
