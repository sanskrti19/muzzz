import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />   {/* ✅ Normal navbar */}

      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}
