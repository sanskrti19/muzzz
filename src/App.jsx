import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import SignupPage from "./components/Signup";
import HomePage from "./components/Home";
import Rooms from "./components/Rooms";
import Room from "./components/Room";
import SetProfile from "./components/SetProfile";
import Profile from "./components/Profile";

const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";
const isProfileComplete = () =>
  !!JSON.parse(localStorage.getItem("MUZZ_PROFILE") || "{}").displayName;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

         
        <Route
          path="/"
          element={
            isLoggedIn()
              ? isProfileComplete()
                ? <Navigate to="/home" />
                : <Navigate to="/set-profile" />
              : <Navigate to="/login" />
          }
        />

        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />

        
        <Route
          path="/set-profile"
          element={isLoggedIn() ? <SetProfile /> : <Navigate to="/login" />}
        />

       
        <Route
          path="/home"
          element={
            isLoggedIn()
              ? isProfileComplete()
                ? <HomePage />
                : <Navigate to="/set-profile" />
              : <Navigate to="/login" />
          }
        />

        
        <Route
          path="/profile"
          element={
            isLoggedIn()
              ? isProfileComplete()
                ? <Profile />
                : <Navigate to="/set-profile" />
              : <Navigate to="/login" />
          }
        />

       
        <Route
          path="/rooms"
          element={
            isLoggedIn()
              ? isProfileComplete()
                ? <Rooms />
                : <Navigate to="/set-profile" />
              : <Navigate to="/login" />
          }
        />

        
        <Route path="/room/:id" element={<Room />} />

      </Routes>
    </BrowserRouter>
  );
}
