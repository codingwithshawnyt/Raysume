import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import PersonalData from './PersonalData';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 50 && !isFrozen) {
        setProgress(prev => prev + 1);
      } else if (progress >= 50 && !isFrozen) {
        setIsFrozen(true);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [progress, isFrozen]);

  useEffect(() => {
    if (isFrozen) {
      console.log('Progress bar frozen at 50%');
      setTimeout(() => {
        setShowVideo(true);
      }, 1000);
    }
  }, [isFrozen]);

  useEffect(() => {
    if (showVideo) {
      console.log('Showing video');
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
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}>
              <ReactPlayer
                url="https://github.com/codingwithshawnyt/Raysume/raw/refs/heads/main/Media/glitch-effect.mp4"
                playing={true}
                loop={false}
                controls={false}
                width="100%"
                height="100%"
                style={{ position: 'absolute' }}
              />
            </div>
          ) : (
            <div className="loading-screen-content">
              <div className="loading-text">INITIALIZING NEURAL NETWORK...</div>
              <div className="progress-bar-container">
                <div className={`progress-bar ${isFrozen ? 'freeze' : ''}`} style={{ width: `${progress}%` }}></div>
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