import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    inputVal: localStorage.getItem("inputVal") || "",
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
    this.setState({ inputVal: e.currentTarget.value });
    localStorage.setItem("inputVal", e.currentTarget.value);
  };

  render(): React.ReactNode {
    const { inputVal } = this.state;
    return (
      <div className="search-bar">
        <div className="search-bar-container">
          <input
            onInput={this.handleInput}
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
  }
}

export default SearchBar;
