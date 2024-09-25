import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import PersonalData from './PersonalData';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);
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
      const timerId = setTimeout(() => {
        setShowPersonalData(true);
      }, 2000); // show personal data after 2 seconds

      return () => clearTimeout(timerId);
    }
  }, [isFrozen]);

  return (
    <div className="loading-screen">
      <div className="loading-screen-content">
        <div className="loading-text">Loading...</div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      {showPersonalData && <PersonalData />}
    </div>
  );
};

export default LoadingScreen;