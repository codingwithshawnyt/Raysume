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
        <p>LinkedIn: <a href="https://linkedin.com/in/example">linkedin.com/in/example</a></p>
      </div>
    </div>
  );
};

export default ContactInfo;