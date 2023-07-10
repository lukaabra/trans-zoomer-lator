'use client';

import { FormEvent } from 'react';
import { translateQuery } from '../../src/openAi';

const Search = () => {
  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    console.log(event);
    const searchQuery = event.target.searchBar.value;

    await translateQuery(searchQuery);
  };

  return (
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
  );
};

export default Search;
