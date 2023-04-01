import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Icon from "./Icon";

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ["0", "1", "2", "3"];

  const totalSteps = steps.length;

  return (
    <div className="main-container">
      <div className="progress-wrapper">
        <div
          className={`step-one ${activeStep >= 0 ? "active" : ""}`}
          style={{ backgroundColor: activeStep >= 0 ? "#0acf52" : "" }}
        ></div>
        <div
          className={`step-two ${activeStep >= 1 ? "active" : ""}`}
          style={{ backgroundColor: activeStep >= 1 ? "#0acf52" : "" }}
        >
          <span className="contact">Contactgegevens</span>
        </div>

        <div
          className={`step-three ${activeStep >= 2 ? "active" : ""}`}
          style={{ backgroundColor: activeStep >= 2 ? "#0acf52" : "" }}
        >
          <i class="first-chevron-right-icon"></i>
          <span className="werker">Werkervaring</span>
        </div>

        <div
          className={`step-four ${activeStep >= 3 ? "active" : ""}`}
          style={{ backgroundColor: activeStep >= 3 ? "#0acf52" : "" }}
        >
          <i class="second-chevron-right-icon"></i>
          <Icon icons={FaCheckCircle} className="facheck-circle" />
        </div>
      </div>

      <div className="buttons-container">
        <button
          className="button-style"
          onClick={prevStep}
          disabled={activeStep === 0}
        >
          Previous
        </button>
        <button
          className="button-style"
          onClick={nextStep}
          disabled={activeStep === totalSteps - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
