"use client"
import Image from 'next/image'
import NewsHighlight from '@/component/news/NewsHighlight'
import NewCard from '@/component/news/NewsCard'
import React, { useState, useEffect } from 'react';

export default function News() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data from Postman
    const simulatedData = [
      {
        "ID": 1,
        "Title": "Biotech Firms Breakthrough in Gene Editing",
        "Subtitle": "Gene editing offers new possibilities for treatment.",
        "Description": "Biotech companies announce breakthroughs in gene editing techniques, offering new avenues for treating previously undruggable diseases.",
        "Date": "2024-03-07T01:30:00.000Z",
        "Author": "Hannah Altman",
        "Picture": "http://example.com/images/gene_editing.jpg"
    },
    {
        "ID": 2,
        "Title": "Biotech Firms Breakthrough in Gene Editing",
        "Subtitle": "Gene editing offers new possibilities for treatment.",
        "Description": "Biotech companies announce breakthroughs in gene editing techniques, offering new avenues for treating previously undruggable diseases.",
        "Date": "2024-03-07T01:30:00.000Z",
        "Author": "Hannah Altman",
        "Picture": "http://example.com/images/gene_editing.jpg"
    },
    {
        "ID": 3,
        "Title": "Biotech Firms Breakthrough in Gene Editing",
        "Subtitle": "Gene editing offers new possibilities for treatment.",
        "Description": "Biotech companies announce breakthroughs in gene editing techniques, offering new avenues for treating previously undruggable diseases.",
        "Date": "2024-03-07T01:30:00.000Z",
        "Author": "Hannah Altman",
        "Picture": "http://example.com/images/gene_editing.jpg"
    },
    {
        "ID": 4,
        "Title": "Biotech Firms Breakthrough in Gene Editing",
        "Subtitle": "Gene editing offers new possibilities for treatment.",
        "Description": "Biotech companies announce breakthroughs in gene editing techniques, offering new avenues for treating previously undruggable diseases.",
        "Date": "2024-03-07T01:30:00.000Z",
        "Author": "Hannah Altman",
        "Picture": "http://example.com/images/gene_editing.jpg"
    }
    ];

    setData(simulatedData); // Set the simulated data as your state
    setLoading(false); // Set loading to false since we're not fetching data

    // Commenting out the fetchData call to simulate data loading
    // fetchData();
  }, []);

  // Assuming the first news item is used for the highlight if available
  const highlightNews = data.length > 0 ? data[0] : null;

  return (
    <div id="home">
      <h1>News Highlight</h1>
      <p>See some up-to-date news</p>
      {highlightNews && (
        <NewsHighlight
          imageSrc={highlightNews.Picture} // Use dynamic data
          title={highlightNews.Title}
          date={new Date(highlightNews.Date).toLocaleDateString()} // Format date
          description={highlightNews.Subtitle}
          summary={highlightNews.Description}
        />
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <h1>More News</h1>
          {data.map((item, index) => index > 0 && ( // Skip the first item since it's used in highlight
            <NewCard
              key={item.ID}
              image={item.Picture} // Use dynamic image
              title={item.Title}
              description={item.Description}
              date={new Date(item.Date).toLocaleDateString()} // Format date
            />
          ))}
        </ul>
      )}
    </div>
  );
};
