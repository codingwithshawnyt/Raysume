import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import PersonalData from './PersonalData'; // Import the PersonalData component

const LoadingScreen = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);

  useEffect(() => {
    const dialogTimer = setTimeout(() => {
      setShowDialog(true);
    }, 3000); // 3 seconds to match the progress bar animation duration
  
    const transitionTimer = setTimeout(() => {
      setShowPersonalData(true);
    }, 6000); // 6 seconds to allow the dialog to be shown for 3 seconds
  
    return () => {
      clearTimeout(dialogTimer);
      clearTimeout(transitionTimer);
    };
  }, []);
  
  if (showPersonalData) {
    return <PersonalData />;
  }

  const particles = Array.from({ length: 100 }, (_, i) => (
    <div key={i} className="particle" style={{
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 2}s`,
      animationDelay: `${Math.random() * 5}s`
    }}></div>
  ));

  return (
    <div className="loading-screen">
      <div className="loading-text">Loading...</div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="particles">
        {particles}
      </div>
      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            Subject Found!
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;