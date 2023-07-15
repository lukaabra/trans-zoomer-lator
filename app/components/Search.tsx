'use client';

import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { translateQuery } from '../../src/openAi';

const Search = ({
  isBoomerTalk,
  setTranslateResult,
}: {
  isBoomerTalk: boolean;
  setTranslateResult: Dispatch<SetStateAction<string>>;
}) => {
  const [stringToTranslate, setStringToTranslate] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setTranslateResult('');

    // const translation = await translateQuery(stringToTranslate, isBoomerTalk);
    const translation =
      'nah sry imma pass on that no cap, fr climate change has been such an issue for so long now and we cant help it if not everyone realizes exactly how important it is, esp ppl my age. all we can do is spread awareness and try and get others to understand why we should care about it, and if that doesnt work then its too bad. its really sad and makes me angry when all i see are ppl not taking it seriously at all. buss';

    setTranslateResult(translation);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6">
      <div className="px-60">
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="start spitting facts.."
            required={true}
            onInput={(e) => setStringToTranslate(e.target.value)}
            className="px-3 py-2 rounded-lg w-full focus:outline-none focus:shadow-lg transition-shadow duration-300 overscroll-auto"
          />

          <div className="my-5 mx-auto">
            <button className="flex mx-auto">
              <SearchOutlinedIcon className="transition-transform duration-300 transform hover:scale-110 active:scale-90" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
