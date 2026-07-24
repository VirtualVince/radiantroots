import React from "react";

// Andrea's Fullscript dispensary (Canadian store).
const FULLSCRIPT_URL = "https://ca.fullscript.com/welcome/alouden";

const steps = [
  {
    icon: "❧",
    title: "Browse the Dispensary",
    description:
      "Explore Andrea's curated catalog of professional grade supplements, hand-selected to support your wellness journey.",
  },
  {
    icon: "◍",
    title: "Create Your Free Account",
    description:
      "Sign up with Fullscript in a minute. Your account keeps your orders, refills, and recommendations in one place.",
  },
  {
    icon: "✦",
    title: "Delivered to Your Door",
    description:
      "Fullscript handles secure checkout and ships directly to you. No need to remember to reorder.",
  },
];

const benefits = [
  "Practitioner-selected, professional grade brands",
  "Third-party tested for purity and potency",
  "Personalized to your health goals",
  "Secure ordering & auto-refills through Fullscript",
];

const Supplements = () => {
  return (
    <main>
      {/* Hero */}
      <section className="w-full bg-[#f9f7f2] pt-32 pb-20 px-6 border-b border-[#e8e4db]">
        <div className="max-w-[1240px] mx-auto text-center flex flex-col items-center">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Fullscript Dispensary
          </p>
          <h1
            className="text-[#2d2d2d] leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Professional Grade{" "}
            <em className="text-[#FB7250] not-italic">Supplements</em>, Curated
            for You
          </h1>
          <p
            className="text-[#6b6b6b] text-lg mb-10 max-w-xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Shop the same high quality supplements Andrea trusts in her practice,
            selected for purity, potency, and your unique wellness goals.
          </p>
          <a
            href={FULLSCRIPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 hover:shadow-lg shadow-none"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Shop the Dispensary
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-[1240px] mx-auto">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            How It Works
          </p>
          <h2
            className="text-[#2d2d2d] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Three Simple Steps
          </h2>
          <div className="w-16 h-[2px] bg-[#96BB60] mb-14" />

          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl bg-[#f9f7f2] border border-[#e8e4db] p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-[#FB7250]">{step.icon}</span>
                  <span
                    className="text-xs uppercase tracking-[0.2em] text-[#96BB60]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Step {i + 1}
                  </span>
                </div>
                <h3
                  className="text-[#2d2d2d] text-xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#6b6b6b] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why professional-grade */}
      <section className="w-full bg-[#f9f7f2] py-24 px-6 border-t border-[#e8e4db]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Why It Matters
            </p>
            <h2
              className="text-[#2d2d2d] mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Not All Supplements Are Equal
            </h2>
            <div className="w-16 h-[2px] bg-[#96BB60] mb-8" />
            <p
              className="text-[#6b6b6b] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Practitioner-grade supplements are held to higher standards for
              sourcing, testing, and formulation than most retail brands. Through
              Fullscript, Andrea can recommend trusted products tailored to your
              body, so what you take actually supports your healing.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#e8e4db] p-8">
            <ul className="flex flex-col gap-4">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-[#6b6b6b]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FB7250] mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-white py-24 px-6 text-center">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center">
          <h2
            className="text-[#2d2d2d] mb-6 max-w-xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to Support Your Wellness from the Inside Out?
          </h2>
          <a
            href={FULLSCRIPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 hover:shadow-lg shadow-none"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Shop the Dispensary
          </a>
          <p
            className="mt-6 text-[11px] text-[#9b9b9b] max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            You will be taken to Andrea&apos;s secure Fullscript dispensary to
            create an account and place your order.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Supplements;
