export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <p className="eyebrow">RIJ PHOTOGRAPHY</p>

        <h1>
          Your moments.
          <br />
          <span>Beautifully captured.</span>
        </h1>

        <p className="hero-text">
          Professional photography, portraits, events and creative
          visual experiences crafted to make your memories last.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="btn primary">
            Explore Our Work
          </a>

          <a href="#contact" className="btn secondary">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}