document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('enter-button');

    if (button) {
        console.log('Button found');
        button.onclick = function() {
            console.log('Button clicked');
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
            }, 5000);
        };
    } else {
        console.log('Button not found');
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

    requestAnimationFrame(() => {
        asciiSkullElement.classList.add('grow');
    });

    startCharacterCycle(asciiSkullElement);
}

function startCharacterCycle(element) {
    const characters = ['$', '@', '#', '%', '&', '*', '+', '=', '?', '!'];
    const spans = element.querySelectorAll('span');
    spans.forEach(span => {
        if (span.textContent.trim() !== '') {
            const randomDelay = Math.floor(Math.random() * 1000);
            setTimeout(() => {
                setInterval(() => {
                    span.textContent = characters[Math.floor(Math.random() * characters.length)];
                }, 1000);
            }, randomDelay);
        }
    });
}