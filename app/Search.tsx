"use client";

import { ChangeEvent, useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const handleInput = (event: ChangeEvent) => {
    setText(event.target.value);
  };

  const handleSearch = () => {};

  return (
    <div className="px-60">
      <form>
        <input
          type="text"
          id="input"
          name="input"
          placeholder="start spitting facts..."
          onChange={handleInput}
          className="px-3 py-2 rounded-lg w-full shadow-sm focus:outline-none focus:shadow-lg transition-shadow duration-300 overscroll-auto"
        ></input>
      </form>

      <div className="my-5 mx-auto">
        <button className="flex mx-auto" onClick={handleSearch}>
          <img
            src="search-icon.png"
            alt="Search icon"
            className="object-contain h-8 w-8 opacity-40 transition-transform duration-300 transform hover:scale-110"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Search;
