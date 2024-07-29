import React, { useEffect, useState } from 'react';
import './PersonalData.css';

const PersonalData = () => {
  const [isHolographicVisible, setHolographicVisible] = useState(false);

  useEffect(() => {
    const adjustFontSize = () => {
      const dataItems = document.querySelectorAll('.data-item');
      dataItems.forEach(item => {
        let fontSize = 18; // Initial font size
        item.style.fontSize = `${fontSize}px`;
        while (item.scrollWidth > item.clientWidth && fontSize > 10) {
          fontSize -= 1;
          item.style.fontSize = `${fontSize}px`;
        }
      });
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, []);

  const handleContactClick = () => {
    setHolographicVisible(!isHolographicVisible);
  };

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
          <div className="extra-folders-container">
            <div className="extra-folders">
              <div className="folder folder-box"></div>
              <div className="folder folder-box"></div>
              <div className="folder folder-box"></div>
            </div>
          </div>
          <div className="fingerprint"></div>
        </div>
        <div className="center-panel">
          <div className="profile-picture"></div>
          <div className={`contact-dialog ${isHolographicVisible ? 'visible' : ''}`}>
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
            Contact Information
          </div>
          <div className="ascii-person">[Shawn RAY]</div>
        </div>
        <div className="right-panel">
          <div className="data-item" onClick={handleContactClick}>Contact</div>
          <div className="data-item">About Me</div>
          <div className="data-item">Skills</div>
          <div className="data-item">References</div>
          <div className="data-item">Education</div>
          <div className="data-item">Experience</div>
          <div className="data-item">Awards and Honors</div>
          <div className="data-item">Club Involvements/Volunteering</div>
        </div>
      </div>
      {isHolographicVisible && (
        <>
          <div className="projector-light visible"></div>
          <div className="projector-beam visible"></div>
          <div className="holographic-projection visible">
            <h2>Contact Information</h2>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalData;
