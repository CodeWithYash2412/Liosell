"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="logo.png"
            className="h-[4rem]"
            alt="Flowbite Logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 w-10 h-10 rounded-lg text-gray-500 hover:bg-gray-100 focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-label="Toggle Menu"
        >
          <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { href: "/", label: "Home" },
              { href: "/aboutus", label: "About Us" },
              { href: "/products", label: "Products" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-[8px] py-2  px-3  md:border-0  dark:text-white dark:hover:bg-gray-700 ${
                    pathname === href ? "hover:bg-[#273992] hover:text-white dark:hover:text-white dark:hover:bg-[#273992] bg-[#273992] text-white" : "text-gray-900 hover:bg-gray-100"
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
