import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Set HTML theme before render to prevent flicker
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add("dark");
  document.body.classList.add("bg-gray-950");
  document.body.classList.remove("bg-gray-50");
} else {
  document.documentElement.classList.remove("dark");
  document.body.classList.add("bg-gray-50");
  document.body.classList.remove("bg-gray-950");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
