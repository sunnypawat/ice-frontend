import React from 'react';
import Image from 'next/image';
import './CourseVideo'

export default function CourseText({title, description, image} ) {
  return (
    <div className='courseText'>
        <h1 className='courseTextTitle'>Example Title</h1>
        <img src={image} className="news-card-image" />
        <h2 className='courseTextDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio velit, volutpat at mauris ut, rhoncus pharetra sapien. Sed eu consectetur erat. Quisque lectus elit, eleifend in ligula in, bibendum tincidunt ipsum. Phasellus et vehicula erat. Donec non sem in augue suscipit placerat. Quisque suscipit in diam nec rhoncus. Nullam pharetra efficitur lobortis.

Fusce cursus auctor porttitor. Nunc quis dolor a metus molestie pharetra. Phasellus mollis tincidunt odio. Integer blandit, tortor eget molestie sollicitudin, dui mauris vehicula odio, non facilisis nulla dui at nunc. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque vel aliquam dolor. Integer efficitur scelerisque sem, et luctus mauris viverra sed. Cras ac facilisis tellus, vitae rhoncus ipsum.

Morbi eget ullamcorper metus, vitae vestibulum mi. Nunc dictum dolor eu odio ornare congue. Nunc et elit eget ipsum tempus tempor. Nulla sollicitudin nulla augue, at dignissim mi pellentesque et. Proin orci lectus, ornare eget metus non, tempus vulputate ligula. Aliquam erat volutpat. Proin facilisis vitae urna ac tempus. Sed est tortor, viverra vitae condimentum et, mattis id lorem. Vivamus orci quam, aliquam sed neque ac, lobortis convallis nulla.

Cras ex ipsum, accumsan ac imperdiet nec, lacinia at elit. Nam at maximus metus. Quisque in ante sit amet lorem sollicitudin porttitor. Sed ac elit vulputate, euismod nibh vitae, tincidunt nunc. Phasellus porta nisl eu cursus volutpat. Nunc luctus nisl quis nibh rutrum, quis auctor purus euismod. Donec nec risus lorem. Integer sem nunc, dapibus tincidunt iaculis quis, bibendum id turpis. In in porta lorem. Vestibulum pretium lorem vitae rhoncus feugiat.

Etiam quis vehicula eros. Nulla magna velit, aliquet et euismod et, dapibus placerat orci. Cras id interdum mi. Sed blandit velit sit amet posuere faucibus. Pellentesque bibendum feugiat enim a blandit. Sed maximus quis nisl ac gravida. Donec lobortis sapien quis congue tristique. Cras nec nisi scelerisque, sagittis eros in, vestibulum nisi. Fusce tellus tellus, consectetur ac mauris vitae, blandit gravida augue. Quisque condimentum lorem lorem, in feugiat quam facilisis hendrerit. Vestibulum ornare non massa nec aliquet. Cras ac tellus in elit posuere cursus. Proin finibus tincidunt libero, non aliquet dui. Suspendisse felis lacus, hendrerit in blandit ac, porttitor vitae ipsum.</h2>
    </div>
  );
};