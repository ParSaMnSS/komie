import React from 'react';

interface TrustPillProps {
  icon: React.ReactNode;
  number: string;
  description: string;
}

const TrustPill: React.FC<TrustPillProps> = ({ icon, number, description }) => {
  return (
    <div className="flex items-center p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
      <div className="mr-4 text-indigo-400">{icon}</div>
      <div>
        <p className="text-2xl font-bold text-white">{number}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default TrustPill;
