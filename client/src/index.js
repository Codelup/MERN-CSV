import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import LearnersList from "./components/data";
import LearnerDetails from "./components/details";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learners" element={<LearnersList />} />
        <Route path="/learners/:learnerId" element={<LearnerDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
