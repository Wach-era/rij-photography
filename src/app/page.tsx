import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portofolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Pambo from "@/components/Pambo";
import Footer from "@/components/Footer";
import Head from 'next/head';


export const metadata = {
  title: 'RiJ Photography',
  description: 'Professional photography services',
};

export default function Home() {
  return (
    
        <main>
      <Navbar />
      <Hero />

      {/* Introduction */}
      <section className="intro" id="about">
        <div className="section-label">01 — ABOUT RiJ</div>

        <div className="intro-content">
          <h2>
            More than a photograph.
            <br />
            <span>It's a memory.</span>
          </h2>

          <p>
            At RiJ Photography, we believe every photograph has a story.
            From intimate portraits to unforgettable celebrations, we
            create images that capture the people, emotions and moments
            that matter most.
          </p>
        </div>
      </section>

      <Portfolio />
      <Services />
      <Pambo />
      <Contact />
      <Footer />

    </main>
  );
}