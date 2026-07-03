"use client";
import React, { useEffect } from "react";

const locations = [
  {
    name: "Boca Raton Acupuncture",
    address: "1601 Clint Moore Rd #182, Boca Raton, FL 33487",
    phone: "561-939-0430",
    email: "BocaRatonAcupuncture@gmail.com",
    mapQuery: "1601 Clint Moore Rd #182, Boca Raton, FL 33487",
    hours: ["Tue & Thu: 3–7 PM", "Sat: 9 AM–12 PM"],
  },
  {
    name: "Palm Beach Gardens",
    address: "3335 Burns Road, Second Floor, Palm Beach Gardens, FL 33410",
    phone: "561-529-5295",
    email: null,
    mapQuery: "3335 Burns Road, Palm Beach Gardens, FL 33410",
    hours: ["Mon: 12–6 PM", "Wed: 8 AM–4 PM"],
  },
];

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

        {/* ── Locations ─────────────────────────────── */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Visit Us
        </p>

        <h2
          className="text-[#2d2d2d] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Two Locations to Serve You
        </h2>
        <div className="w-16 h-[2px] bg-[#b8a94a] mb-6" />

        <p
          className="text-[#6b6b6b] text-base max-w-xl mb-12"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Andrea sees clients at two South Florida locations. Hours are flexible
          and by appointment — reach out and we&apos;ll find a time that works
          for you.
        </p>

        {/* Location cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-2xl overflow-hidden border border-[#e8e4db] bg-white shadow-sm flex flex-col"
            >
              {/* Map embed (keyless) */}
              <iframe
                title={`Map to ${loc.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  loc.mapQuery
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Details */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <h3
                  className="text-[#2d2d2d] text-xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {loc.name}
                </h3>

                <address
                  className="not-italic text-sm text-[#6b6b6b] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {loc.address}
                </address>

                <div
                  className="flex flex-col gap-1.5 text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                    className="text-[#6b6b6b] hover:text-[#FB7250] transition-colors duration-200"
                  >
                    {loc.phone}
                  </a>
                  {loc.email && (
                    <a
                      href={`mailto:${loc.email}`}
                      className="text-[#6b6b6b] hover:text-[#FB7250] transition-colors duration-200 break-all"
                    >
                      {loc.email}
                    </a>
                  )}
                </div>

                <div
                  className="flex flex-col gap-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-[#b8a94a]">
                    Hours
                  </p>
                  {loc.hours.map((h) => (
                    <p key={h} className="text-sm text-[#6b6b6b]">
                      {h}
                    </p>
                  ))}
                  <p className="text-xs text-[#9b9b9b] mt-0.5">
                    Additional times available by appointment
                  </p>
                </div>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    loc.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block self-start px-6 py-3 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 shadow-none"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Booking ───────────────────────────────── */}
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
