"use client"

import { useState } from 'react';

import { NextPage } from 'next';

const NavBar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#7E7DFF] fixed w-full top-0 left-0 z-[1000]">
      <div className="flex items-center justify-between h-[5.625rem] px-4 sm:px-8">
        {/* Logo */}
        <a href="/">
          <img
            src="/logonavigation.svg"
            alt="logo of Belco"
            className=" flex items-start cursor-pointer"
          />
        </a>

        {/* Hamburger button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 text-[#05046A]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-10">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 pb-6 bg-[#7E7DFF]">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <a href="/programs" className="nav-link">Programs</a>
    <a href="/partners" className="nav-link">Partners</a>
    <a href="/blog" className="nav-link">Blog</a>
    <a href="/#description" className="nav-link">About</a>
    <a href="/#contact" className="nav-link">Contact</a>
    <a href="#account_logo">
      <img src="/account_icon.svg" alt="login icon" className="h-6" />
    </a>
  </>
);

export default NavBar;
