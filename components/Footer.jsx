import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constants/index";

const Footer = () => {
  return (
    <footer
      className="w-full bg-white border-t border-[#e8e4db] mt-0"
      style={{ fontFamily: "var(--font-dm-sans)" }}
    >
      {/* Main footer body */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-16 py-14 flex flex-wrap justify-between gap-10">

        {/* Brand column */}
        <div className="flex flex-col justify-start items-start gap-5 max-w-[220px]">
          <Image
            src="/NavLogo.png"
            alt="Radiant Roots Vitality"
            width={160}
            height={48}
            className="object-contain"
          />
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            Personalized acupuncture &amp; holistic wellness in Boca Raton, FL.
          </p>
          <a
            href="https://calendly.com/andrea-radiantrootsvitality/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-[#FB7250] text-white hover:bg-[#e85f3e] transition-colors duration-200 shadow-none"
          >
            Book Now
          </a>
        </div>

        {/* Link columns */}
        <div className="flex flex-wrap gap-10">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3 min-w-[120px]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d2d2d]">
                {group.title}
              </h3>
              {group.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url || "#"}
                  target={item.url?.startsWith("http") ? "_blank" : undefined}
                  rel={item.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-[#6b6b6b] hover:text-[#FB7250] transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e8e4db]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-16 py-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-[#9b9b9b]">
            © {new Date().getFullYear()} Radiant Roots Vitality. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-[#9b9b9b] hover:text-[#FB7250] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs text-[#9b9b9b] hover:text-[#FB7250] transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;