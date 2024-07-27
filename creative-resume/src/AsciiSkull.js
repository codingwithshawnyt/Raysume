import React, { useEffect } from 'react';
import './App.css';

const AsciiSkull = () => {
    useEffect(() => {
        createAsciiSkull();
    }, []);

    const createAsciiSkull = () => {
        const asciiSkull = `
                      uuuuuuuuu
                   uu$$$$$$$$$$$uu
                uu$$$$$$$$$$$$$$$$$uu
               u$$$$$$$$$$$$$$$$$$$$$u
              u$$$$$$$$$$$$$$$$$$$$$$$u
             u$$$$$$$$$$$$$$$$$$$$$$$$$u
             u$$$$$$$$$$$$$$$$$$$$$$$$$u
             u$$$$$$"    "$$$"    "$$$$u
             "$$$$"       u$u      $$$$"
               $$$u       u$u       u$$$
              $$$u       u$$$u       u$$$
              "$$$$uu$$$      $$$uu$$$$"
               "$$$$$$$"      "$$$$$$$"
                 u$$$$$$$$$u$$$$$$$u
                  u$"$"$"$"$"$"$"$u
                  $$u$ $ $ $ $ $ $$u
                   $$$$$$$u$u$u$u$$$
                    "$$$$$$$$$$$$$"
                          """""
        `;
        const lines = asciiSkull.split('\n');
        const minSpaces = Math.min(...lines.map(line => line.search(/\S/)));
        const shiftedLines = lines.map(line => line.substring(minSpaces));
        const maxLength = Math.max(...shiftedLines.map(line => line.length));
        const paddedLines = shiftedLines.map(line => line.padEnd(maxLength));
        let centeredAsciiSkull = paddedLines.join('\n');
        const characters = centeredAsciiSkull.split('');
        const wrappedCharacters = characters.map(character => character === ' ' ? character : `<span style="background-color: transparent;">${character}</span>`);
        centeredAsciiSkull = wrappedCharacters.join('');
        const asciiSkullElement = document.getElementById('ascii-skull');
        asciiSkullElement.innerHTML = centeredAsciiSkull;
        asciiSkullElement.style.color = 'red';
        asciiSkullElement.style.userSelect = 'none';
    };

    const addGlitchEffect = () => {
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = 1;
        overlay.classList.add('glitch');
        setTimeout(() => {
            overlay.style.opacity = 0;
            overlay.classList.remove('glitch');
        }, 3000); // Duration of the glitch effect extended to 3 seconds
        console.log('Glitch effect added');
    };

    const clearScreen = () => {
        document.getElementById('ascii-skull').innerHTML = '';
        document.getElementById('access-granted').remove();
        console.log('Screen cleared');
    };

    const hideElements = () => {
        // Implementation of hideElements
    };

    return (
        <div id="ascii-skull"></div>
    );
};

export { createAsciiSkull, addGlitchEffect, hideElements };
export default AsciiSkull;