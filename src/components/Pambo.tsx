export default function Pambo() {
  return (
    <section className="pambo" id="pambo">

      <div className="pambo-content">

        <div className="section-label">
          04 — PAMBO ART & FRAMES
        </div>

        <h2>
          Frame the
          <br />
          <span>moments.</span>
        </h2>

        <p>
          Your favourite photograph deserves more than a place
          on your phone. Pambo Art & Frames transforms photographs,
          artwork and treasured memories into pieces you can
          proudly display.
        </p>


        <div className="pambo-services">

          <div>
            <span>01</span>

            <h3>
              Photo Framing
            </h3>

            <p>
              Preserve your favourite photographs in beautifully
              crafted frames.
            </p>
          </div>


          <div>
            <span>02</span>

            <h3>
              Art Framing
            </h3>

            <p>
              Professional framing for paintings, prints and
              artwork of all kinds.
            </p>
          </div>


          <div>
            <span>03</span>

            <h3>
              Custom Frames
            </h3>

            <p>
              Choose the size, style and finish to create a frame
              made specifically for your piece.
            </p>
          </div>

        </div>


        <a href="/pambo" className="btn light">
          Talk to us ↗
        </a>

      </div>


      <div className="pambo-gallery">

        <div className="art-frame frame-large">

          <div className="art-piece">
            <span>RiJ</span>
            <strong>MEMORIES</strong>
          </div>

        </div>


        <div className="art-frame frame-small">

          <div className="art-piece">
            <span>ART</span>
            <strong>∞</strong>
          </div>

        </div>


        <div className="frame-shadow"></div>

      </div>

    </section>
  );
}