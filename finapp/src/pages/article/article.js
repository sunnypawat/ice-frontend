import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Article() {
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
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <h3>{data.date}</h3>
          <h3>{data.author}</h3>
          <p>{data.content}</p>
        </div>
      )}
    </div>
  );
};