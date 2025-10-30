import React from 'react';

interface ProcessCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ stepNumber, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-500 rounded-full">
        <span className="text-white text-xl font-bold">{stepNumber}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">{description}</p>
    </div>
  );
};

export default ProcessCard;
