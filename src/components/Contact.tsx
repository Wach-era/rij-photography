"use client";

import { FormEvent, useState } from "react";

export default function Contact() {

  const [submitted, setSubmitted] =
    useState(false);


  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    setSubmitted(true);
  }


  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">

        <div className="section-label">
          05 — GET IN TOUCH
        </div>

        <h2>
          Let's create
          <br />
          <span>something beautiful.</span>
        </h2>

        <p>
          Tell us a little about what you have in mind.
          Whether it's a photoshoot, an event or a framing
          project, we'd love to hear from you.
        </p>

      </div>


      <div className="contact-layout">

        {/* CONTACT DETAILS */}

        <div className="contact-details">

          <div className="contact-detail">

            <span>
              CALL / WHATSAPP
            </span>

            <a href="tel:+254712485782">
              +254 712 485 782
            </a>

          </div>


          <div className="contact-detail">

            <span>
              EMAIL
            </span>

            <a href="mailto:info@rijphotography.co.ke">
              info@rijphotography.co.ke
            </a>

          </div>


          <div className="contact-detail">

            <span>
              LOCATION
            </span>

            <p>
              Digo Road, Mombasa, Kenya
            </p>

          </div>


          <div className="contact-detail">

            <span>
              HOURS
            </span>

            <p>
              Monday — Saturday
              <br />
              9:00 AM — 6:00 PM
            </p>

          </div>

        </div>


        {/* FORM */}

        <div className="contact-form-wrapper">

          {submitted ? (

            <div className="form-success">

              <div className="success-icon">
                ✓
              </div>

              <h3>
                Thank you.
              </h3>

              <p>
                We've received your enquiry.
                We'll get back to you as soon as possible.
              </p>

              <button
                onClick={() =>
                  setSubmitted(false)
                }
                className="btn secondary-dark"
              >
                Send another enquiry
              </button>

            </div>

          ) : (

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-field">

                  <label>
                    Your name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />

                </div>


                <div className="form-field">

                  <label>
                    Phone number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+254..."
                    required
                  />

                </div>

              </div>


              <div className="form-field">

                <label>
                  What can we help you with?
                </label>

                <select
                  name="service"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="studio">
                    Studio Photography
                  </option>

                  <option value="events">
                    Events & Celebrations
                  </option>

                  <option value="creative">
                    Creative Photography
                  </option>

                  <option value="printing">
                    Printing
                  </option>

                  <option value="framing">
                    Pambo Art & Frames
                  </option>

                  <option value="other">
                    Something else
                  </option>

                </select>

              </div>


              <div className="form-field">

                <label>
                  Tell us about your project
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what you have in mind..."
                  required
                />

              </div>


              <button
                type="submit"
                className="btn primary form-submit"
              >
                Send Enquiry ↗
              </button>

            </form>

          )}

        </div>

      </div>

    </section>
  );
}