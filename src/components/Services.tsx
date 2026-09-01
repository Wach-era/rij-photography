export default function Services() {
  const services = [
    {
      number: "01",
      title: "Studio Photography",
      description:
        "Professional portraits, family sessions, graduation photos, professional headshots and creative studio shoots.",
      tags: ["Portraits", "Headshots", "Family", "Graduation"],
    },
    {
      number: "02",
      title: "Events & Celebrations",
      description:
        "From intimate celebrations to large events, we capture the atmosphere, people and moments that make your occasion special.",
      tags: ["Weddings", "Birthdays", "Corporate", "Events"],
    },
    {
      number: "03",
      title: "Creative Photography",
      description:
        "Concept-driven photography for individuals, brands, artists and anyone looking to create something different.",
      tags: ["Creative", "Fashion", "Branding", "Conceptual"],
    },
    {
      number: "04",
      title: "Prints & Framing",
      description:
        "Turn your favourite photographs and artwork into physical pieces through our printing and framing services.",
      tags: ["Prints", "Photo Frames", "Art Frames", "Custom"],
    },
  ];

  return (
    <section className="services" id="services">

      <div className="section-label">
        03 — SERVICES
      </div>

      <div className="services-intro">
        <div>
          <h2>
            What we
            <br />
            <span>create.</span>
          </h2>
        </div>

        <p>
          Whether you're celebrating a milestone, building your
          personal brand or simply want to preserve a moment,
          RiJ Photography is here to bring your vision to life.
        </p>
      </div>


      <div className="service-list">

        {services.map((service) => (
          <div
            className="service-row"
            key={service.number}
          >

            <div className="service-number">
              {service.number}
            </div>


            <div className="service-main">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>


            <div className="service-tags">

              {service.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>


            <div className="service-arrow">
              ↗
            </div>

          </div>
        ))}

      </div>


      <div className="services-cta">

        <p>
          Have something specific in mind?
        </p>

        <a
          href="#contact"
          className="btn primary"
        >
          Let's Talk
        </a>

      </div>

    </section>
  );
}