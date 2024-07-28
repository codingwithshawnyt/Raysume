import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Stars from './components/Stars';
import AsciiSkull from './components/AsciiSkull';
import PersonalData from './components/PersonalData';
import LoadingScreen from './components/LoadingScreen'; // Import the new component

function App() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showAsciiSkull, setShowAsciiSkull] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading screen

  const handleEnterClick = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
      setShowAsciiSkull(true);
      setTimeout(() => {
        setShowAsciiSkull(false);
        setIsLoading(true); // Show loading screen
        setTimeout(() => {
          setIsLoading(false); // Hide loading screen
          setShowPersonalData(true);
        }, 3000); // 3 seconds for loading screen
      }, 6000); // 6 seconds for ASCII skull display
    }, 3000); // 3 seconds for glitching effect
  };

  return (
    <div className={`App ${isGlitching ? 'glitch' : ''}`}>
      <div id="overlay" className={isGlitching ? 'glitch' : ''}></div>
      {!isGlitching && !showAsciiSkull && !showPersonalData && !isLoading && <Header />}
      {!isGlitching && !showAsciiSkull && !showPersonalData && !isLoading && (
        <div id="button-wrapper">
          <Button onClick={handleEnterClick} />
        </div>
      )}
      <Stars show={!isGlitching && !showAsciiSkull && !showPersonalData && !isLoading} />
      {showAsciiSkull && <AsciiSkull />}
      {isLoading && <LoadingScreen />} {/* Render loading screen */}
      {showPersonalData && <PersonalData />}
    </div>
  );
}

export default App;