import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import PersonalData from './PersonalData';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      const progressBar = document.querySelector('.progress-bar');
      progressBar.classList.add('freeze'); // Freeze the progress bar at 50%
      console.log('Progress bar frozen at 50%');

      const timer2 = setTimeout(() => {
        console.log('Timeout completed, showing video');
        setShowVideo(true);
      }, 1500); // Wait for 1.5 seconds before showing the video

      return () => clearTimeout(timer2);
    }, 3000); // Wait for the initial animation to reach 50%

    return () => {
      clearTimeout(timer1);
      console.log('Cleanup, all timeouts cleared');
    };
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false); // Hide the video
    setShowPersonalData(true);
  };

  return (
    <div className="loading-screen">
      {showPersonalData ? (
        <PersonalData />
      ) : (
        <>
          {showVideo && (
            <div className="video-container">
              <ReactPlayer
                key="video-player"
                url="https://github.com/codingwithshawnyt/Raysume/raw/refs/heads/main/Media/glitch-effect.mp4"
                playing={true}
                loop={false}
                controls={false}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
                onEnded={handleVideoEnd}
              />
            </div>
          )}
          {!showVideo && (
            <div className="loading-screen-content">
              <div className="loading-text">INITIALIZING NEURAL NETWORK...</div>
              <div className="progress-bar-container">
                <div className="progress-bar"></div>
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