import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import '../css files/landingcontent.css';
import illustration from '../assets/illustrationcervix.png';

export const LandingContent = () => {
  const [goToClassify, setGoToClassify] = useState(false);
  const [goToContact, setGoToContact] = useState(false);
  const [numberOfTests, setNumberOfTests] = useState(0);
  const [numberOfDeaths, setNumberOfDeaths] = useState(0);
  const [numberOfHealthCamps, setNumberOfHealthCamps] = useState(0);
  const [numberOfOrganizations, setNumberOfOrganizations] = useState(0);

  // Function to animate the number increase for tests
  const animateNumberOfTestsIncrease = (upperBound) => {
    const finalNumber = upperBound; // Set the final number here
    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber++;
      setNumberOfTests(currentNumber);
      if (currentNumber === finalNumber) {
        clearInterval(interval);
      }
    }, 10); // Change the interval for speed adjustment
  };

  // Function to animate the number increase for deaths
  const animateNumberOfDeathsIncrease = (upperBound) => {
    const finalNumber = upperBound; // Set the final number here
    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber++;
      setNumberOfDeaths(currentNumber);
      if (currentNumber === finalNumber) {
        clearInterval(interval);
      }
    }, 20); // Change the interval for speed adjustment
  };

  // Function to animate the number increase for health camps
  const animateNumberOfHealthCampsIncrease = (upperBound) => {
    const finalNumber = upperBound; // Set the final number here
    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber++;
      setNumberOfHealthCamps(currentNumber);
      if (currentNumber === finalNumber) {
        clearInterval(interval);
      }
    }, 15); // Change the interval for speed adjustment
  };

  // Function to animate the number increase for organizations
  const animateNumberOfOrganizationsIncrease = (upperBound) => {
    const finalNumber = upperBound; // Set the final number here
    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber++;
      setNumberOfOrganizations(currentNumber);
      if (currentNumber === finalNumber) {
        clearInterval(interval);
      }
    }, 30); // Change the interval for speed adjustment
  };

  useEffect(() => {
    animateNumberOfTestsIncrease(129); // Pass the upper bound for tests
    animateNumberOfDeathsIncrease(50); // Pass the upper bound for deaths
    animateNumberOfHealthCampsIncrease(100); // Pass the upper bound for health camps
    animateNumberOfOrganizationsIncrease(20); // Pass the upper bound for organizations
  }, []);

  if (goToClassify) {
    return <Navigate to="/Classify" />;
  }

  if (goToContact) {
    return <Navigate to="/ContactUs" />;
  }

  return (
    <>
      <div className='aboutdisplay'>
        <div className='aboutContent'>
          <span className='aboutApp'>Cervix Type Classification</span>
          <span>The friend of VIA</span>
          <button onClick={() => setGoToClassify(true)} id="classifyButton">Let's go! </button>
        </div>
        <img src={illustration} alt="illustration of woman" />
      </div>

      {/* Render the animated numbers */}
      <div className="datarepresentation">
        <div className='data'>
          {numberOfTests >= 129 ? '129+' : numberOfTests} <br /> <span>Number of Tests</span>
        </div>
        <div className='data'>
         {numberOfDeaths >= 50 ? '1493+' : numberOfDeaths} <br />  <span>Number of Deaths </span> 
        </div>
        <div className='data'>{numberOfHealthCamps >= 100 ? '100+' : numberOfHealthCamps} <br /> 
        <span>Number of Health Camps</span> 
        </div>
        <div className='data'>
         {numberOfOrganizations >= 20 ? '20+' : numberOfOrganizations} <br />  <span>Number of Organizations</span>
        </div>
      </div>
    </>
  );
}