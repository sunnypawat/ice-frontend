import React from 'react';
import './MarketInfoCard.css';

const MarketInfoCard = ({ data }) => {
  return (
    <div className="market-info-card">
      <h2>Highest Volume</h2>
      {data.map((item, index) => (
        <div className="info-item" key={index}>
          <div className="company">
            <img src={item.logo} alt={`${item.name} Logo`} className="company-logo" />
            <span className="company-name">{item.name}</span>
          </div>
          <div className="price">
            <span className="current-price">{item.price} USD</span>
            <span className={`change ${item.change > 0 ? 'positive' : 'negative'}`}>
              {item.change > 0 ? '+' : ''}{item.change}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketInfoCard;
