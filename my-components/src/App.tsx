import React from "react";
import "./App.css";

import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import {
  NavigateFunction,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import FormPage from "./pages/FormPage/FormPage";

class App extends React.Component<{
  navigate: NavigateFunction;
  location: string;
}> {
  render() {
    return (
      <div>
        <Header navigate={this.props.navigate} location={this.props.location} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="form-page" element={<FormPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}

export function AppWithRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  return <App navigate={navigate} location={location.pathname} />;
}

export default App;
