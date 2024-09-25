import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import PersonalData from './PersonalData';
import './LoadingScreen.css';
import ErrorOverlay from './ErrorOverlay'; // Import the ErrorOverlay component

const LoadingScreen = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsFrozen(true);
      setTimeout(() => {
        setShowVideo(true);
      }, 1000);
    }, 3000); // 3 seconds for the progress bar animation to complete

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (showVideo) {
      setTimeout(() => {
        setShowPersonalData(true);
      }, 10000); // 10 seconds for video
    }
  }, [showVideo]);

  return (
    <div className="loading-screen">
      {showPersonalData ? (
        <PersonalData />
      ) : (
        <>
          {showVideo ? (
            <div className="video-container">
              <ReactPlayer
                url="https://github.com/codingwithshawnyt/Raysume/raw/refs/heads/main/Media/glitch-effect.mp4"
                playing={true}
                loop={false}
                controls={false}
                width="110vw"  // Overfill the width
                height="110vh" // Overfill the height
                style={{ position: 'absolute', top: '-5vh', left: '-5vw', objectFit: 'cover', zIndex: 1 }}
              />
              <ErrorOverlay /> // Add the ErrorOverlay component as a direct child of the video container
            </div>
          ) : (
            <div className="loading-screen-content">
              <div className="loading-text">INITIALIZING NEURAL NETWORK...</div>
              <div className="progress-bar-container">
                <div className={`progress-bar ${isFrozen ? 'freeze' : ''}`}></div>
              </div>
              <div className="loading-subtext">AUTHENTICATING CREDENTIALS...</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LoadingScreen;