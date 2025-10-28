import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
 import Landing from "./pages/landing"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Room from "./components/Room";
import Events from "./components/Events";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/" element={<Landing />} />
 
        <Route path="/home" element={<Home />} />

        
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/room" element={<Room />} />
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "100px", color: "#fff", background: "#000" }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you’re looking for doesn’t exist.</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
