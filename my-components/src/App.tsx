import "./App.css";

import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import FormPage from "./pages/FormPage/FormPage";
import { MainContext } from "./mainContext";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <MainContext.Provider
      value={{
        items,
        setItems,
        isModalActive,
        setIsModalActive,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="form-page" element={<FormPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </MainContext.Provider>
  );
};

export default App;
