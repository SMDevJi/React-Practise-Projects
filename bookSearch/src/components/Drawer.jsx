import React, { useState } from 'react';
import DropOn from '../assets/dropdown-on.svg'; // Your SVG icon
import { Link } from 'react-router-dom';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* SVG Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Drawer' : 'Open Drawer'}
        className="fixed top-4 right-4 z-50 p-2"
      >
        <img
          src={DropOn}
          alt="Toggle Drawer"
          className={`cursor-pointer h-9 w-9 transition duration-300 ${isOpen ? 'filter invert' : ''
            }`}
        />
      </button>

      {/* Slide-in Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="ml-3 p-3 mt-20 font-medium text-xl">
          <Link to="/">HOME</Link>
        </div>
        <div className="ml-3 p-3 font-medium text-xl">
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
    </div>
  );
}
