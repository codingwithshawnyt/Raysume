import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import PersonalData from './PersonalData';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);
  const [hasCrashed, setHasCrashed] = useState(false);

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
      const timerId = setTimeout(() => {
        setHasCrashed(true);
      }, 1000); // crash after 1 second

      return () => clearTimeout(timerId);
    }
  }, [isFrozen]);

  return (
    <div className="loading-screen">
      {hasCrashed ? (
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
            onEnded={() => {
              setTimeout(() => {
                setShowPersonalData(true);
              }, 1000); // show personal data after 1 second
            }}
          />
        </div>
      ) : (
        <div className="loading-screen-content">
          <div className="loading-text">INITIALIZING NEURAL NETWORK...</div>
          <div className="progress-bar" style={{ width: '80vw', height: '10px', border: '1px solid #00bfff', margin: '0 auto' }}>
            <div className="progress" style={{ width: `${progress}%`, height: '100%', backgroundColor: '#00bfff' }}></div>
          </div>
          <div className="loading-subtext">AUTHENTICATING CREDENTIALS...</div>
          <div className="glowing-grid"></div>
          <div className="moving-lines"></div>
        </div>
      )}
      {showPersonalData && <PersonalData />}
    </div>
  );
};

export default LoadingScreen;