import React from 'react';
import HologramModel from './HologramModel';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="hologram">
        <HologramModel />
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>LinkedIn: linkedin.com/in/example</p>
      </div>
    </div>
  );
};

export default ContactInfo;