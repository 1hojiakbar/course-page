import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
