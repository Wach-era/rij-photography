"use client";

import { useState } from "react";
import Image from "next/image";
import { photos } from "@/data/photos";

const categories = [
  "All",
  "Portraits",
  "Weddings",
  "Graduation",
  "Corporate",
  "Creative",
  "Family",
  "Kids",
  "Commercial"
];

export default function PortfolioGallery() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedPhoto, setSelectedPhoto] =
    useState<number | null>(null);


  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter(
          (photo) =>
            photo.category === activeCategory
        );


  const selected =
    photos.find(
      (photo) => photo.id === selectedPhoto
    );


  return (
    <>

      {/* Categories */}

      <div className="portfolio-categories">

        {categories.map((category) => (

          <button
            key={category}
            className={
              activeCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* Gallery */}

      <div className="full-gallery">

        {filteredPhotos.map((photo) => (

          <div
            key={photo.id}
            className="full-photo-card"
            onClick={() =>
              setSelectedPhoto(photo.id)
            }
          >

            <Image
              src={photo.src}
              alt = ""
              fill
              sizes="(max-width: 800px) 100vw, 33vw"
            />

            <div className="full-photo-overlay">

              <span>
                {photo.category}
              </span>

            </div>

          </div>

        ))}

      </div>


      {/* LIGHTBOX */}

      {selected && (

        <div
          className="lightbox"
          onClick={() =>
            setSelectedPhoto(null)
          }
        >

          <button
            className="lightbox-close"
            onClick={() =>
              setSelectedPhoto(null)
            }
          >
            ×
          </button>


          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="lightbox-image">

              <Image
                src={selected.src}
                alt= ""
                fill
                sizes="90vw"
              />

            </div>


            <div className="lightbox-info">

              <span>
                {selected.category}
              </span>

            </div>

          </div>

        </div>

      )}

    </>
  );
}