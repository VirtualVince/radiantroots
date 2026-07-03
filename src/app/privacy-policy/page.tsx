import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Radiant Roots Vitality",
  description:
    "How Radiant Roots Vitality collects, uses, and protects your personal information.",
};

const CONTACT_EMAIL = "BocaRatonAcupuncture@gmail.com";

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "We collect information you voluntarily provide to us — for example, when you subscribe to our newsletter, book a consultation, or contact us. This may include your name, email address, phone number, and any details you choose to share.",
      "We also automatically collect limited technical information when you visit our site, such as your browser type, device, and pages visited, through cookies and similar technologies.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use your information to respond to your inquiries, schedule and manage appointments, send you our newsletter (only if you have subscribed), and improve our website and services.",
      "We do not sell your personal information.",
    ],
  },
  {
    heading: "Email Communications",
    body: "If you subscribe to our newsletter, we use EmailOctopus to manage and deliver our emails. You can unsubscribe at any time using the link at the bottom of any email, and we will stop sending you marketing messages.",
  },
  {
    heading: "Third-Party Services",
    body: [
      "We rely on trusted third parties to operate certain features of our site. These include Calendly (appointment booking), EmailOctopus (email newsletter), Google Maps (location maps), and Fullscript (supplement dispensary). When you use these features, your information is handled under that provider's own privacy policy.",
      "We encourage you to review the privacy policies of any third-party service you interact with.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    body: "Our website may use cookies and analytics tools to understand how visitors use the site so we can improve it. You can control or disable cookies through your browser settings.",
  },
  {
    heading: "Health Information",
    body: "This website is for general informational purposes and is not a patient portal. Please do not submit sensitive medical information through website forms. Any health details you share with us directly are treated as confidential and used only to provide care.",
  },
  {
    heading: "Data Security",
    body: "We take reasonable measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information, and you may unsubscribe from our communications at any time. To make a request, contact us using the details below.",
  },
  {
    heading: "Children's Privacy",
    body: "Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from them.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
  {
    heading: "Contact Us",
    body: `If you have questions about this Privacy Policy, please contact us at ${CONTACT_EMAIL}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 3, 2026"
      intro="Radiant Roots Vitality (“we,” “us,” or “our”) respects your privacy. This policy explains what information we collect when you use our website, how we use it, and the choices you have."
      sections={sections}
    />
  );
}
