"use client";
import Image from "next/image";
import React from "react";

/**
 * VARIANT A — Full-Width Banner
 * LogoBanner.png fills the entire hero width with a warm cream surround.
 * Tagline + CTA sit below in a centered column.
 */
const Main = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col bg-[#f9f7f2] pt-20">

      {/* Full-width logo banner strip */}
      <div className="w-full border-b border-[#e8e4db] bg-white">
        <Image
          src="/LogoBanner.png"
          alt="Radiant Roots Vitality"
          width={1920}
          height={380}
          className="w-full object-contain"
          priority
        />
      </div>

      {/* Hero copy */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-3xl mx-auto w-full">

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-10 w-full max-w-xs">
          <div className="flex-1 h-px bg-[#b8a94a]" />
          <span
            className="text-[#b8a94a] text-[10px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Boca Raton, FL
          </span>
          <div className="flex-1 h-px bg-[#b8a94a]" />
        </div>

        <h1
          className="text-[#2d2d2d] leading-tight mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Rooted in Ancient Wisdom.{" "}
          <em className="text-[#FB7250] not-italic">Radiant</em> in Modern Life.
        </h1>

        <p
          className="text-[#6b6b6b] text-lg mb-10 max-w-xl"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Personalized acupuncture &amp; holistic wellness with{" "}
          <span className="text-[#2d2d2d] font-medium">Andrea Louden, AP, L.Ac</span>
        </p>

        <a
          href="https://calendly.com/andrea-radiantrootsvitality/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 hover:shadow-lg shadow-none"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Main;