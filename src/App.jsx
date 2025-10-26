import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Room from "./components/Room";
 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/room" element={<Room />} />
        <Route path="/events" element={<Events/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
