'use client';

import { useState } from 'react';
import Search from './components/Search';
import ToggleWithText from './components/ToggleWithText';
import TranslateResult from './components/TranslateResult';

export default function Home() {
  const [translateResult, setTranslateResult] = useState('');

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
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

      <ToggleWithText />
      <Search setTranslateResult={setTranslateResult} />

      <TranslateResult translateResult={translateResult} />
    </div>
  );
}
