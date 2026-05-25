"use client";
import Image from "next/image";
import React from "react";

/**
 * VARIANT B — Centered Logo
 * LogoBanner.png sits centered on the cream background.
 * Tagline + CTA below, with gold decorative accents.
 */
const Main = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-[#f9f7f2] pt-20 px-6"
    >
      <div className="flex flex-col items-center text-center max-w-2xl w-full gap-8 py-16">

        {/* Centered logo */}
        <div className="w-full max-w-sm sm:max-w-md">
          <Image
            src="/LogoBanner.png"
            alt="Radiant Roots Vitality"
            width={600}
            height={200}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-[#b8a94a]" />
          <span
            className="text-[#b8a94a] text-[10px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Boca Raton, FL
          </span>
          <div className="flex-1 h-px bg-[#b8a94a]" />
        </div>

        {/* Tagline */}
        <h1
          className="text-[#2d2d2d] leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Rooted in Ancient Wisdom.{" "}
          <em className="text-[#FB7250] not-italic">Radiant</em> in Modern Life.
        </h1>

        <p
          className="text-[#6b6b6b] text-base sm:text-lg max-w-lg"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Personalized acupuncture &amp; holistic wellness with{" "}
          <span className="text-[#2d2d2d] font-medium">Andrea Louden, AP, L.Ac</span>
        </p>

        {/* CTA */}
        <a
          href="https://calendly.com/andrea-radiantrootsvitality/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block px-10 py-4 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 hover:shadow-lg shadow-none"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Book a Free Consultation
        </a>

        {/* Scroll nudge */}
        <div className="mt-4 flex flex-col items-center gap-2 opacity-50">
          <span
            className="text-[#6b6b6b] text-[10px] uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Explore
          </span>
          <div className="w-px h-10 bg-[#b8a94a]" />
        </div>
      </div>
    </section>
  );
};

export default Main;