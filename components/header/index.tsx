"use client";

import { Button } from "@/common/button";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav dir="ltr" className="bg-white shadow-md relative">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <Link href="/" className="flex">
              <img src="/images/logo.png" alt="Logo" className="h-9 w-9 mr-2" />
              <span className="text-xl font-bold self-end pr-2">Blog</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 items-baseline pl-8 pt-3">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              About
            </a>
            <a
              href="#news"
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              News
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-500 pr-10 font-semibold"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden md:flex space-x-2 items-baseline">
          <Link href="./create">
            <Button
              variant="secondary"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              New Article
            </Button>
          </Link>
          <Button
            variant="primary"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up / Login
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="fixed left-0 top-0 w-52 h-full bg-white shadow-md p-4">
          <button
            onClick={closeMenu}
            className="mb-6 text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <a href="/" className="block text-gray-700 hover:text-blue-500 mb-4">
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-blue-500 mb-4"
          >
            About
          </a>
          <a
            href="#news"
            className="block text-gray-700 hover:text-blue-500 mb-4"
          >
            News
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-blue-500 mb-4"
          >
            Contact
          </a>
          <a
            href="#login"
            className="block text-gray-700 hover:text-blue-500 mb-4"
          >
            Login / Sign Up
          </a>
          <a
            href="/create"
            className="block text-gray-700 hover:text-blue-500 font-semibold"
          >
            New Article
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
