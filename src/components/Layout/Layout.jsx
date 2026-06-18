// src/components/Layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css"; // optional (for custom styling)

const Layout = () => {
  return (
    <div className="layout">
      {/* Navbar stays at top */}
      <Navbar />

      {/* Page content renders here */}
      <main className="layout-content">
        <Outlet />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;

