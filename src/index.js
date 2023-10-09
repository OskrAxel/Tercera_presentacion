import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AppAdm from "./AppAdm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppAdm />
  </React.StrictMode>
);
