import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-4">
    <div className="w-16 h-16 border-8 border-t-8 border-gray-200 border-t-blue-500 border-solid rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;
