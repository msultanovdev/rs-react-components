import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import Main from './pages/Main/Main';

class App extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
        <Main />
      </div>
    );
  }
}

export default App;
