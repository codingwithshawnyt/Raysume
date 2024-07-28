import React from 'react';
import './PersonalData.css';

const PersonalData = () => {
  return (
    <div id="personal-data">
      <div className="personal-data-container">
        <div className="left-panel">
          <div className="confidential-data">
            <h2>Confidential Data</h2>
            <div className="folders">
              <div className="folder"></div>
              <div className="folder"></div>
              <div className="folder"></div>
              <div className="folder"></div>
              <div className="folder"></div>
              <div className="folder"></div>
            </div>
          </div>
          <div className="fingerprint"></div>
        </div>
        <div className="center-panel">
          <div className="profile-picture">
            <div className="ascii-person">[Identity Person]</div>
          </div>
        </div>
        <div className="right-panel">
          <h2>Personal Data</h2>
          <ul>
            <li>Name: </li>
            <li>Home Address: </li>
            <li>Business Address: </li>
            <li>Identity Card No: </li>
            <li>Passport No: </li>
            <li>Driving License: </li>
            <li>Income Tax No: </li>
            <li>Car Registration: </li>
            <li>Other: </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
