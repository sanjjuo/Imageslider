
import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="parallax-image"
      />
      <div className="arrow-container">
        <div className="arrow" onClick={prevSlide}>
          «
        </div>
        <div className="arrow" onClick={nextSlide}>
          »
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
