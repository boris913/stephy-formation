import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const steps = ['Panier', 'Livraison', 'Paiement', 'Confirmation'];

const Stepper = ({ currentStep = 1 }) => {
  return (
    <nav className="max-w-2xl mx-auto px-4">
      <ol className="flex justify-between">
        {steps.map((step, index) => (
          <li 
            key={step}
            className="flex flex-col items-center relative flex-1"
          >
            <div className={`h-1 w-full absolute top-4 left-1/2 -z-10 ${
              index < currentStep - 1 ? 'bg-blue-600' : 'bg-gray-200'
            }`} />
            
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-400'
            }`}>
              {index < currentStep - 1 ? (
                <CheckCircleIcon className="h-5 w-5" />
              ) : (
                index + 1
              )}
            </div>
            
            <span className={`mt-2 text-sm ${
              index < currentStep 
                ? 'text-blue-600 font-medium' 
                : 'text-gray-500'
            }`}>
              {step}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Stepper;