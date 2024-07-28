import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Stars from './components/Stars';
import AsciiSkull from './components/AsciiSkull';
import PersonalData from './components/PersonalData';

function App() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showAsciiSkull, setShowAsciiSkull] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);

  const handleEnterClick = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
      setShowAsciiSkull(true);
      setTimeout(() => {
        setShowAsciiSkull(false);
        setShowPersonalData(true);
      }, 6000); // 2 seconds for ASCII skull display
    }, 3000); // 2 seconds for glitching effect
  };

  return (
    <div className={`App ${isGlitching ? 'glitch' : ''}`}>
      <div id="overlay" className={isGlitching ? 'glitch' : ''}></div>
      {!isGlitching && !showAsciiSkull && !showPersonalData && <Header />}
      {!isGlitching && !showAsciiSkull && !showPersonalData && (
        <div id="button-wrapper">
          <Button onClick={handleEnterClick} />
        </div>
      )}
      <Stars show={!isGlitching && !showAsciiSkull && !showPersonalData} />
      {showAsciiSkull && <AsciiSkull />}
      {showPersonalData && <PersonalData />}
    </div>
  );
}

export default App;
