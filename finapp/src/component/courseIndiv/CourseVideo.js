import React from 'react';
import Image from 'next/image';
import './CourseVideo.css'

export default function CourseVideo({title, description, image} ) {
  return (
    <div className='courseText'>
        <h1 className='courseTextTitle'>Example Title</h1>
        <h2 className='courseTextSubtitle'>Example Subtitle for the video</h2>
        <img src={image} className="news-card-image" />
        <div className='courseVideoContainer'>
            <iframe src='https://www.youtube.com/watch?v=aalI6hytUPU' title='Course video' allowFullScreen/>
        </div>
    </div>
  );
};