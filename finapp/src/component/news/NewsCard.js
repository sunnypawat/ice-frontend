import React from 'react';
import './NewsCard.css';
const NewCard = ({ image, title, description, date }) => {
  return (
    <div className="news-card">
      <img src={image} className="news-card-image" />
      <div className="news-card-body">
        <h2 className="news-card-title">{title}</h2>
        <p className="news-card-description">{description}</p>
        <p className="news-card-date">{date}</p>
      </div>
    </div>
  );
};

export default NewCard;
