import React, { useState } from 'react';
import { useEffect } from 'react';
import '../css files/result.css'
import axios from 'axios';

export const Result = () => {
  const [resultImage, setResultImage] = useState(null);

  const fetchResultImage = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/result-image'); // Change the endpoint accordingly
      setResultImage(response.data.imageUrl);
    } catch (error) {
      console.error('Error fetching result image:', error);
    }
  };

  // Call fetchResultImage when the component mounts
  useEffect(() => {
    fetchResultImage();
  }, []);

  return (
    <>
     <div className="container">
  <div className="image-container">
    {resultImage && (
      <img src={resultImage} alt="Result" className="image-preview" />
    )}
  </div>

  <div className="cervixtypeinfo">
    {/* Add your characteristics here */}
  </div>
</div>

    </>
  );
};
