import React, { useState } from 'react';
import './Carousel.css';

const images = [
  'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImage(prevState =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImage(prevState =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  return (
    <div className="Carousel">
      <button style={{ marginRight: '48px' }} onClick={goToPreviousImage}>
        &lt;
      </button>
      <div>
        {images.map(
          (img, index) =>
            index === currentImage && <img key={index} src={img} alt="" />
        )}
      </div>
      <button style={{ marginLeft: '48px' }} onClick={goToNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
