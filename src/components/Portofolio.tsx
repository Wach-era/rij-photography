export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <div className="section-heading">

        <div>
          <div className="section-label">
            02 — PORTFOLIO
          </div>

          <h2>
            Stories we've
            <br />
            captured.
          </h2>
        </div>

        <p>
          Every photograph tells a story. Explore a selection
          of moments captured by RiJ Photography.
        </p>

      </div>


      <div className="portfolio-categories">

        <button className="active">
          All
        </button>

        <button>
          Portraits
        </button>

        <button>
          Weddings
        </button>

        <button>
          Graduation
        </button>

        <button>
          Creative
        </button>

        <button>
          Corporate
        </button>

        <button>
          Kids
        </button>

        <button>
          Family
        </button>

      </div>


      <div className="photo-gallery">

        <div className="photo-card tall">

          <img
            src="/images/portraits/5.jpeg"
            alt="Portrait photography by RiJ Photography"
          />

          <div className="photo-info">
            <span>PORTRAITS</span>
            <h3>Through the lens</h3>
          </div>

        </div>


        <div className="photo-card">

          <img
            src="/images/weddings/wedding1.jpeg"
            alt="Wedding photography by RiJ Photography"
          />

          <div className="photo-info">
            <span>WEDDINGS</span>
            <h3>Moments that matter</h3>
          </div>

        </div>

        <div className="photo-card">

          <img
            src="/images/kids/2.jpeg"
            alt="Kids Portraits by RiJ Photography"
          />

          <div className="photo-info">
            <span>KIDS</span>
            <h3>Beautiful Children</h3>
          </div>

        </div>


        <div className="photo-card tall">

          <img
            src="/images/graduation/event4.jpg"
            alt="Event photography by RiJ Photography"
          />

          <div className="photo-info">
            <span>Graduation</span>
            <h3>Graduations and Achievements</h3>
          </div>

        </div>

        <div className="photo-card">

          <img
            src="/images/family/6.jpeg"
            alt="Family photography by RiJ Photography"
          />

          <div className="photo-info">
            <span>FAMILY</span>
            <h3>With our Loved ones</h3>
          </div>

        </div>


        <div className="photo-card ">

          <img
            src="/images/creative/creative2.jpeg"
            alt="Creative photography by RiJ Photography"
          />

          <div className="photo-info">
            <span>CREATIVE</span>
            <h3>Beyond the ordinary</h3>
          </div>

        </div>

        <div className="photo-card wide ">

          <img
            src="/images/corporate/26.jpeg"
            alt="Creative photography by RiJ Photography"
          />

          <div className="photo-info">
            <span>Corporate</span>
            <h3>Be the boss of you</h3>
          </div>

        </div>

      </div>


      <div className="portfolio-button">

        <a href="/portfolio" className="btn primary">
          View Full Portfolio
        </a>

      </div>

    </section>
  );
}