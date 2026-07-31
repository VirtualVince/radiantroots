import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Shared layout for legal pages (Privacy Policy, Terms of Use).
 * Pass `sections` as an array of { heading, body } where body is a
 * string or an array of paragraph strings.
 */
const LegalPage = ({ title, updated, intro, sections }) => (
  <div>
    <Navbar />

    <main className="w-full bg-white pt-32 pb-24 px-6">
      <div className="max-w-[820px] mx-auto">
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#FB7250] mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Legal
        </p>

        <h1
          className="text-[#2d2d2d] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </h1>
        <div className="w-16 h-[2px] bg-[#b8a94a] mb-6" />

        <p
          className="text-xs text-[#9b9b9b] mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Last updated: {updated}
        </p>

        {intro && (
          <p
            className="text-[#6b6b6b] text-base leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {intro}
          </p>
        )}

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2
                className="text-[#2d2d2d] text-2xl mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.heading}
              </h2>
              {(Array.isArray(s.body) ? s.body : [s.body]).map((para, i) => (
                <p
                  key={i}
                  className="text-[#6b6b6b] text-sm leading-relaxed mb-3"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default LegalPage;
