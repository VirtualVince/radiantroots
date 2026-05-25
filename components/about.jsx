import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          About
        </p>

        {/* Headline */}
        <h2
          className="text-[#2d2d2d] mb-6 max-w-2xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          We are so thrilled that you found us.{" "}
          <em className="text-[#FB7250]">You have come to the right place.</em>
        </h2>

        {/* Gold rule */}
        <div className="w-16 h-[2px] bg-[#b8a94a] mb-12" />

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — philosophy */}
          <div>
            <p
              className="text-[#6b6b6b] text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              At Radiant Roots Vitality, we believe that true healing begins when
              we realign with the body&apos;s natural intelligence. Blending the
              wisdom of Traditional Chinese Medicine with modern integrative
              therapies, we support each person&apos;s unique journey toward balance,
              calm, and renewed vitality.
            </p>
            <p
              className="text-[#6b6b6b] text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Whether you are navigating a chronic health challenge, seeking
              hormonal balance, or simply ready to feel more at home in your
              body — our heart-centered approach meets you exactly where you are.
            </p>

            <a
              href="https://calendly.com/andrea-radiantrootsvitality/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 shadow-none"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Begin Your Journey
            </a>
          </div>

          {/* Right — two paths */}
          <div className="flex flex-col gap-5">

            {/* In-person card */}
            <div className="rounded-2xl border border-[#e8e4db] bg-[#f9f7f2] p-7 hover:border-[#FB7250] transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#fdeae5] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#FB7250] text-lg">◎</span>
                </div>
                <div>
                  <h3
                    className="text-[#2d2d2d] mb-2 text-xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    In-Person Acupuncture &amp; Holistic Nutrition
                  </h3>
                  <p
                    className="text-[#6b6b6b] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Meet with Andrea in Boca Raton for a fully personalized
                    session addressing your physical and emotional roots of
                    imbalance.
                  </p>
                </div>
              </div>
            </div>

            {/* Online card */}
            <div className="rounded-2xl border border-[#e8e4db] bg-[#f9f7f2] p-7 hover:border-[#b8a94a] transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f5f2e8] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#b8a94a] text-lg">◈</span>
                </div>
                <div>
                  <h3
                    className="text-[#2d2d2d] mb-2 text-xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Online Support Group
                  </h3>
                  <p
                    className="text-[#6b6b6b] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Learn to heal yourself in a supportive, guided, online group
                    environment — from wherever you are in the world.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;