import React from 'react';

const NewCard = ({ image, title, description, date }) => {
  return (
    <div className="new-card">
      <img src={image} alt={title} className="new-card-image" />
      <div className="new-card-body">
        <h2 className="new-card-title">{title}</h2>
        <p className="new-card-description">{description}</p>
        <p className="new-card-date">{date}</p>
      </div>
    </div>
  );
};

export default NewCard;
