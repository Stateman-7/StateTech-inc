import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";

export default function HeroWithNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "7+", label: "Years of Innovation" },
    { number: "3", label: "Offices Nationwide" },
    { number: "120+", label: "Successful Projects" },
    { number: "80K+", label: "Users Empowered" },
  ];

  // 🧭 Handle Get Started button
  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-sky-950/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 transition-all duration-500">
            <motion.img
              src={logo}
              alt="ST Inc. Logo"
              className="h-25 w-auto transition-all duration-500"
              animate={{
                height: scrolled ? "32px" : "40px",
                opacity: scrolled ? 0.95 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.h1
              className="text-2xl font-extrabold text-white origin-left"
              animate={{
                opacity: scrolled ? 0 : 1,
                x: scrolled ? -10 : 0,
                scale: scrolled ? 0.9 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              StateTech <span className="text-sky-400">Inc.</span>
            </motion.h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-gray-200 font-medium">
            {["Home", "About", "Services", "Contacts"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-sky-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-sky-950/95 backdrop-blur-md px-6 py-6 space-y-4 text-center text-gray-200">
            {["Home", "About", "Services", "Contacts"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-lg hover:text-sky-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <div
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1374&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-sky-950/70"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            Empowering <span className="text-sky-400">Ideas</span> Through Code
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-200">
            We craft innovative web and software solutions that help brands
            grow, automate, and lead in the digital era — fast, reliable, and
            made to impress.
          </p>

          {/* 🟦 Get Started Button */}
          <motion.button
            onClick={handleGetStarted}
            className="bg-white text-sky-600 font-bold py-4 px-10 rounded-full hover:bg-sky-100 transition duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* ===== STATS BAR ===== */}
      <motion.div
        className="relative w-full flex justify-center z-20 px-4 py-10 bg-sky-950/90 backdrop-blur-lg"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl shadow-xl px-6 md:px-10 py-8 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 text-center border border-sky-800/50 divide-x divide-sky-800/50 bg-sky-950/70 backdrop-blur-md">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2 + 0.3,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-4xl font-extrabold text-white">
                {stat.number}
              </h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}



