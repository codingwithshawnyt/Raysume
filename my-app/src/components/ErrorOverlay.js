import React, { useState, useEffect } from 'react';
import './ErrorOverlay.css';

const ErrorOverlay = () => {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000); // Hide after 2 seconds
    }, 3000); // Show every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visible) {
      setAnimationClass('animate-in');
      setTimeout(() => {
        setAnimationClass('animate-out');
      }, 2000); // Hide after 2 seconds
    }
  }, [visible]);

  return (
    <div className={`error-overlay ${visible ? 'visible' : ''} ${animationClass}`}>
      <div className="error-message">
        <div className="warning-triangle-wrapper">
          <div className="warning-triangle"></div>
          <div className="exclamation-mark">!</div>
        </div>
        <div className="error-text">System Error</div>
      </div>
    </div>
  );
};

export default ErrorOverlay;