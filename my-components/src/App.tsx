import React from 'react';
import './App.css';

import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom';

class App extends React.Component<{ navigate: NavigateFunction; }> {
  render() {
    return(
      <div>
        <Header navigate={this.props.navigate} />
        <Routes>
          <Route path='home' element={<Main />}></Route>
        </Routes>
      </div>
    );
  }
}

export function AppWithRouter() {
  const navigate = useNavigate();
  return(<App navigate={navigate}></App>)
}

export default App;
