import React from "react";
import "./page.css";

const Page = () => {
  // Hardcoded values for demonstration
  const title = "Stock Market Hits Record High Amid Economic Uncertainty";
  const date = "12 November 2023";
  const author = "MarketWatch Today";
  const bodyText = [
    "In a surprising twist of economic fate, the stock market has defied all odds and surged to unprecedented record highs. Amidst ongoing concerns about inflation, global instability, and the specter of economic uncertainty, the stock market has shown remarkable resilience. Investors are exhibiting unwavering confidence, propelling the market to dizzying peaks. Financial analysts and experts are astounded by this unexpected turn of events.",
    "As the world grapples with economic headwinds, including rising inflation, geopolitical tensions, and supply chain disruptions, the stock market's ability to rally and reach historic highs has caught both experts and casual observers by surprise. The key question on everyone’s mind is: What is driving this remarkable surge, and how sustainable is it?",
    // Add more paragraphs as needed
  ];

  return (
    <div className="page-container">
      <div className="header-image">
        {/* You can add the header image here. */}
      </div>
      <div className="article-content">
        <h1 className="news-heading">{title}</h1>
        <div className="article-metadata">
          <span className="date-written">{date}</span>
          <span className="author">{author}</span>
        </div>
        <div className="text-body">
          {bodyText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

/*const Page = ({ title, date, author, bodyText }) => {
    // Check if bodyText is an array, if not, set it to an empty array
    const validBodyText = Array.isArray(bodyText) ? bodyText : [];
  
    return (
      <div className="page-container">
        <div className="header-image">
          {// You can add the header image here.}
        </div>
        <div className="article-content">
          <h1 className="news-heading">{title}</h1>
          <div className="article-metadata">
            <span className="date-written">{date}</span>
            <span className="author">{author}</span>
          </div>
          <div className="text-body">
            {validBodyText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    );
};*/

export default Page;
