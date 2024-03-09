import Image from 'next/image'
import NewsHighlight from '@/component/news/NewsHighlight'
import NewCard from '@/component/news/NewsCard'

import React, { useState, useEffect } from 'react';
//import axios from 'axios';

export default function News() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (

    <div id="home">
      <h1>News</h1>
      <p>See some up-to-date news</p>
      <h1>News highlight</h1>
      <NewsHighlight 
        imageSrc= 'path-to-your-news-image.jpg' // Replace with the actual path to your news image
        title= 'Market Volatility Reaches New Highs'
        date= '10 November 2024'
        description= 'Franc Daily NEWS'
        summary= 'The market experienced significant volatility this week, with a sharp decline in tech stocks leading the way.'
        keyTakeaway= 'Investors are advised to maintain a diversified portfolio during times of uncertainty.'
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(item => (
            <NewCard
              key={item.id}
              image="path-to-your-image.jpg" // Replace with image path
              title="November Prediction by Experts"
              description="An analysis of market trends and predictions."
              date="10 November 2023"
            />
          ))}
        </ul>
      )}
    </div>
  );
};