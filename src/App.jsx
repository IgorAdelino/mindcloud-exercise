/* eslint-disable react/prop-types */
import  { useState } from 'react';
import Step from './components/Step.jsx';

import { MdAccountCircle } from "react-icons/md";
import { FaShareFromSquare } from "react-icons/fa6";



const App = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    { stepNumber: 11, name: 'Merge Employees with Demographics', list: 100, icon: <FaShareFromSquare className="mr-2 text-3xl" />  },
    { stepNumber: 12, name: 'Update User', icon: <MdAccountCircle className="text-orange-500 mr-2 text-3xl"/> }
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      {steps.map((step, index) => (
        <Step
          icon={step.icon}
          key={index}
          stepNumber={step.stepNumber}
          name={step.name}
          hasError={step.hasError}
          isActive={activeStep === index}
          onClick={() => setActiveStep(index)}
          list={step.list}
        />
      ))}
    </div>
  );
};

export default App;