import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sarak from "/sarak.jpg"
const testimonials = [
  {
    id: 1,
    name: "Mark N.",
    role: "CEO, Home Interiors Suppliers",
    text: "StateTech Inc. delivered exactly what we needed — fast, reliable, and professional service!",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    
  },
  {
    id: 2,
    name: "Sarah K.",
    role: "CTO, Visionary Brands",
    text: "They transformed our ideas into a beautiful and functional system that works perfectly for our clients.",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    image: sarak,
  },
  {
    id: 3,
    name: "David M.",
    role: "Founder, TechEdge Africa",
    text: "The team at StateTech Inc. exceeded expectations — highly skilled, communicative, and efficient.",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-sky-950 to-sky-900 text-white overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* ==== Left Side: Text ==== */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What People Are Saying About Us
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full border-2 border-sky-600/50"
                />
                <div>
                  <h4 className="text-xl font-semibold text-sky-400">
                    {current.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{current.role}</p>
                </div>
              </div>

              <p className="text-gray-200 text-lg italic leading-relaxed">
                “{current.text}”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ==== Chevron Buttons ==== */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-sky-800/50 hover:bg-sky-700 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-sky-800/50 hover:bg-sky-700 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ==== Right Side: Image ==== */}
        <motion.div
          key={current.image}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="w-full md:w-1/2"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={current.image}
              alt="Testimonial visual"
              className="w-full h-[340px] object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

