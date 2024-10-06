import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Stars from './components/Stars';
import PersonalData from './components/PersonalData';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [showPersonalData, setShowPersonalData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnterClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="App">
      <div id="overlay"></div>
      {!showPersonalData && !isLoading && <Header />}
      {!showPersonalData && !isLoading && (
        <div id="button-wrapper">
          <Button onClick={handleEnterClick} />
        </div>
      )}
      <Stars show={!showPersonalData && !isLoading} />
      {isLoading && <LoadingScreen />}
      {showPersonalData && <PersonalData />}
    </div>
  );
}

export default App;