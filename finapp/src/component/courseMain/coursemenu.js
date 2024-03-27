import React from 'react';
import './coursemenu.css';
//import avatar from './path-to-your-image.jpg'; // Make sure to put the correct path to your image file here

const CourseMenu = () => {
  return (
    <div className="course-menu">
      <h2 className="course-header">Course Material</h2>
      <ul className="course-sections">
        <li>Section 1</li>
        <li>Section 2</li>
        <li>Section 3</li>
      </ul>
      <div className="course-bottom-links">
        <div>Report</div>
        <div>Course Info</div>
      </div>
    </div>
  );
};

export default CourseMenu;

///<img src={avatar} alt="Course Avatar" className="course-avatar" />