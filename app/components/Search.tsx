'use client';

import { Dispatch, FormEvent, SetStateAction } from 'react';
import { translateQuery } from '../../src/openAi';

const Search = ({
  setTranslateResult,
}: {
  setTranslateResult: Dispatch<SetStateAction<string>>;
}) => {
  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    const searchQuery = event.target.searchBar.value;

    // TODO: Debug why long responses are cut off
    // Can you please write a 100 word short essay about why climate change matters?
    const translation = await translateQuery(searchQuery);

    console.log(translation, 'translation');

    setTranslateResult(translation);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6">
      <div className="px-60">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            id="searchBar"
            name="searchBar"
            required
            placeholder="start spitting facts..."
            className="px-3 py-2 rounded-lg w-full shadow-sm focus:outline-none focus:shadow-lg transition-shadow duration-300 overscroll-auto"
          ></input>

          <div className="my-5 mx-auto">
            <button className="flex mx-auto">
              <img
                src="search-icon.png"
                alt="Search icon"
                className="object-contain h-8 w-8 opacity-40 transition-transform duration-300 transform hover:scale-110 active:scale-90"
              ></img>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
