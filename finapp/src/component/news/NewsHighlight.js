import React from 'react';

const NewsHighlight = ({ imageSrc, title, description, date, summary, keyTakeaway }) => {
  return (
    <div className="news-highlight">
      <img src={imageSrc} alt={title} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{title}</h2>
        <p className="news-date">{date}</p>
        <p className="news-description">{description}</p>
        <div className="news-summary">
          <strong>Summary:</strong> {summary}
        </div>
        <div className="news-key-takeaway">
          <strong>Key Takeaway:</strong> {keyTakeaway}
        </div>
      </div>
    </div>
  );
};

export default NewsHighlight;
