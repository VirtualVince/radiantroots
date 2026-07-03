import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Radiant Roots Vitality",
  description:
    "The terms and conditions governing your use of the Radiant Roots Vitality website.",
};

const CONTACT_EMAIL = "andrea@radiantrootsvitality.com";

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.",
  },
  {
    heading: "No Medical Advice",
    body: [
      "The content on this website is provided for general informational and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.",
      "Statements on this site have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician or a qualified health provider before making changes to your health care. Results may vary from person to person.",
    ],
  },
  {
    heading: "Appointments & Bookings",
    body: "Appointments may be scheduled through our booking provider, Calendly. Please review any cancellation or rescheduling policies communicated to you at the time of booking.",
  },
  {
    heading: "Third-Party Links & Products",
    body: "Our website may link to third-party sites and services, including our Fullscript supplement dispensary. We are not responsible for the content, products, or practices of any third-party site. Purchases made through those services are governed by their own terms.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website, including text, images, logos, and graphics, is the property of Radiant Roots Vitality and may not be copied, reproduced, or distributed without permission.",
  },
  {
    heading: "Disclaimer of Warranties",
    body: "This website is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Radiant Roots Vitality shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may revise these Terms of Use at any time. Continued use of the site after changes are posted constitutes your acceptance of the updated terms.",
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of the State of Florida, without regard to its conflict of law provisions.",
  },
  {
    heading: "Contact Us",
    body: `If you have questions about these Terms of Use, please contact us at ${CONTACT_EMAIL}.`,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="July 3, 2026"
      intro="Please read these Terms of Use carefully before using the Radiant Roots Vitality website."
      sections={sections}
    />
  );
}
