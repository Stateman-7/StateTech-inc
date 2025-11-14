import React from "react";
import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative pt-32 md:pt-40 pb-24 bg-gradient-to-b from-sky-950 to-sky-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* ===== Image Section (Animated Right Slide) ===== */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:-mr-16"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 1, 0.5, 1],
          }}
          
        >
          <div className="overflow-hidden rounded-2xl border-[2px] border-sky-800/50 shadow-2xl hover:shadow-sky-900/40 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80
"
                alt="Enterprise-grade software development"
                className="object-cover rounded-3xl"
                style={{ width: "560px", height: "320px" }}
              />
            </div>

        </motion.div>

        {/* ===== Content Section (Animated Left Slide) ===== */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 lg:pr-6 xl:pr-10"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.2,
          }}
          
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Full-Stack Partner <br />
            Your Business Can <span className="text-sky-400">Rely On</span>
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
            <span className="font-semibold text-white">StateTech Inc.</span> provides 
            enterprise-grade web and software development solutions designed to 
            help organizations scale, automate, and deliver exceptional digital 
            experiences.
          </p>

          <motion.button
            className="mt-6 bg-white text-sky-700 font-bold py-3 px-10 rounded-full hover:bg-sky-100 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* ===== Accent Divider ===== */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/70"></div>
    </section>
  );
}
