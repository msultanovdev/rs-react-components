import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState(
    localStorage.getItem("inputVal") || ""
  );
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    return localStorage.setItem("inputVal", inputRef.current!.value || "");
  }, [inputVal]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.currentTarget.value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <input
          ref={inputRef}
          onInput={handleInput}
          value={inputVal}
          className="search-input"
          type="text"
          placeholder="Search..."
          data-testid="search-input"
        />
        <button type="submit" className="btn" data-testid="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
