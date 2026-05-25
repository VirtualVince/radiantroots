"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "About",        href: "/#about" },
  { label: "Services",     href: "/#services" },
  { label: "Meet Andrea",  href: "/#founder" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed w-full z-[100] transition-all duration-300 bg-[#f9f7f2]"
      style={{
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.07)" : "none",
        borderBottom: scrolled ? "none" : "1px solid #e8e4db",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 2xl:px-0 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/NavLogo.png"
            alt="Radiant Roots Vitality"
            width={180}
            height={52}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] hover:text-[#FB7250] transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FB7250] group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}

          {/* CTA */}
          <li>
            <a
              href="https://calendly.com/andrea-radiantrootsvitality/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-[#FB7250] text-white hover:bg-[#e85f3e] transition-colors duration-200 shadow-none"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#6b6b6b] hover:text-[#FB7250] transition-colors duration-200 bg-transparent shadow-none rounded-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden w-full bg-[#f9f7f2] border-t border-[#e8e4db]"
          style={{ boxShadow: "0 8px 16px rgba(0,0,0,0.06)" }}
        >
          <ul className="flex flex-col px-6 py-5 gap-5">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] hover:text-[#FB7250] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://calendly.com/andrea-radiantrootsvitality/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-[#FB7250] text-white hover:bg-[#e85f3e] transition-colors duration-200 shadow-none"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;