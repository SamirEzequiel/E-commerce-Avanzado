import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Inicializar modo oscuro desde localStorage
const initDarkMode = () => {
  const stored = localStorage.getItem("techstore-storage");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.state?.darkMode) {
        document.documentElement.classList.add("dark");
      }
    } catch (e) {
      // Ignorar errores de parsing
    }
  }
};

initDarkMode();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
