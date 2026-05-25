import React from "react";

const services = [
  {
    title: "Acupuncture",
    icon: "⟡",
    description:
      "NSEV (Non-Somatic Extraordinary Vessel) Acupuncture integrates mind, body, and spirit through the principles of classical Chinese Medicine. Andrea works with a wide range of physical and emotional conditions, relieving pain and restoring balance by harmonizing the extraordinary vessels.",
  },
  {
    title: "Herbal Medicine",
    icon: "❧",
    description:
      "Chinese Herbal Medicine is a cornerstone of Traditional Chinese Medicine — a holistic system practiced for thousands of years to restore balance and harmony. Carefully selected herbal formulas support your body's natural healing processes, strengthen vitality, calm the mind, and address both root cause and symptoms.",
  },
  {
    title: "Holistic Nutrition",
    icon: "◍",
    description:
      "Andrea blends Chinese Medicine and whole-food nutrition to support digestion, balance hormones, and address root causes. Her goal is a sustainable, joyful relationship with food that supports each person's unique body and lifestyle.",
  },
  {
    title: "Stress Reduction Therapy",
    icon: "◎",
    description:
      "The BioScan SRT system identifies root causes of stress-related symptoms by detecting subtle energetic signals within the body. Scanning 80,000+ potential stressors, it blends Acupuncture, Biofeedback, and Homeopathy with gentle Laser Light technology to activate the body's natural healing response.",
  },
  {
    title: "Reiki",
    icon: "✦",
    description:
      "Reiki is a gentle yet powerful energy practice supporting healing, balance, and alignment on all levels — physical, emotional, mental, and spiritual. Each session offers a sacred space for stillness and renewal, reducing stress, easing emotional tension, and deepening your connection to inner peace.",
  },
];

const conditions = [
  "Women's Health",
  "Stress Management",
  "Insomnia & Sleep Issues",
  "Gut Issues (Gas, Bloating, Acid Reflux, IBS)",
  "Food & Environmental Sensitivities",
  "Nervous System Support",
  "Mental Health (Anxiety & Depression)",
  "Period Problems",
  "Fertility Journey",
  "Perimenopause",
  "Menopause",
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-[#f9f7f2] py-24 px-6">
      <div className="max-w-[1240px] mx-auto">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Services
        </p>

        <h2
          className="text-[#2d2d2d] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What We Offer
        </h2>
        <div className="w-16 h-[2px] bg-[#b8a94a] mb-14" />

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white border border-[#e8e4db] p-7 flex flex-col gap-4 hover:border-[#FB7250] hover:shadow-sm transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-2xl text-[#FB7250] group-hover:scale-110 transition-transform duration-200 inline-block"
                >
                  {service.icon}
                </span>
                <h3
                  className="text-[#2d2d2d] text-xl font-semibold"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {service.title}
                </h3>
              </div>
              <p
                className="text-[#6b6b6b] text-sm leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Things We Address */}
        <div className="rounded-2xl bg-white border border-[#e8e4db] p-10">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Conditions
          </p>
          <h3
            className="text-[#2d2d2d] mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Things We Address
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FB7250] shrink-0" />
                <span
                  className="text-sm text-[#6b6b6b]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {condition}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://calendly.com/andrea-radiantrootsvitality/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full bg-[#FB7250] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#e85f3e] transition-all duration-300 shadow-none"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Book a Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;