import React from 'react';
import './Button.css';

function Button({ onClick }) {
  return (
    <button id="enter-button" onClick={onClick}>
      ENTER
    </button>
  );
}

export default Button;
