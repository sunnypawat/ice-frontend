import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import './Home.css'

import Start from '@/component/home/Start'
import NewCard from '@/component/news/NewsCard'
import MarketInfoCard from '@/component/home/MarketInfoCard';

const myArray = [1, 2, 3];
const marketData = [1, 1, 1];

export default function Home() {
  return (
    <div id="home">
      <Start />
      <div className='newsView'>
        <h1 className='newsStartTitles'>Recommended</h1>
        <div className='newsContainer'>
          {myArray.map((item, index) => (
            <NewCard
              id={index}
              image="path-to-your-image.jpg"
              title="November Prediction by Experts"
              description="An analysis of market trends and predictions."
              date="10 November 2023"
            />
          ))}
        </div>

        <h1>New Content</h1>
        <div className='newsContainer'>
          {myArray.map((item, index) => (
            <NewCard
              id={index}
              image="path-to-your-image.jpg"
              title="November Prediction by Experts"
              description="An analysis of market trends and predictions."
              date="10 November 2023"
            />
          ))}
        </div>

        <h1>News</h1>
        <div className='newsContainer'>
          {myArray.map((item, index) => (
            <NewCard
              id={index}
              image="path-to-your-image.jpg"
              title="November Prediction by Experts"
              description="An analysis of market trends and predictions."
              date="10 November 2023"
            />
          ))}
        </div>

        <div className='marketInfoCardsContainer'>
          {Array(4).fill().map((_, index) => (
            <div className='marketInfoView' key={index}>
              <MarketInfoCard data={marketData} />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}