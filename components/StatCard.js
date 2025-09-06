import React from 'react';

const StatCard = ({ title, value, unit, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            {value}
            <span className="text-base font-normal text-gray-500 ml-1">{unit}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
