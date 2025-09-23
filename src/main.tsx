import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";            // <- IMPORTANTE
import App from "./App";         // seu componente do canvas

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  