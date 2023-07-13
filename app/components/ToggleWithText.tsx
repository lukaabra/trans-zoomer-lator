'use client';

import { Dispatch, SetStateAction, useState } from 'react';

const ToggleWithText = ({
  isBoomerTalk,
  setIsBoomerTalk,
}: {
  isBoomerTalk: boolean;
  setIsBoomerTalk: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleToggle = () => {
    setIsBoomerTalk(!isBoomerTalk);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
      <div className="pl-60 flex items-center">
        <button
          className={`w-12 h-6 rounded-full ${
            isBoomerTalk ? 'bg-green-500' : 'bg-gray-500'
          } transition-colors duration-300 shadow`}
          onClick={handleToggle}
        >
          <span
            className={`block w-4 h-4 rounded-full ${
              isBoomerTalk ? 'translate-x-6' : 'translate-x-0'
            } bg-white shadow ml-1 transition-transform duration-300`}
          ></span>
        </button>

        <p className="px-3 text-gray-500">
          switch to {isBoomerTalk ? 'zoomer' : 'boomer'} talk
        </p>
      </div>
    </div>
  );
};

export default ToggleWithText;
