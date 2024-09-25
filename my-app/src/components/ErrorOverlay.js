import React, { useState, useEffect } from 'react';
import './ErrorOverlay.css';
import { PowerGlitch } from 'powerglitch'

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

  useEffect(() => {
    if (visible) {
      const glitchElement = document.querySelector('.error-overlay');

      try {
        const { startGlitch, stopGlitch } = PowerGlitch.glitch(
          glitchElement,
          {
            playMode: 'always',
            timing: {
              duration: 2000,
              iterations: 10,
            },
            glitchTimeSpan: {
              start: 0.2,
              end: 0.8,
            },
            shake: {
              velocity: 5,
              amplitudeX: 0.2,
              amplitudeY: 0.2,
            },
            slice: {
              count: 3,
              velocity: 5,
              minHeight: 0.01,
              maxHeight: 0.3,
              hueRotate: true,
            },
          }
        );

        return () => {
          try {
            stopGlitch();
          } catch (error) {
            console.error('Error stopping glitch:', error);
          }
        };
      } catch (error) {
        console.error('Error starting glitch:', error);
      }
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