import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';


const images = [
  require('./images/imageee.jpg'),
  require('./images/image5.jpg'),
  require('./images/image6.jpg'),
];


function App() {
  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
