import React from 'react';
import './PersonalData.css';

const PersonalData = () => {
  return (
    <div id="personal-data">
      <div className="glowing-background"></div>
      <div className="world-map"></div>
      <div className="radial-lines"></div>
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
          <div className="profile-picture"></div>
          <div className="ascii-person">[Identity Person]</div>
        </div>
        <div className="right-panel">
          <div className="data-item">Name: John Doe</div>
          <div className="data-item">Home Address: 123 Main St</div>
          <div className="data-item">Business Address: 456 Business Rd</div>
          <div className="data-item">Identity Card No: 123456789</div>
          <div className="data-item">Passport No: X1234567</div>
          <div className="data-item">Driving License: D1234567</div>
          <div className="data-item">Income Tax No: IT123456</div>
          <div className="data-item">Car Registration: CR123456</div>
          <div className="data-item">Other: Additional Info</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;