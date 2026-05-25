"use client";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="w-full bg-[#f9f7f2] py-24 px-6">
      <div className="max-w-[1240px] mx-auto">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Book Online
        </p>

        <h2
          className="text-[#2d2d2d] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Ready to Begin Your Healing Journey?
        </h2>
        <div className="w-16 h-[2px] bg-[#b8a94a] mb-6" />

        <p
          className="text-[#6b6b6b] text-base max-w-xl mb-14"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Book a free 30-minute consultation with Andrea and take the first
          step toward balance, vitality, and lasting wellness.
        </p>

        {/* Calendly inline widget */}
        <div className="rounded-2xl overflow-hidden border border-[#e8e4db] shadow-sm bg-white">
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/andrea-radiantrootsvitality/30min?hide_gdpr_banner=1&primary_color=FB7250"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>

        {/* Disclaimer */}
        <p
          className="mt-8 text-[11px] text-[#9b9b9b] leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Disclaimer: These statements have not been evaluated by the Food and
          Drug Administration. Products and information provided are not
          intended to diagnose, treat, cure, or prevent any disease or to
          replace your physician. Consult your physician before making any
          changes to your health care. Results may vary from person to person.
          © Radiant Roots Vitality, all rights reserved.
        </p>

      </div>
    </section>
  );
};

export default Contact;