'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close the mobile menu after clicking a link
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sticky top-0 z-20 shadow-lg backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight transition-all duration-300 hover:text-yellow-400">
          EduThrive
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#home"
            className="relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 group"
            onClick={(e) => handleSmoothScroll(e, 'home')}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 group"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#services"
            className="relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 group"
            onClick={(e) => handleSmoothScroll(e, 'services')}
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#colleges"
            className="relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 group"
            onClick={(e) => handleSmoothScroll(e, 'colleges')}
          >
            Colleges
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#courses"
            className="relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 group"
            onClick={(e) => handleSmoothScroll(e, 'courses')}
          >
            Courses
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 group"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none transition-transform duration-300"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-blue-900 bg-opacity-95 backdrop-blur-md z-10 flex flex-col items-center pt-20 transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 focus:outline-none"
            aria-label="Close Menu"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-8">
            <Link
              href="#home"
              className="text-2xl font-medium text-white hover:text-yellow-400 transition-all duration-300 py-3 px-8 rounded-lg hover:bg-blue-800"
              onClick={(e) => handleSmoothScroll(e, 'home')}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-2xl font-medium text-white hover:text-yellow-400 transition-all duration-300 py-3 px-8 rounded-lg hover:bg-blue-800"
              onClick={(e) => handleSmoothScroll(e, 'about')}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-2xl font-medium text-white hover:text-yellow-400 transition-all duration-300 py-3 px-8 rounded-lg hover:bg-blue-800"
              onClick={(e) => handleSmoothScroll(e, 'services')}
            >
              Services
            </Link>
            <Link
              href="#colleges"
              className="text-2xl font-medium text-white hover:text-yellow-400 transition-all duration-300 py-3 px-8 rounded-lg hover:bg-blue-800"
              onClick={(e) => handleSmoothScroll(e, 'colleges')}
            >
              Colleges
            </Link>
            <Link
              href="#courses"
              className="text-2xl font-medium text-white hover:text-yellow-400 transition-all duration-300 py-3 px-8 rounded-lg hover:bg-blue-800"
              onClick={(e) => handleSmoothScroll(e, 'courses')}
            >
              Courses
            </Link>
            <Link
              href="#contact"
              className="text-2xl font-medium text-white hover:text-yellow-400 transition-all duration-300 py-3 px-8 rounded-lg hover:bg-blue-800"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}