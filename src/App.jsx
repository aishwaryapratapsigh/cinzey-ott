// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Price from "./pages/Price/Price";
import Player from "./pages/Player/Player";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      {/* All normal pages share Layout (Navbar + Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/price" element={<Price />} />
      </Route>

      {/* Player page (fullscreen, no Layout) */}
      <Route path="/player/:id" element={<Player />} />

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <h2
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            404 - Page Not Found
          </h2>
        }
      />
    </Routes>
  );
};

export default App;



