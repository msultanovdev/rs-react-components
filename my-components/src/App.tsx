import React from 'react';
import './App.css';

import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LocationType, NavigateType } from './types';

class App extends React.Component<any> {
  render() {
    return(
      <div>
        <Header navigate={this.props.navigate} location={this.props.location} />
        <Routes>
          <Route path='home' element={<Main />}></Route>
        </Routes>
      </div>
    );
  }
}

export function AppWithRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  return(<App navigate={navigate} location={location.pathname} />)
}

export default App;
