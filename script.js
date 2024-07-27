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
    console.log('ASCII Skull created');
    console.log('Starting character cycle');
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
                    element.style.color = 'green';
                    if (index === spans.length - 1) {
                        console.log('Character cycle complete');
                        showAccessGrantedMessage();
                        setTimeout(clearScreen, 2000); // Clear screen after 2 seconds
                    }
                }, 3000);
            }, randomDelay);
        }
    });
}

function showAccessGrantedMessage() {
    const message = document.createElement('div');
    message.id = 'access-granted';
    message.textContent = 'ACCESS GRANTED';
    document.body.appendChild(message);
    console.log('Access granted message shown');
}

function hideElements() {
    document.getElementById('stars').style.display = 'none';
    document.getElementById('logo-wrapper').style.display = 'none';
    document.getElementById('stamp').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    console.log('Elements hidden');
}

function addGlitchEffect() {
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = 1;
    overlay.classList.add('glitch');
    setTimeout(() => {
        overlay.style.opacity = 0;
        overlay.classList.remove('glitch');
    }, 3000); // Duration of the glitch effect extended to 3 seconds
    console.log('Glitch effect added');
}

function clearScreen() {
    const asciiSkullElement = document.getElementById('ascii-skull');
    if (asciiSkullElement) {
        asciiSkullElement.remove();
    }
    console.log('ASCII Skull removed');
    removeAllElements();
}

function removeAllElements() {
    document.body.innerHTML = '';
    console.log('All elements removed from the body');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('enter-button').addEventListener('click', () => {
        hideElements();
        addGlitchEffect();
        document.getElementById('enter-button').style.display = 'none'; // Hide the enter button
        setTimeout(() => {
            createAsciiSkull();
        }, 3000); // Delay the creation of the ASCII skull by 3 seconds
    });
});