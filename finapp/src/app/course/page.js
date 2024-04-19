"use client"
import Image from 'next/image'
import CourseBanner from '@/component/courseMain/CourseBanner'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Course() {
  const [courses, setCourses] = useState([]); // State to store course data
  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(apiUrl+'/api/courses'); // Adjust URL as necessary
        setCourses(response.data); // Assume response.data contains the array of courses
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div id="home">
        <h1>Course Selection</h1>
        <p>Select some trading and investment courses</p>
        {courses.map((course) => (
          <CourseBanner 
            key={course.id} // Assume each course has a unique 'id'
            title={course.title} 
            description={course.description}
            level='Level 1: Basic'
            access={false} // Assume 'access' is a boolean
          />
        ))}
    </div>
  );
}