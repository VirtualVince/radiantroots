"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section id="newsletter" className="w-full bg-white py-24 px-6 border-t border-[#e8e4db]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Stay Connected
        </p>

        <h2
          className="text-[#2d2d2d] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Wellness Wisdom in Your Inbox
        </h2>
        <div className="w-16 h-[2px] bg-[#b8a94a] mb-6" />

        <p
          className="text-[#6b6b6b] text-base max-w-xl mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Seasonal health tips, holistic living guidance, and updates from Andrea delivered gently, never spammy.
        </p>

        {status === "success" ? (
          <p
            className="text-[#FB7250] text-xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Thank you for subscribing. Check your inbox soon.
          </p>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={status === "loading"}
                className="flex-1 min-w-0 h-[52px] px-5 rounded-full border border-[#e8e4db] bg-[#f9f7f2]
                  text-[#2d2d2d] text-sm placeholder:text-[#9b9b9b]
                  focus:outline-none focus:border-[#FB7250] transition-colors duration-200
                  disabled:opacity-60"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 h-[52px] px-8 rounded-full text-xs uppercase tracking-[0.2em]
                  hover:shadow-lg transition-all duration-300 disabled:opacity-60"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>

            {status === "error" && (
              <p
                className="mt-3 text-xs text-[#c0392b]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {errorMsg}
              </p>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default Newsletter;
