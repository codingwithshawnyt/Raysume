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

// Join the lines back together
const shiftedAsciiSkull = shiftedLines.join('\n');

// Insert ASCII skull into HTML
document.getElementById('ascii-skull').textContent = shiftedAsciiSkull;

// Get the button
const button = document.getElementById('enter-button');

if (button) {
    console.log('Button found');
    // Change color of ASCII skull to red when "Enter" button is clicked
    button.onclick = function() {
        console.log('Button clicked');
        const skullElement = document.getElementById('ascii-skull');
        skullElement.style.color = 'red';
    };
} else {
    console.log('Button not found');
}