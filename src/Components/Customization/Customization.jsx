import React, { useState } from 'react';
import StepIndicator from './../StepIndicator/StepIndicator';
import { useNavigate } from 'react-router-dom';
import './Customization.css';
import Navbar from '../Navbar/Navbar';

const CustomizationPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [' /  Instructions', '  / Choose Option', '  / Download'];

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleChooseTemplate = () => {
    navigate('/explore'); // Redirect to the Explore page
  };

  const handleCustomizeWebsite = () => {
    navigate('/customize'); // Redirect to the Customize page
  };

  return (
    <div >
      <div className='navbar-container dark-nav'>
      <Navbar />
      </div>
    <div className="customization-page">
      <StepIndicator steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />
      {currentStep === 0 && (
        <div className="instructions">
          <h1>Welcome to the Customization Page</h1>
          <p>
            You can either select a template from our library or build your website from scratch
            by customizing it yourself.
          </p>
          <button className="btn-next-step" onClick={() => setCurrentStep(1)}>
            Next
          </button>
        </div>
      )}
      {currentStep === 1 && (
        <div className="options">
          <h2>Choose Your Option</h2>
          <button className="btn-option" onClick={handleChooseTemplate}>
            Choose a Template
          </button>
          <button className="btn-option" onClick={handleCustomizeWebsite}>
            Customize Your Website
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default CustomizationPage;
