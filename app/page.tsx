'use client';

import { useState } from 'react';
import Search from './components/Search';
import ToggleWithText from './components/ToggleWithText';
import TranslateResult from './components/TranslateResult';

export default function Home() {
  const [translateResult, setTranslateResult] = useState('');
  const [isBoomerTalk, setIsBoomerTalk] = useState(false);

  return (
    <div
      className={`relative isolate overflow-hidden ${
        translateResult ? 'py-10 sm:py-20' : 'py-20 sm:py-36'
      } transition-py duration-500`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] sm:text-6xl text-center">
          trans-zoomer-lator
        </h2>
        <div>
          <p className="mt-6 text-lg leading-8 text-gray-500 text-center">
            we legit convert real talk to boomer talk word by word, fam
          </p>
        </div>
      </div>

      <ToggleWithText
        isBoomerTalk={isBoomerTalk}
        setIsBoomerTalk={setIsBoomerTalk}
      />
      <Search
        isBoomerTalk={isBoomerTalk}
        setTranslateResult={setTranslateResult}
      />

      <TranslateResult translateResult={translateResult} />
    </div>
  );
}
