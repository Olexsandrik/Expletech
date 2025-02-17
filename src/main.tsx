import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardDetails } from "./components/CardDetails/index.js";
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
