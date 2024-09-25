import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Stars from './components/Stars';
import PersonalData from './components/PersonalData';
import LoadingScreen from './components/LoadingScreen';
import AsciiSkull from './components/AsciiSkull';

function App() {
  const [showPersonalData, setShowPersonalData] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading screen
  const [showAsciiSkull, setShowAsciiSkull] = useState(false); // New state for ASCII skull display

  const handleEnterClick = () => {
    setShowAsciiSkull(true);
    setTimeout(() => {
      setShowAsciiSkull(false);
      setIsLoading(true); // Show loading screen
    }, 6000); // 6 seconds for ASCII skull display
  };

  return (
    <div className="App">
      <div id="overlay"></div>
      {!showPersonalData && !isLoading && !showAsciiSkull && <Header />}
      {!showPersonalData && !isLoading && !showAsciiSkull && (
        <div id="button-wrapper">
          <Button onClick={handleEnterClick} />
        </div>
      )}
      <Stars show={!showPersonalData && !isLoading && !showAsciiSkull} />
      {showAsciiSkull && <AsciiSkull />} {/* Render ASCII skull */}
      {isLoading && <LoadingScreen />} {/* Render loading screen */}
      {showPersonalData && <PersonalData />}
    </div>
  );
}

export default App;