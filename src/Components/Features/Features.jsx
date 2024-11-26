import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShield, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className="features-container" id='features'>
      <div className="feature-card">
        <FontAwesomeIcon icon={faBolt} beat size="3x" className="feature-icon" />
        <h3>Fast Generation</h3>
        <p>Generate your website in just one minute with lightning-fast performance.</p>
      </div>

      <div className="feature-card">
        <FontAwesomeIcon icon={faShield} beat size="3x" className="feature-icon" />
        <h3>Secure Hosting</h3>
        <p>Your data is protected with top-notch security protocols.</p>
      </div>

      <div className="feature-card">
        <FontAwesomeIcon icon={faPenToSquare} beat size="3x" className="feature-icon" />
        <h3>Customizable Designs</h3>
        <p>Choose from various templates and tailor them to your needs.</p>
      </div>
    </div>
  );
};

export default Features;
