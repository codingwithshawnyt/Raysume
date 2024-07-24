document.addEventListener('DOMContentLoaded', (event) => {
    // ASCII skull
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
                          """"
`;

    // Split ASCII skull into lines
    const lines = asciiSkull.split('\n');

    // Find the line with the least amount of leading spaces
    const minSpaces = Math.min(...lines.map(line => line.search(/\S/)));

    // Subtract that amount of spaces from the beginning of each line
    const shiftedLines = lines.map(line => line.substring(minSpaces));

    // Calculate the maximum length of all lines
    const maxLength = Math.max(...shiftedLines.map(line => line.length));

    // Pad each line with spaces at the end to match the maximum length
    const paddedLines = shiftedLines.map(line => line.padEnd(maxLength));

    // Join the lines back together
    let centeredAsciiSkull = paddedLines.join('\n');

    // Split the ASCII skull into characters
    const characters = centeredAsciiSkull.split('');

    // Wrap each character in a span with a transparent background
    const wrappedCharacters = characters.map(character => character === ' ' ? character : `<span style="background-color: transparent;">${character}</span>`);

    // Join the wrapped characters back together
    centeredAsciiSkull = wrappedCharacters.join('');

    // Get the ASCII skull element
    const asciiSkullElement = document.getElementById('ascii-skull');

    // Insert the wrapped ASCII skull back into the HTML
    asciiSkullElement.innerHTML = centeredAsciiSkull;

    // Prevent the user from selecting the text
    asciiSkullElement.style.userSelect = 'none';
    
    // Get the button
    const button = document.getElementById('enter-button');

    if (button) {
        console.log('Button found');
        // Change color of ASCII skull to red and background to black when "Enter" button is clicked
        button.onclick = function() {
            console.log('Button clicked');
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
            overlay.style.opacity = '1';
            // Hide elements as soon as the glitching starts
            document.getElementById('stars').style.display = 'none';
            document.getElementById('logo-wrapper').style.display = 'none';
            button.style.display = 'none'; // Hide the "Enter" button
            // Add other elements you want to hide here
            // Start glitch effect
            let glitchInterval = setInterval(() => {
                document.documentElement.classList.add('glitch'); // Add the glitch class to the html element
                document.documentElement.style.setProperty('--glitch-x', Math.floor(Math.random() * 100) + 'vw');
                document.documentElement.style.setProperty('--glitch-y', Math.floor(Math.random() * 100) + 'vh');
                document.documentElement.style.setProperty('--glitch-size', Math.floor(Math.random() * 200) + '%');
            }, 100);
            setTimeout(() => {
                // Stop glitch effect
                clearInterval(glitchInterval);
                overlay.style.display = 'none';
                overlay.style.opacity = '0';
                overlay.style.left = '0px';
                overlay.style.top = '0px';
                document.documentElement.classList.remove('glitch'); // Remove the glitch class from the html element
                const skullSpans = document.querySelectorAll('#ascii-skull span');
                skullSpans.forEach(span => {
                    span.style.color = 'red';
                    span.style.backgroundColor = '#000';
                    // Check if the character is not a space
                    if (span.textContent.trim() !== '') {
                        // Generate a random delay between 0 and 1000 milliseconds
                        const randomDelay = Math.floor(Math.random() * 1000);
                        // Start the interval after the random delay
                        setTimeout(() => {
                            setInterval(() => {
                                // Define the characters that can be used
                                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                // Generate a random character
                                const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
                                // Replace the current character with the random character
                                span.textContent = randomCharacter;
                            }, 1000);
                        }, randomDelay);
                    }
                });
            }, 5000); // Increase the duration of the glitch effect to 5 seconds
        };
    } else {
        console.log('Button not found');
    }
});