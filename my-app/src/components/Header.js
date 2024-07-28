import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="header">
      <div id="logo-wrapper">
        <img src="https://raw.githubusercontent.com/codingwithshawnyt/Raysume/main/Media/FBI_National_Security_Branch.png" alt="CIA Logo" id="logo" />
        <div id="stamp"></div>
      </div>
      <pre id="ascii-skull"></pre>
    </div>
  );
};

export default Header;
