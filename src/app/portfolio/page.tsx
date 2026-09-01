import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata = {
  title: 'RiJ Photography',
  description: 'Professional photography services',
};

export default function PortfolioPage() {
  return (
    <main>

      <Navbar />

      <section className="portfolio-page">

        <div className="portfolio-page-header">

          <div className="section-label">
            RiJ PHOTOGRAPHY
          </div>

          <h1>
            Our
            <br />
            <span>Portfolio.</span>
          </h1>

          <p>
            A collection of stories, people and moments
            captured through the RiJ lens.
          </p>

        </div>


        <PortfolioGallery />

      </section>

      <Footer />

    </main>
  );
}