import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SearchBar />
        <Main />
      </div>
    );
  }
}

export default App;
