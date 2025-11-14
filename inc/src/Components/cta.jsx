import React from "react";
import { motion } from "framer-motion";
import lampImage from "/tech-lamp.jpg"; 

export default function Contacts() {
  return (
    <section id="contacts"
    className="relative bg-gradient-to-r from-sky-950 to-sky-900 text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* ===== Responsive Image on the Left ===== */}
        <motion.div
          className="flex-shrink-0 w-full md:w-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={lampImage}
            alt="Tech Lamp"
            className="w-full max-w-[380px] h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* ===== Text Content ===== */}
        <div className="flex-1 text-center md:text-left flex flex-col gap-4 sm:gap-6">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Stay Ahead <br />
            with <span className="text-sky-400">Innovation</span>
          </motion.h1>

          <motion.p
            className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Join our newsletter for the latest in tech insights, product updates, and industry trends.
          </motion.p>

          <motion.form
            className="flex w-full max-w-md mt-4 mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-full text-sky-950 font-medium focus:outline-none bg-white shadow-md"
            />
            <button
              type="submit"
              className="bg-sky-400 text-sky-950 font-bold px-6 rounded-r-full hover:bg-sky-300 transition duration-300"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
