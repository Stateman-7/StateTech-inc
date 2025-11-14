import React from "react";
import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <section
      id="about"
      className="relative pt-32 md:pt-40 pb-24 bg-gradient-to-b from-sky-950 to-sky-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
        {/* ===== Image Section (Animated Left Slide) ===== */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:-ml-16"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 1, 0.5, 1],
          }}
          
        >
          <div className="overflow-hidden shadow-2xl border border-sky-800/40">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration at StateTech Inc."
              className="object-cover"
              style={{ width: "560px", height: "320px" }}
            />
          </div>
        </motion.div>

        {/* ===== Content Section (Animated Right Slide) ===== */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 lg:pl-6 xl:pl-10"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.2,
          }}
          
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We Build Digital Solutions <br />
            That Elevate Your <span className="text-sky-400">Grind</span>
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed">
            <span className="font-semibold text-white">StateTech Inc.</span> is a
            full-stack technology company offering intelligent software systems
            for business management, analytics, and automation.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1.5">✔</span>
              <div>
                <strong className="text-white">Software Development</strong>
                <p>
                  Scalable, high-performance applications built for your unique
                  business needs.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1.5">✔</span>
              <div>
                <strong className="text-white">
                  Valuation & Systems Integration
                </strong>
                <p>
                  We design connected systems that integrate your business tools,
                  improve workflow efficiency, and maximize productivity.
                </p>
              </div>
            </li>
          </ul>

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
