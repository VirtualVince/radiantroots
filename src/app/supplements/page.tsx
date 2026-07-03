import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Supplements from "../../../components/Supplements";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Supplements — Fullscript Dispensary | Radiant Roots Vitality",
  description:
    "Shop professional-grade, practitioner-selected supplements through Andrea Louden's Fullscript dispensary. Curated for purity, potency, and your wellness goals.",
};

export default function SupplementsPage() {
  return (
    <div>
      <Navbar />
      <Supplements />
      <Footer />
    </div>
  );
}
