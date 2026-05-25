"use client";
import "../app/globals.css";
import Navbar   from "../../components/Navbar";
// VARIANT A — Logo banner spans full width of the hero strip
import MainFullWidth from "../../components/MainFullWidth";
// VARIANT B — Logo banner centered on cream background (swap comment to switch)
// import MainCentered from "../../components/MainCentered";
import About   from "../../components/About";
import Services from "../../components/Services";
import Founder  from "../../components/Founder";
import Contact  from "../../components/Contact";
import Footer   from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainFullWidth />
      {/* <MainCentered /> */}
      <About />
      <Services />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}