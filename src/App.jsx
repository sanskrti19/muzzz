import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import SignupPage from "./components/Signup";
import HomePage from "./components/Home";
import Rooms from "./components/Rooms";
import Room from "./components/Room";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import SetProfile from "./components/SetProfile";
import Profile from "./components/Profile";
import Layout from "./components/Layout";

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
        <Route path="/landing" element={<Landing />} />


      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/set-profile" element={<SetProfile />} />

         
        <Route element={<Layout />}>

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

          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/profile"
            element={
              isLoggedIn()
                ? <Profile />
                : <Navigate to="/login" />
            }
          />

          <Route
            path="/rooms"
            element={
              isLoggedIn()
                ? <Rooms />
                : <Navigate to="/login" />
            }
          />

          <Route
            path="/room/:id"
            element={
              isLoggedIn()
                ? <Room />
                : <Navigate to="/login" />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
