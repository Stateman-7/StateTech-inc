import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import datab from "/datab.jpg";
import analytics from "/analytics.jpg";
import ai from "/ai.jpg";
import auto from "/auto.jpg";
import mgs from "/mgs.jpg";
import ecom from "/ecom.jpg";
import cloud from "/cloud.jpg";

export default function Showcase() {
  const solutions = [
    {
      title: "Company Database",
      img: datab,
    },
    {
      title: "Management Systems",
      img: mgs,
    },
    {
      title: "Analytics Dashboard",
      img: analytics,
    },
    {
      title: "E-Commerce Platforms",
      img: ecom,
    },
    {
      title: "Automation Tools",
      img: auto,
    },
    {
      title: "Cloud Integration",
      img: cloud,
    },
    {
      title: "AI-Powered Insights",
      img: ai,
    },
  ];

  return (
    <section className="bg-sky-950 text-white py-24 relative overflow-hidden">
      {/* subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-sky-950 to-black/90"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-10">
        {/* ===== Left Text Section ===== */}
        <motion.div
          className="lg:w-1/3 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Smart <br /> Business Solutions
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg max-w-xs leading-relaxed">
            Discover our enterprise-grade digital systems built to empower
            growth, streamline workflows, and deliver measurable results.
          </p>

          <a
            href="#"
            className="inline-flex items-center font-sans text-sky-400 font-medium hover:underline"
          >
            Explore More <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>

        {/* ===== Scrollable Carousel Section ===== */}
        <motion.div
          className="lg:w-2/3 w-full overflow-x-auto flex gap-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className="snap-center flex-shrink-0 w-72 md:w-80 relative overflow-hidden rounded-2xl shadow-lg border border-sky-800/40 bg-sky-900/40 backdrop-blur-sm"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-sky-900/20 to-transparent"></div>

              {/* Title */}
              <h3 className="absolute bottom-4 left-4 font-heading text-lg font-semibold text-white bg-sky-900/60 px-3 py-1 rounded-full shadow-md">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

