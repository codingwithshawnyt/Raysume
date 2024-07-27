// src/App.js
import { hideElements, addGlitchEffect, createAsciiSkull } from './AsciiSkull';
import React from 'react';
import './App.css';
import AsciiSkull from './AsciiSkull';

function App() {
    const handleClick = () => {
        document.getElementById('enter-button').style.display = 'none';
        hideElements();
        addGlitchEffect();
        setTimeout(() => {
            createAsciiSkull();
        }, 3000);
    };

    return (
        <div id="container">
            <div id="overlay"></div>
            <div id="header">
                <div id="logo-wrapper">
                    <img id="logo" src="path/to/logo.png" alt="Logo" />
                    <div id="stamp"></div>
                </div>
            </div>
            <div id="stars"></div>
            <AsciiSkull />
            <div id="button-wrapper">
                <button id="enter-button" onClick={handleClick}>Enter</button>
            </div>
        </div>
    );
}

export default App;