import React, { useEffect } from 'react';
import './Stars.css';

const Stars = ({ show }) => {
  useEffect(() => {
    if (!show) return;

    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 5}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starsContainer.appendChild(star);
    }

    const handleMouseMove = (e) => {
      const stars = document.getElementsByClassName('star');
      for (let star of stars) {
        const dx = star.offsetLeft + star.offsetWidth / 2 - e.clientX;
        const dy = star.offsetTop + star.offsetHeight / 2 - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(100 - dist, 0);
        star.style.transform = `translate(${force * dx / 200}px, ${force * dy / 200}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove stars and event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
    };
  }, [show]);

  return show ? <div id="stars"></div> : null;
};

export default Stars;