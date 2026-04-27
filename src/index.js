import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
