"use client"
import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

import Start from '@/component/home/Start';
import NewCard from '@/component/news/NewsCard';

export default function Home() {
  const [newsData, setNewsData] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl+'/api/news');
        setNewsData(response.data); // Assuming the API returns an array of news items
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div id="home">
      <Start />
      <div className='newsView'>
        <h1 className='newsStartTitles'>Recommended</h1>
        <div className='newsContainer'>
          {newsData.map((item, index) => (
            <NewCard
              key={item.ID}
              image={item.Picture} // Use dynamic image
              title={item.Title}
              description={item.Description}
              date={new Date(item.Date).toLocaleDateString()} // Format date
            />
          ))}
        </div>
          
        <h1>New Content</h1>
        <div className='newsContainer'>
          {newsData.map((item, index) => (
            <NewCard
              key={item.ID}
              image={item.Picture}
              title={item.Title}
              description={item.Description}
              date={new Date(item.Date).toLocaleDateString()}
            />
          ))}
        </div>
          
        <h1>News</h1>
        <div className='newsContainer'>
          {newsData.map((item, index) => (
            <NewCard
              key={item.ID}
              image={item.Picture}
              title={item.Title}
              description={item.Description}
              date={new Date(item.Date).toLocaleDateString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
