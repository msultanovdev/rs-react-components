import ReactDOM from "react-dom/client";
import "./index.css";
import { AppWithRouter } from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>
);
