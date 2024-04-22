import React from 'react';
import './NewsHighlight.css';

const NewsHighlight = ({ imageSrc, title, description, date, summary, keyTakeaway }) => {
  return (
    <div className="news-highlight">
      <img src={imageSrc} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{title}</h2>
        <p className="news-description">{description}</p>
        <p className="news-date">{date}</p>
        <div className="news-summary">
          <strong>Summary:</strong> 
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsHighlight;
