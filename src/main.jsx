import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreJakarta from "./Pages/ExploreJakarta.jsx";
import DestinationDetail from "./Pages/DestinationDetail.jsx";
import AboutDevs from "./Pages/AboutDevs.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/jelajahi" element={<ExploreJakarta />} />
        <Route
          path="/jelajahi/:namaDestinasi"
          element={<DestinationDetail />}
        />
        <Route path="/about-devs" element={<AboutDevs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
