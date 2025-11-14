import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-950 to-sky-900 text-white">
      {/* ===== Top Bar (Brand + Social Icons) ===== */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 border-b border-sky-800">
        <h3 className="font-bold text-lg">StateTech Inc.</h3>

        <div className="flex gap-5 mt-4 md:mt-0 text-gray-300">
          <FaInstagram className="hover:text-sky-400 cursor-pointer transition" />
          <FaFacebookF className="hover:text-sky-400 cursor-pointer transition" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
          <FaGithub className="hover:text-sky-400 cursor-pointer transition" />
        </div>
      </div>

      {/* ===== Main Footer Links ===== */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-3 text-sky-300">Solutions</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-sky-400 cursor-pointer">Business Management Systems</li>
            <li className="hover:text-sky-400 cursor-pointer">Automation Tools</li>
            <li className="hover:text-sky-400 cursor-pointer">Web Development</li>
            <li className="hover:text-sky-400 cursor-pointer">Analytics & AI</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3 text-sky-300">Resources</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-sky-400 cursor-pointer">Product Support</li>
            <li className="hover:text-sky-400 cursor-pointer">Request Demo</li>
            <li className="hover:text-sky-400 cursor-pointer">Library</li>
            <li className="hover:text-sky-400 cursor-pointer">PeoplePower Blog</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3 text-sky-300">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-sky-400 cursor-pointer">About Us</li>
            <li className="hover:text-sky-400 cursor-pointer">Careers</li>
            <li className="hover:text-sky-400 cursor-pointer">Contact</li>
            <li className="hover:text-sky-400 cursor-pointer">Investors</li>
          </ul>
        </div>

        {/* Favourite Things */}
        <div>
          <h4 className="font-semibold mb-3 text-sky-300">Favourite Things</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-sky-400 cursor-pointer">For Enterprise</li>
            <li className="hover:text-sky-400 cursor-pointer">For Startups</li>
            <li className="hover:text-sky-400 cursor-pointer">For Benchmark</li>
            <li className="hover:text-sky-400 cursor-pointer">For Small Business</li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Strip ===== */}
      <div className="bg-sky-900 text-center text-gray-300 text-sm py-4 border-t border-sky-800">
        © StateTech Inc. 2025 — All Rights Reserved
      </div>
    </footer>
  );
}

