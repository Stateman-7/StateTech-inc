import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import swebap from "/swebap.jpg";
import scloud from "/scloud.jpg";
import sai from "/sai.jpg";
import sdata from "/sdata.jpg";
import sconso from "/sconso.jpg";

export default function Services() {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Web App Development",
      desc: "Modern, scalable, and optimized web platforms for your business.",
      img: swebap,
    },
    {
      title: "Cloud-Based Business Systems",
      desc: "Empowering organizations with cloud solutions that scale effortlessly.",
      img: scloud,
    },
    {
      title: "Data Analytics & AI Solutions",
      desc: "Extract actionable insights and boost decision-making with smart AI tools.",
      img: sdata,
    },
    {
      title: "IT Consulting & Support",
      desc: "Reliable tech advisory and support that keeps your business running smoothly.",
      img: sconso,
    },
    {
      title: "Automation Systems",
      desc: "Automate workflows with intelligent tools that boost productivity and performance.",
      img: sai,
    },
  ];

  const cardsPerPage = 2; // For dot calculation
  const totalPages = Math.ceil(services.length / cardsPerPage);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Track scroll position for active dot
  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      if (container) {
        const newIndex = Math.round(
          container.scrollLeft / container.clientWidth
        );
        setCurrentIndex(newIndex);
      }
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  // Jump to specific slide when dot clicked
  const goToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-sky-950 via-sky-900 to-sky-950 text-white overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Core <span className="text-sky-400">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We deliver a complete suite of digital solutions tailored to meet
            modern business challenges.
          </p>
        </motion.div>

        {/* ===== Carousel Container ===== */}
        <div className="relative mt-16">
          {/* Scroll Buttons (fade in on hover) */}
          <motion.button
            onClick={() => scroll("left")}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-sky-900/60 hover:bg-sky-800/80 p-3 rounded-full z-20 shadow-lg hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6 text-sky-200" />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-sky-900/60 hover:bg-sky-800/80 p-3 rounded-full z-20 shadow-lg hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-sky-200" />
          </motion.button>

          {/* Scrollable Wrapper */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-2 md:grid md:grid-cols-4 md:gap-10 md:overflow-visible"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="snap-center flex-shrink-0 w-72 md:w-auto bg-sky-900/40 border border-sky-800/40 rounded-2xl shadow-lg hover:shadow-sky-900/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ===== Dot Indicators ===== */}
        <div className="flex justify-center mt-10 space-x-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "bg-sky-400 scale-125"
                  : "bg-sky-700 hover:bg-sky-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Bottom Accent Line ===== */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/70"></div>
    </section>
  );
}
