import React from "react";
import Image from "next/image";

const credentials = [
  "NCCAOM® National Board Certified Diplomate of Oriental Medicine",
  "Florida Licensed Acupuncture Physician",
  "Acupuncture Injection Therapy Certified",
  "Certified Nutritional Practitioner (CNP)",
  "Certified Health Coach (CHC)",
  "Stress Reduction Therapist (SRT)",
  "Medical Intuition (MI)",
];

const education = [
  "Masters of Acupuncture and Oriental Medicine",
  "Bachelor of Health Sciences",
  "Bachelor of Communication Studies",
];

const Founder = () => {
  return (
    <section id="founder" className="w-full bg-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Meet Andrea
        </p>
        <h2
          className="text-[#2d2d2d] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          The Founder
        </h2>
        <div className="w-16 h-[2px] bg-[#96BB60] mb-14" />

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Photo */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-xl shadow-gray-200">
              <Image
                src="/FounderImg.png"
                alt="Andrea Louden — Founder of Radiant Roots Vitality"
                width={640}
                height={800}
                className="w-full object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">

            <div>
              <h3
                className="text-[#2d2d2d] mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Andrea Louden
              </h3>
              <p
                className="text-xs uppercase tracking-[0.2em] text-[#FB7250] mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                AP, L.Ac, CNP, CHC, Founder of Radiant Roots Vitality
              </p>

              <p
                className="text-[#6b6b6b] text-base leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Andrea Louden is a Licensed Acupuncturist, Holistic Nutrition
                Coach, Bioenergetic Practitioner, Reiki Level 2 and Medical Qi
                Gong Practitioner dedicated to helping others find balance, calm,
                and renewed vitality through integrative, heart-centered care.
              </p>
              <p
                className="text-[#6b6b6b] text-base leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Blending the wisdom of Traditional Chinese Medicine with modern
                bioenergetic and stress-reduction therapies, Andrea supports
                each client&apos;s unique journey toward wellness. Her sessions
                may weave together Acupuncture, Medical Qigong, Reiki,
                Nutritional guidance, and Biofeedback to address both the
                physical and emotional roots of imbalance.
              </p>
              <p
                className="text-[#6b6b6b] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                With a Master&apos;s in Traditional Chinese Medicine and over a
                decade of experience, Andrea&apos;s work is informed by both deep
                clinical training and her own 15-year personal healing journey.
                At the heart of her philosophy is a simple truth:{" "}
                <em className="text-[#2d2d2d]">
                  when we tend to our roots, mind, body, and spirit, our whole
                  being radiates health.
                </em>
              </p>
            </div>
          </div>
        </div>

        {/* Credentials & Education — full-width row below */}
        <div className="grid sm:grid-cols-2 gap-6 mt-14">
              <div className="rounded-2xl bg-[#f9f7f2] border border-[#e8e4db] p-6">
                <p
                  className="text-xs uppercase tracking-[0.2em] text-[#96BB60] mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Licenses &amp; Certifications
                </p>
                <ul className="flex flex-col gap-2">
                  {credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-[#6b6b6b]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FB7250] mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#f9f7f2] border border-[#e8e4db] p-6">
                <p
                  className="text-xs uppercase tracking-[0.2em] text-[#96BB60] mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Formal Education
                </p>
                <ul className="flex flex-col gap-2">
                  {education.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-2 text-sm text-[#6b6b6b]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#96BB60] mt-1.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

        <a
          href="https://calendly.com/andrea-radiantrootsvitality/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block px-8 py-3.5 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 shadow-none"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Book a Session with Andrea
        </a>

      </div>
    </section>
  );
};

export default Founder;