// lib/stations.ts

export type Station = {
  slug: string;
  name: string;
  callLetters: string;
  tagline: string;
  description: string;
  streamUrl: string;
  theme: {
    accent: string;
    accent2: string;
    heroImage: string;
  };
};

export const STATIONS: Station[] = [
  {
    slug: "semper-fi-country",
    name: "Semper Fi Country",
    callLetters: "KVVS",
    tagline: "Country With Backbone",
    description:
      "Veteran-powered country music, patriot voices, and real stories — twenty-four seven.",
    streamUrl: "https://s5.radio.co/s768575890/listen",
    theme: {
      accent: "#c0841d",
      accent2: "#7c2d12",
      heroImage: "/images/semperfi-hero.jpg",
    },
  },
  {
    slug: "ranger-rockwave",
    name: "Ranger Rockwave",
    callLetters: "KVVW",
    tagline: "Rock Without Apology",
    description:
      "Hard rock, metal, and alternative powered by veterans who live loud and stand tall.",
    streamUrl: "https://streamer.radio.co/s76987662d/listen",
    theme: {
      accent: "#2563eb",
      accent2: "#7c3aed",
      heroImage: "/images/ranger-hero.jpg",
    },
  },
];

/**
 * Helper used by station pages
 * Keeps page code clean and readable
 */
export function getStation(slug: string): Station {
  const station = STATIONS.find((s) => s.slug === slug);
  if (!station) {
    throw new Error(`Station not found: ${slug}`);
  }
  return station;
}
