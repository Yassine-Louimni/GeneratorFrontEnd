import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({ steps, currentStep, onStepClick }) => {
  return (
    
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={index} className={`step ${currentStep === index ? 'active' : ''}`} onClick={() => onStepClick(index)}>
          <span className="step-number">{index + 1}</span>
          <span className="step-label">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
