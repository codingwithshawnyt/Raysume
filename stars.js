// Loop from 0 to 99
for (let i = 0; i < 100; i++) {
    // Create a new div element
    const star = document.createElement('div');
    // Set the class name of the div element to 'star'
    star.className = 'star';
    // Set the width of the star to a random value between 0 and 5 pixels
    star.style.width = `${Math.random() * 5}px`;
    // Set the height of the star to the same value as the width
    star.style.height = star.style.width;
    // Set the top position of the star to a random value between 0 and the height of the window
    star.style.top = `${Math.random() * window.innerHeight}px`;
    // Set the left position of the star to a random value between 0 and the width of the window
    star.style.left = `${Math.random() * window.innerWidth}px`;
    // Set the animation delay of the star to a random value between 0 and 2 seconds
    star.style.animationDelay = `${Math.random() * 2}s`;
    // Append the star to the element with the id 'stars'
    document.getElementById('stars').appendChild(star);
}


// Add a mousemove event listener to the document
document.addEventListener('mousemove', (e) => {
    // Get all elements with the class name 'star'
    const stars = document.getElementsByClassName('star');
    // Loop through each star
    for (let star of stars) {
        // Calculate the distance between the center of the star and the mouse position
        const dx = star.offsetLeft + star.offsetWidth / 2 - e.clientX;
        const dy = star.offsetTop + star.offsetHeight / 2 - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        // Calculate the force based on the distance
        const force = Math.max(100 - dist, 0);
        // Apply a transformation to the star based on the force and the distance from the mouse
        star.style.transform = `translate(${force * dx / 200}px, ${force * dy / 200}px)`;
    }
});