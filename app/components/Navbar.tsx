import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex items-center gap-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-full pl-8 pr-2 py-1 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
      <Link to="/" className="relative group">
        <p className=" text-gray-800 hover:text-black transition-colors">
          Home
        </p>

        <span className="absolute bottom-0 left-0 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-0.5 rounded-full w-full bg-[#202020]" />
      </Link>

      <Link to="/about" className="relative group">
        <p className=" text-gray-800 hover:text-black transition-colors">
          About
        </p>

        <span className="absolute bottom-0 left-0 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-0.5 rounded-full w-full bg-[#202020]" />
      </Link>

      <Link to="/manage-data" className="relative group">
        <p className=" text-gray-800 hover:text-black transition-colors">
          Manage Data
        </p>

        <span className="absolute bottom-0 left-0 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center h-0.5 rounded-full w-full bg-[#202020]" />
      </Link>

      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
