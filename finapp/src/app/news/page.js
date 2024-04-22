"use client"
import Image from 'next/image'
import NewsHighlight from '@/component/news/NewsHighlight'
import NewCard from '@/component/news/NewsCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function News() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/news');
        console.log(response.data); // Log the received data to the console
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
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
