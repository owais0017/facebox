import React from 'react';
import './faceRecognition.css';

const FaceRecognition = ({ imageUrl, Box }) => {
  return (
    <div className="center ma">
      <div className="absolute" id='image-container'>
        <img id="inputImage" src={imageUrl} alt="face" width="500px" height="auto" />
        <div
        className="bounding-box"
        style={{
          top: Box.topRow,
          right: Box.rightCol,
          left: Box.leftCol,
          bottom: Box.bottomRow,
        }}
      ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
