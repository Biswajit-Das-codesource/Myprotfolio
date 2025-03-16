import React, { useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-20 md:justify-around md:h-30 w-full bg-zinc-950 flex justify-between items-center px-6 md:px-10">
      {/* Logo / Icon */}
      <WiDaySunny className="text-cyan-400 text-4xl cursor-pointer border rounded-xl p-1" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white gap-6 font-medium cursor-pointer">
        <li className="hover:text-cyan-300">Home</li>
        <li className="hover:text-cyan-300">Projects</li>
        <li className="hover:text-cyan-300">Resources</li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {menuOpen ? (
          <FaTimes
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-zinc-900 flex flex-col items-center gap-4 py-4 text-white font-medium md:hidden">
          <li className="hover:text-cyan-300" onClick={() => setMenuOpen(false)}>Home</li>
          <li className="hover:text-cyan-300" onClick={() => setMenuOpen(false)}>Projects</li>
          <li className="hover:text-cyan-300" onClick={() => setMenuOpen(false)}>Resources</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
