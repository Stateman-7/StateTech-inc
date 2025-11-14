import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🌐 Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

// 🏠 Landing Page Components
import HeroWithNavbar from "./Components/Hero.jsx";
import AboutCard from "./Components/about.jsx";
import Highlight from "./Components/highlights.jsx";
import Showcase from "./Components/showcase.jsx";
import Services from "./Components/services.jsx";
import Testimonials from "./Components/testimonials.jsx";
import Contacts from "./Components/cta.jsx";
import Footer from "./Components/footer.jsx";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Homepage route — your main landing site */}
        <Route
          path="/"
          element={
            <div className="font-sans text-gray-900 bg-gray-50">
              <style>{`html { scroll-behavior: smooth; }`}</style>
              <HeroWithNavbar />
              <AboutCard />
              <Showcase />
              <Highlight />
              <Services />
              <Testimonials />
              <Contacts />
              <Footer />
            </div>
          }
        />

        {/* 🔐 Auth & Dashboard routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}



