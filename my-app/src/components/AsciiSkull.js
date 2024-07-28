import React, { useEffect } from 'react';
import './AsciiSkull.css';

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
    asciiSkullElement.innerHTML = `<pre>${centeredAsciiSkull}</pre>`;
    asciiSkullElement.style.color = 'red';
    asciiSkullElement.style.userSelect = 'none';
    startCharacterCycle(asciiSkullElement, ['$', '@', '#', '%', '&', '*', '+', '=', '?', '!']);
  };

  const startCharacterCycle = (element, characters) => {
    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
      if (span.textContent.trim() !== '') {
        const randomDelay = Math.floor(Math.random() * 1000);
        setTimeout(() => {
          let interval = setInterval(() => {
            span.textContent = characters[Math.floor(Math.random() * characters.length)];
          }, 100);
          setTimeout(() => {
            element.style.color = 'green'; // Change color to green 1 second before stopping
          }, 2500);
          setTimeout(() => {
            clearInterval(interval);
            span.textContent = 'SHAWNRAY'[index % 8];
            if (index === spans.length - 1) {
              showAccessGrantedMessage();
            }
          }, 3000);
        }, randomDelay);
      }
    });
  };
  
  const showAccessGrantedMessage = () => {
    const message = document.createElement('div');
    message.id = 'access-granted';
    message.textContent = 'ACCESS GRANTED';
    document.body.appendChild(message);
  };

  return <div id="ascii-skull"></div>;
};

export default AsciiSkull;