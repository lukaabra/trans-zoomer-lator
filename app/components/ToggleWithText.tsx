'use client';

import { Switch } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';

const ToggleWithText = ({
  isBoomerTalk,
  setIsBoomerTalk,
}: {
  isBoomerTalk: boolean;
  setIsBoomerTalk: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleToggle = (checked: boolean): void => {
    setIsBoomerTalk(checked);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
      <div className="pl-60 flex items-center">
        <Switch onChange={(event, checked) => handleToggle(checked)} />

        <p className="px-3 text-gray-500">
          switch to {isBoomerTalk ? 'zoomer' : 'boomer'} talk
        </p>
      </div>
    </div>
  );
};

export default ToggleWithText;
