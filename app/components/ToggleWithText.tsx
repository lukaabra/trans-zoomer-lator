'use client';

import { useState } from 'react';

const ToggleWithText = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="pl-60 flex items-center">
      <button
        className={`w-12 h-6 rounded-full ${
          isOn ? 'bg-green-500' : 'bg-gray-500'
        } transition-colors duration-300 shadow`}
        onClick={handleToggle}
      >
        <span
          className={`block w-4 h-4 rounded-full ${
            isOn ? 'translate-x-6' : 'translate-x-0'
          } bg-white shadow ml-1 transition-transform duration-300`}
        ></span>
      </button>

      <p className="px-3 text-gray-500">switch to boomer talk</p>
    </div>
  );
};

export default ToggleWithText;
