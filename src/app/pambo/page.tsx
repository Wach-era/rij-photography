import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'RiJ Photography',
  description: 'Professional photography services',
};

export default function PamboPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pambo-page-hero">
        <div className="section-label">
          PAMBO ART & FRAMES
        </div>

        <h1>
          Give your memories
          <br />
          <span>a place to live.</span>
        </h1>

        <p>
          Beautifully crafted frames for photographs, artwork
          and the moments you never want to forget.
        </p>
      </section>


      {/* INTRODUCTION */}
      <section className="pambo-page-intro">

        <div className="section-label">
          THE PAMBO DIFFERENCE
        </div>

        <div className="pambo-intro-grid">

          <h2>
            From digital
            <br />
            <span>to tangible.</span>
          </h2>

          <div>
            <p>
              We live in a world where thousands of memories
              sit inside our phones. Pambo Art & Frames gives
              those memories a physical presence.
            </p>

            <p>
              Whether it is a photograph taken at RIJ
              Photography, a family picture from your phone,
              or a piece of artwork you have created yourself,
              we can help turn it into something worth putting
              on your wall.
            </p>
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="pambo-options">

        <div className="section-label">
          WHAT WE FRAME
        </div>

        <div className="pambo-option-grid">

          <div className="pambo-option">

            <span>01</span>

            <h3>
              Photographs
            </h3>

            <p>
              Preserve your favourite photographs in a frame
              that complements the memory.
            </p>

          </div>


          <div className="pambo-option">

            <span>02</span>

            <h3>
              Artwork
            </h3>

            <p>
              Give paintings, illustrations and art prints
              the presentation they deserve.
            </p>

          </div>


          <div className="pambo-option">

            <span>03</span>

            <h3>
              RIJ Photography
            </h3>

            <p>
              Have your RiJ photographs printed and framed
              as a complete experience.
            </p>

          </div>


          <div className="pambo-option">

            <span>04</span>

            <h3>
              Custom Pieces
            </h3>

            <p>
              Have something unusual? Talk to us about a
              custom framing solution.
            </p>

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="pambo-process">

        <div className="section-label">
          HOW IT WORKS
        </div>

        <h2>
          Your picture.
          <br />
          <span>Our craft.</span>
        </h2>


        <div className="process-list">

          <div className="process-step">
            <span>01</span>

            <div>
              <h3>
                Choose what to frame
              </h3>

              <p>
                Bring us your photograph, artwork or choose
                one of your RiJ photographs.
              </p>
            </div>
          </div>


          <div className="process-step">
            <span>02</span>

            <div>
              <h3>
                Choose your size
              </h3>

              <p>
                Select from our available sizes or ask about
                a custom size.
              </p>
            </div>
          </div>


          <div className="process-step">
            <span>03</span>

            <div>
              <h3>
                Choose your frame
              </h3>

              <p>
                Find a frame style and finish that suits
                your photograph or artwork.
              </p>
            </div>
          </div>


          <div className="process-step">
            <span>04</span>

            <div>
              <h3>
                We create it
              </h3>

              <p>
                Our team prepares and frames your piece,
                ready for you to collect and display.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="pambo-page-cta">

        <div className="section-label">
          START YOUR PROJECT
        </div>

        <h2>
          Have something
          <br />
          <span>worth framing?</span>
        </h2>

        <p>
          Send us a photo of what you'd like framed and
          we'll help you find the right solution.
        </p>

        <a
          href="/#contact"
          className="btn light"
        >
          Talk to us ↗
        </a>

      </section>


      <Footer />

    </main>
  );
}