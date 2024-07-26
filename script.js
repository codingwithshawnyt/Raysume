document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('enter-button');

    if (button) {
        button.onclick = function() {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
            overlay.style.opacity = '1';
            document.getElementById('stars').style.display = 'none';
            document.getElementById('logo-wrapper').style.display = 'none';
            button.style.display = 'none';
            let glitchInterval = setInterval(() => {
                document.documentElement.classList.add('glitch');
                document.documentElement.style.setProperty('--glitch-x', Math.floor(Math.random() * 100) + 'vw');
                document.documentElement.style.setProperty('--glitch-y', Math.floor(Math.random() * 100) + 'vh');
                document.documentElement.style.setProperty('--glitch-size', Math.floor(Math.random() * 200) + '%');
            }, 100);
            setTimeout(() => {
                clearInterval(glitchInterval);
                overlay.style.display = 'none';
                overlay.style.opacity = '0';
                overlay.style.left = '0px';
                overlay.style.top = '0px';
                document.documentElement.classList.remove('glitch');

                createAsciiSkull();

                setTimeout(() => {
                    startCharacterCycle(document.getElementById('ascii-skull'), ['S', 'H', 'A', 'W', 'N', 'R', 'A', 'Y']);
                }, 5000);
            }, 1500);
        };
    }
});

function createAsciiSkull() {
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
    asciiSkullElement.classList.add('grow');
    startCharacterCycle(asciiSkullElement, ['$', '@', '#', '%', '&', '*', '+', '=', '?', '!']);
}

function startCharacterCycle(element, characters) {
    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (span.textContentadocument.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('enter-button');

    if (button) {
        button.onclick = function() {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
            overlay.style.opacity = '1';
            document.getElementById('stars').style.display = 'none';
            document.getElementById('logo-wrapper').style.display = 'none';
            button.style.display = 'none';
            let glitchInterval = setInterval(() => {
                document.documentElement.classList.add('glitch');
                document.documentElement.style.setProperty('--glitch-x', Math.floor(Math.random() * 100) + 'vw');
                document.documentElement.style.setProperty('--glitch-y', Math.floor(Math.random() * 100) + 'vh');
                document.documentElement.style.setProperty('--glitch-size', Math.floor(Math.random() * 200) + '%');
            }, 100);
            setTimeout(() => {
                clearInterval(glitchInterval);
                overlay.style.display = 'none';
                overlay.style.opacity = '0';
                overlay.style.left = '0px';
                overlay.style.top = '0px';
                document.documentElement.classList.remove('glitch');

                createAsciiSkull();

                setTimeout(() => {
                    startCharacterCycle(document.getElementById('ascii-skull'), ['S', 'H', 'A', 'W', 'N', 'R', 'A', 'Y']);
                }, 5000);
            }, 1500);
        };
    }
});

function createAsciiSkull() {
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
    asciiSkullElement.classList.add('grow');
    startCharacterCycle(asciiSkullElement, ['$', '@', '#', '%', '&', '*', '+', '=', '?', '!']);
}

function startCharacterCycle(element, characters) {
    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (span.textContent.trim() !== '') {
            const randomDelay = Math.floor(Math.random() * 1000);
            setTimeout(() => {
                let interval = setInterval(() => {
                    span.textContent = characters[index % characters.length];
                }, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    span.textContent = 'SHAWNRAY'[index % 8];
                    if (index === spans.length - 1) {
                        setTimeout(displayAccessGranted, 1000);
                    }
                }, 3000);
            }, randomDelay);
        }
    });
}

function displayAccessGranted() {
    const accessGrantedDiv = document.createElement('div');
    accessGrantedDiv.textContent = 'ACCESS GRANTED!';
    accessGrantedDiv.style.position = 'fixed';
    accessGrantedDiv.style.top = '50%';
    accessGrantedDiv.style.left = '50%';
    accessGrantedDiv.style.transform = 'translate(-50%, -50%)';
    accessGrantedDiv.style.padding = '20px 40px';
    accessGrantedDiv.style.border = '2px solid green';
    accessGrantedDiv.style.borderRadius = '15px';
    accessGrantedDiv.style.color = 'green';
    accessGrantedDiv.style.fontSize = '2em';
    accessGrantedDiv.style.fontFamily = 'monospace';
    accessGrantedDiv.style.backgroundColor = 'black';
    accessGrantedDiv.style.textAlign = 'center';
    accessGrantedDiv.style.zIndex = '1000';
    document.body.appendChild(accessGrantedDiv);
}.trim() !== '') {
            const randomDelay = Math.floor(Math.random() * 1000);
            setTimeout(() => {
                let interval = setInterval(() => {
                    span.textContent = characters[index % characters.length];
                }, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    span.textContent = 'SHAWNRAY'[index % 8];
                    element.style.color = 'green';
                }, 3000);
            }, randomDelay);
        }
    });
}