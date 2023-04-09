import { useContext, useLayoutEffect, useRef, useState } from "react";
import "./SearchBar.css";
import { MainContext } from "../../mainContext";
import axios from "axios";

const SearchBar = () => {
  const { setItems } = useContext(MainContext);
  const [inputVal, setInputVal] = useState(
    localStorage.getItem("inputVal") || ""
  );
  const inputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    const cleanUp = () => {
      localStorage.setItem("inputVal", inputRef.current!.value || "");
    };
    return () => {
      cleanUp();
    };
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.currentTarget.value);
  };

  const searchByName = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${inputVal}`)
      .then((res) => {
        setItems(res.data.results);
      })
      .catch(() => setItems([]));
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
        <button
          onClick={searchByName}
          type="submit"
          className="btn"
          data-testid="search-button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
