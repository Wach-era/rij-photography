export type Photo = {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
};

export const photos: Photo[] = [
  {
    id: 1,
    src: "/images/portraits/portrait1.jpg",
    category: "Portraits",
    title: "Through the Lens",
    description:
      "A portrait session captured in the RiJ studio.",
  },

  {
    id: 2,
    src: "/images/portraits/portrait2.jpg",
    category: "Portraits",
    title: "Quiet Confidence",
    description:
      "Natural moments and expressive portraits.",
  },

  {
    id: 3,
    src: "/images/portraits/portrait3.jpg",
    category: "Portraits",
    title: "The Individual",
    description:
      "Creative portrait photography.",
  },

  {
    id: 4,
    src: "/images/weddings/wedding1.jpg",
    category: "Weddings",
    title: "Moments That Matter",
    description:
      "Capturing the emotion and beauty of the day.",
  },

  {
    id: 5,
    src: "/images/weddings/wedding2.jpg",
    category: "Weddings",
    title: "Forever Begins",
    description:
      "A celebration of love and new beginnings.",
  },

  {
    id: 6,
    src: "/images/events/event1.jpg",
    category: "Events",
    title: "Life in Motion",
    description:
      "Moments from an unforgettable celebration.",
  },

  {
    id: 7,
    src: "/images/events/event2.jpg",
    category: "Events",
    title: "The Celebration",
    description:
      "Event photography by RiJ Photography.",
  },

  {
    id: 8,
    src: "/images/creative/creative1.jpg",
    category: "Creative",
    title: "Beyond the Ordinary",
    description:
      "Creative photography inspired by imagination.",
  },

  {
    id: 9,
    src: "/images/creative/creative2.jpg",
    category: "Creative",
    title: "Another Perspective",
    description:
      "Experimental and artistic photography.",
  },
];