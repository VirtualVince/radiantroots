"use client";
import "../app/globals.css";
import Navbar   from "../../components/Navbar";
import Main from "../../components/Main";
import About   from "../../components/About";
import Services from "../../components/Services";
import Founder  from "../../components/Founder";
import Newsletter from "../../components/Newsletter";
import Contact  from "../../components/Contact";
import Footer   from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main/>
      <About />
      <Services />
      <Founder />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}