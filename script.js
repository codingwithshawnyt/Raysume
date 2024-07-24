document.addEventListener('DOMContentLoaded', (event) => {
    const iframe = document.getElementById('glitch-video');

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
                  $$u$ $ $ $ $ $ $$
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
    asciiSkullElement.style.userSelect = 'none';

    const button = document.getElementById('enter-button');

    if (button) {
        button.onclick = function() {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
            overlay.style.opacity = '1';
            document.getElementById('stars').style.display = 'none';
            document.getElementById('logo-wrapper').style.display = 'none';
            button.style.display = 'none';

            iframe.style.display = 'block';

            setTimeout(() => {
                iframe.style.display = 'none';

                let glitchInterval = setInterval(() => {
                    document.body.classList.add('glitch');
                    document.body.style.setProperty('--glitch-x', Math.floor(Math.random() * 100) + 'vw');
                    document.body.style.setProperty('--glitch-y', Math.floor(Math.random() * 100) + 'vh');
                    document.body.style.setProperty('--glitch-size', Math.floor(Math.random() * 200) + '%');
                }, 100);

                setTimeout(() => {
                    clearInterval(glitchInterval);
                    overlay.style.display = 'none';
                    overlay.style.opacity = '0';
                    overlay.style.left = '0px';
                    overlay.style.top = '0px';
                    document.body.classList.remove('glitch');

                    const skullSpans = document.querySelectorAll('#ascii-skull span');
                    skullSpans.forEach(span => {
                        span.style.color = 'red';
                        span.style.backgroundColor = '#000';
                        if (span.textContent.trim() !== '') {
                            const randomDelay = Math.floor(Math.random() * 1000);
                            setTimeout(() => {
                                setInterval(() => {
                                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
                                    span.textContent = randomCharacter;
                                }, 1000);
                            }, randomDelay);
                        }
                    });
                }, 5000);
            }, 3000);
        };
    }
});